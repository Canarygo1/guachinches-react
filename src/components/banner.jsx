import React from 'react';
import {Button} from "@material-ui/core";
import ApiRequest from "../Data/Petitions/ApiRequest";

function Banner({imgUrl ,restaurantId, id, index}) {

  return (
    <div>
      <div  className={"img-banner"}
           style={{backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', border: "orange"}}>
      </div>
    </div>
  );
}

export default Banner;
