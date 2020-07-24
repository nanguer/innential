import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Option from './Option';
import options from './options';
import Logo from '../../assets/innential-logo-purple.png';
import menu from './icons/menu.svg';

const Sidebar = () => {
  const [optionActive, setOptionActive] = useState('Dashboard');
  const [hide, toggle] = useState(true);

  const handleToggle = () => {
    toggle(!hide);
  };

  const sidebarStyle = useSpring({
    width: hide ? 100 : 276,
  });
  const titleStyle = useSpring({
    transform: hide ? 'translateX(-100px)' : 'translateX(0px)',
    opacity: hide ? 0 : 1,
  });
  const menuStyle = useSpring({
    opacity: hide ? 1 : 0,
  });

  return (
    <animated.div
      className="sidebar"
      style={sidebarStyle}
      onMouseEnter={() => handleToggle()}
      onMouseLeave={() => handleToggle()}
    >
      <div className="container-up">
        <animated.div className="title" style={titleStyle}>
          <img className="logo" src={Logo} alt="Innential" />
        </animated.div>
        <animated.div className="menu" style={menuStyle}>
          <img className="menu-img" src={menu} alt="innential-menu" />
        </animated.div>

        <div className="options">
          {options.map(({ name, Icon }, i) => (
            <Option
              key={i}
              name={name}
              Icon={Icon}
              optionActive={optionActive}
              setOptionActive={setOptionActive}
              hide={hide}
            />
          ))}
        </div>
      </div>
    </animated.div>
  );
};

export default Sidebar;
