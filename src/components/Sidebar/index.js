import React from 'react';
import Option from './Option';
import options from './options';
import Logo from '../../assets/innential-logo-purple.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container-up">
        <div className="title">
          <img className="logo" src={Logo} alt="Innential" />
        </div>
        <div className="options">
          {options.map(({ name, Icon }, i) => (
            <Option key={i} name={name} Icon={Icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
