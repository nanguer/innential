import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import subOptions from '../../Submenu/submenuOptions';

import Submenu from '../../Submenu';
import PropTypes from 'prop-types';

const Option = ({ Icon, name, optionActive, setOptionActive, hide }) => {
  const [isLearning, setIsLearning] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const selected = optionActive === name;

  useEffect(() => {
    if (name === 'Learning') setIsLearning(true);
  }, [isLearning, name]);

  useEffect(() => {
    if (hide) setShowSubmenu(false);
  }, [hide, setShowSubmenu]);

  const handleSelectOption = (option) => {
    const optionToBeSet = isLearning ? 'My Learning' : option;
    setOptionActive(optionToBeSet);
    if (isLearning) {
      setShowSubmenu(!showSubmenu);
      //the code below doesn't work, couldn't figure out why.. it's suppoused to hide the submenu
      //if the user clicks outside the submenu options.
    } else if (!subOptions.includes(option) || option !== 'My Learning') {
      setShowSubmenu(false);
    }
  };

  const style = useSpring({
    width: showSubmenu ? '277px' : '100px',
    opacity: showSubmenu ? 1 : 0,
  });

  const optionNameStyle = useSpring({
    opacity: hide ? 0 : 1,
    transform: hide ? 'translateX(-80px)' : 'translateX(0)',
  });

  const activeStyle = {
    fontWeight: '600',
    borderRight: '2px solid #5a55ab',
  };

  return (
    <>
      <div
        className="option__container"
        style={selected ? activeStyle : null}
        onClick={() => handleSelectOption(name)}
      >
        <div className="option__title-container">
          <div className="option__icon-container">
            <Icon
              className="option__icon"
              stroke={selected ? '#5a55ab' : '#556685'}
            />
          </div>
          <animated.div className="option__name" style={optionNameStyle}>
            {name}
          </animated.div>
        </div>
        {isLearning && (
          <animated.div className="transparency" style={style}></animated.div>
        )}
      </div>
      {isLearning ? (
        <Submenu
          optionActive={optionActive}
          setOptionActive={setOptionActive}
          showSubmenu={showSubmenu}
        />
      ) : null}
    </>
  );
};

Option.propTypes = {
  Icon: PropTypes.object,
  name: PropTypes.string,
  optionActive: PropTypes.string,
  setOptionActive: PropTypes.func,
  hide: PropTypes.bool,
};

export default Option;
