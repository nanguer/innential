import React from 'react';
import { useSpring, animated } from 'react-spring';
import subOptions from './submenuOptions';
import PropTypes from 'prop-types';

const Submenu = ({ optionActive, setOptionActive, showSubmenu }) => {
  const style = useSpring({
    height: showSubmenu ? 'unset' : 0,
    opacity: showSubmenu ? 1 : 0,
    display: showSubmenu ? 'unset' : 'none',
  });

  const activeStyle = {
    color: '#5a55ab',
    borderRight: '2px solid #5a55ab',
  };

  const handleSelect = (option) => {
    setOptionActive(option);
  };

  return (
    <animated.div className="submenu" style={style}>
      <ul>
        {subOptions.map((option, i) => (
          <li
            key={i}
            style={optionActive === option ? activeStyle : null}
            className="submenu__option"
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </animated.div>
  );
};

Submenu.propTypes = {
  showSubmenu: PropTypes.bool,
  optionActive: PropTypes.string,
  setOptionActive: PropTypes.func,
};

export default Submenu;
