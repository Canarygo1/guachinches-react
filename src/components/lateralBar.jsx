import React from 'react';

const LateralBar = () => {
  return (
    <div className={"lateral-bar"}>
        <div className={"up-section-lateral-bar"}>
          <img className={"logo-lateral-bar"} src="logo.png" alt=""/>
        </div>
        <div  className={"down-section-lateral-bar"}>
            <p className={"menu-item"}>Principal</p>
            <p className={"menu-item"}>Mi perfil</p>
            <p className={"menu-item"}>Carta</p>
            <p className={"menu-item"}>Valoraciones</p>
        </div>
    </div>
  );
};

export default LateralBar;
