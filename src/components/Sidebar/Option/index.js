import React from 'react'
import PropTypes from 'prop-types';



const Option = ({Icon, name}) => {
    return (
        <div className='option__container'>
            <div className="option__icon-container">
        <Icon className="option__icon" />
            </div>
            <div className="option__name">
                {name}
            </div>
        </div>
    )
}

Option.propTypes = {
    Icon: PropTypes.symbol,
    name: PropTypes.string
}

export default Option