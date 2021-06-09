import React, {useCallback, useState} from 'react';
import Title from "../components/title";
import SearchBar from "../components/searchBar";
import MenuList from "../components/menuList";
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import ApiRequest from "../Data/Petitions/ApiRequest";
import {useParams} from "react-router-dom";

function Menu(props) {
  let {businessId} = useParams();
  const {restaurantInfo} = useSelector(state => state.restaurantInfo);
  const [inputValues, setInputValues] = useState({});
  const [open, setOpen] = useState(false);

  const {result} = restaurantInfo;
  const handleClose = () => {
    setOpen(false);
  };
  const addMenuItem = async () => {
      let response = await ApiRequest.addMenuItem(inputValues, businessId);
      console.log(response);
  }
  const handleOnChange = useCallback(event => {
    let {name, value} = event.target;
    if (name==='precio'){
      value =parseFloat(value);
    }
    setInputValues({...inputValues, [name]: value});
  });
  return (
    <div>
      <Title title={"Carta"}></Title>
      <SearchBar/>
      <Box display={"flex"} justifyContent={"center"}>
        <Button onClick={() => setOpen(true)} className={"search-bar-button"} variant="contained" color="primary">
          Crear Nuevo Plato
        </Button>
      </Box>
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Crear un nuevo plato</DialogTitle>
        <DialogContent>
          <Box display={"flex"} flexDirection={"column"} width={"30rem"}>
            <TextField name={"plato"} label={"Plato"} onChange={handleOnChange}/>
            <TextField
              name={"descripcion"} label={"Descripcion"} onChange={handleOnChange}/>
            <TextField inputProps={{maxLength: 5}}
                       name={"precio"} label={"Precio"} onChange={handleOnChange}/>

          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={()=>addMenuItem()} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>

      <MenuList menus={result.menus} restaurantId={businessId}/>
    </div>
  );
}

export default Menu;
