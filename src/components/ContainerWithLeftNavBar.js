import React from 'react';
import LateralBar from "./lateralBar";

function ContainerWithLeftNavBar(props) {
  return (
    <div className={"main-body"}>
      <LateralBar/>
      {props.children}
    </div>
  );
}

export default ContainerWithLeftNavBar;
