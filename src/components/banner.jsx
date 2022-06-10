import React from 'react';

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
