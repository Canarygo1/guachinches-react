import React from 'react';
import MenuCard from "./menuCard";

function MenuList({menus=[], restaurantId=""}) {
  return (
    <div className={"menu-container"}>
      {menus.map((menu)=><MenuCard restaurantId={restaurantId} menu={menu}/>)}
    </div>
  );
}

export default MenuList;
