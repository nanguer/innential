import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

const Submenu = ({optionActive, setOptionActive, showSubmenu}) => {
    
useEffect(()=>{
    console.log(showSubmenu)
},[showSubmenu])
    const subOptions = [
        'My Learning', 'Books', 'Articles', 'Workshops'
    ]
    const selectedStyle ={
        color:'#5a55ab',
        borderRight: '2px solid #5a55ab'
    }

    const hideStyles ={ 
        height:'0',
        opacity:'0',
        display:'none'
    }

    const handleSelect = (option)=> {
        setOptionActive(option)
    }


    return (
        <div className="submenu" style={showSubmenu?null:hideStyles}>
            <ul>
            {subOptions.map((option, i)=>(
               <li key={i} style={optionActive===option?selectedStyle:null} className='submenu__option' onClick={()=>handleSelect(option)}>{option}</li>
           ))}    
            </ul>
          
        </div>
    )
}

Submenu.propTypes = {
    showSubmenu: PropTypes.bool,
    optionActive: PropTypes.string,
    setOptionActive: PropTypes.func
}

export default Submenu
