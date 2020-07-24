import React from 'react'
import PropTypes from 'prop-types';



const Option = ({Icon, name, optionActive, setOptionActive}) => {  



    const handleSelectOption = option => {
        setOptionActive(option)
    }

  
    const activeStyle ={
        fontWeight:'600',
        borderRight: '2px solid #5a55ab'
    }

    const selected = optionActive===name;

    return (
        <div className='option__container' style={selected?activeStyle:null} onClick={()=>handleSelectOption(name)}>
            <div className="option__icon-container">
        <Icon className="option__icon" stroke={selected?'#5a55ab':'#556685'} />
            </div>
            <div className="option__name">
                {name}
            </div>
          
        </div>
    )
}

Option.propTypes = {
    Icon: PropTypes.object,
    name: PropTypes.string,
    optionActive: PropTypes.string,
    setOptionActive: PropTypes.func
}

export default Option