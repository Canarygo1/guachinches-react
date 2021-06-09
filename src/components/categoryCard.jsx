import React from 'react';
import {Typography} from "@material-ui/core";

function CategoryCard({ onClick,imgUrl = "", name = "", isSelect = false, id=""}) {
  // console.log(id);
  return (
    <div style={isSelect ? {backgroundColor: "silver"} : {backgroundColor: "white"}} className={"category-card"}
         onClick={()=>onClick(!isSelect, id)}>
      <div className={"category-img-container"}   style={{backgroundImage: `url(${imgUrl})` ,backgroundSize: 'cover'}}/>

      <Typography align={"center"} className={"card-category-border"}>{name}</Typography>
    </div>
  );
}

export default CategoryCard;
