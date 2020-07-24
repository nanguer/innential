import React, {useState, useEffect} from 'react'
import Submenu from '../../Submenu';
import PropTypes from 'prop-types';



const Option = ({Icon, name, optionActive, setOptionActive}) => {  

    const [isLearning, setIsLearning] = useState(false)
    const [showSubmenu, setShowSubmenu] = useState(false);

    useEffect(()=> {
        if(name==='Learning') setIsLearning(true)
    }, [isLearning, name])

    const handleSelectOption = option => {
        const optionToBeSet = isLearning?'My Learning':option;
        setOptionActive(optionToBeSet)
        if(isLearning) setShowSubmenu(!showSubmenu);
    }

  
    const activeStyle ={
        fontWeight:'600',
        borderRight: '2px solid #5a55ab'
    }

   
    const selected = optionActive===name;

    return (
        <>
        <div className='option__container' style={!isLearning&&selected?activeStyle:null} onClick={()=>handleSelectOption(name)} >
            <div className="option__title-container" >
            <div className="option__icon-container">
        <Icon className="option__icon" stroke={selected?'#5a55ab':'#556685'} />
            </div>
            <div className="option__name">
                {name}
            </div>
            </div>
        {isLearning&&<div className="transparency" style={showSubmenu?{opacity:'1'}:null}></div>}
        </div>
        {isLearning?<Submenu optionActive={optionActive} setOptionActive={setOptionActive} showSubmenu={showSubmenu} /> :null}
        </>
    )
}

Option.propTypes = {
    Icon: PropTypes.object,
    name: PropTypes.string,
    optionActive: PropTypes.string,
    setOptionActive: PropTypes.func
}

export default Option