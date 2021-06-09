import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {Button} from "@material-ui/core";

function SearchBar(props) {
  return (
    <div className={"search-bar-content"}>
      <div className="search-bar-container">
        <SearchIcon/>
        <input className={"search-bar"} type="text" placeholder={"Buscar"} name="name"/>
      </div>
      <Button className={"search-bar-button"} variant="contained"  color="primary">
        Buscar
      </Button>
    </div>
  );
}

export default SearchBar;
