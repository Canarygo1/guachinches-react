import React from 'react';
import LateralBar from "./lateralBar";

function ContainerWithLeftNavBar({isAdmin=false,children}) {
  return (
    <div className={"main-body"}>
      <LateralBar isAdmin={isAdmin}/>
      {children}
    </div>
  );
}

export default ContainerWithLeftNavBar;
