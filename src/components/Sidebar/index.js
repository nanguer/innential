import React, {useState, useEffect} from 'react';
import Option from './Option';
import options from './options';
import Logo from '../../assets/innential-logo-purple.png';

const Sidebar = () => {
  const [optionActive, setOptionActive] = useState('Dashboard')

  useEffect(()=>{
    console.log(optionActive)
  }, [optionActive])

  return (
    <div className="sidebar">
      <div className="container-up">
        <div className="title">
          <img className="logo" src={Logo} alt="Innential" />
        </div>
        <div className="options">
          {options.map(({ name, Icon }, i) => (
            <Option key={i} name={name} Icon={Icon} optionActive={optionActive} setOptionActive={setOptionActive} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
