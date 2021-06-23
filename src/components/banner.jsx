import React from 'react';
import TextFieldWithLabel from "./textFieldWithLabel";

function Banner({imgUrl,restaurantId}) {
  return (
    <div>
      <div className={"img-banner"}
           style={{backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', border: "orange"}}>
      </div>
      <TextFieldWithLabel label={"Id Restaurante"} value={restaurantId}/>
    </div>

  );
}

export default Banner;
