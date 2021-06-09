import React, {useCallback, useEffect, useState} from 'react';
import {
  Box,
  Button,
  Dialog, DialogActions, DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, TextField
} from "@material-ui/core";
import Title from "../components/title";
import SearchBar from "../components/searchBar";
import ApiRequest from "../Data/Petitions/ApiRequest";
import {useHistory} from "react-router-dom";
import SelectMunicipality from "../components/selectMunicipality";
import {CheckCircle, HighlightOff} from "@material-ui/icons";

function AdminMain(props) {
  function createData(name, zone, fat, carbs, id, status) {
    return {name, zone, fat, carbs, id, status};
  }
  const [open, setOpen] = useState(false);

  const [restaurants, setRestaurants] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  let dateLastPayment = new Date();
  let parseDate = `${dateLastPayment.getFullYear()}-${dateLastPayment.getMonth()+1}-${dateLastPayment.getDate()+7}`;

  const [inputValues, setInputValues] = useState({'ultimoPago': parseDate});

  const history = useHistory();
  const handleCreation = async () => {

    setInputValues({...inputValues, 'ultimoPago': parseDate});
    console.log(inputValues)

    if (Object.keys(inputValues).length === 5) {
      let response = await ApiRequest.addRestaurant(inputValues);
      console.log(response.data.code);
      if (response.data.code === 200){
        window.location.reload();

      }
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect( () => {
    async function getData() {
      let {data} = await ApiRequest.getAllBusiness();
      let municipalitiesData = await ApiRequest.getAllMunicipalities();
      setRestaurants(data.result);
      setMunicipalities(municipalitiesData.data.result);
    }
    getData();
  }, []);
  const rows = [];
  const tableData = () => {
    for (let i = 0; i < restaurants.length; i++) {
      console.log(restaurants[i].ultimoPago);
      let row = createData(restaurants[i].nombre, restaurants[i].municipio.Nombre, restaurants[i].ultimoPago, 0, restaurants[i].id, restaurants[i].enable);
      rows.push(row);
    }
  }
  tableData();

  const handleOnChange = useCallback(event => {
    const {name, value} = event.target;

    setInputValues({...inputValues, [name]: value});
  });

  const goButtonClicked = (businessId, route)=>{
    history.push(`/app/${businessId}${route}`);
  }


  return (
    <div>
      <Title title={"Lista de negocios"}/>
      <SearchBar/>
      <Button onClick={()=>setOpen(true)} className={"search-bar-button"} variant="contained"  color="primary">
        Crear Nuevo Negocio
    </Button>
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Crear un nuevo negocio</DialogTitle>
        <DialogContent>
          <Box display={"flex"} flexDirection={"column"} width={"30rem"}>
            <TextField name={"nombre"} label={"nombre"} onChange={handleOnChange}></TextField>
            <TextField name={"telefono"} label={"telefono"} onChange={handleOnChange}></TextField>
            <TextField name={"direccion"} label={"direccion"} onChange={handleOnChange} ></TextField>
            <SelectMunicipality municipalities={municipalities} value = {inputValues.NegocioMunicipioId} onChange={handleOnChange}/>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleCreation} color="primary" autoFocus >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Negocios</TableCell>
              <TableCell align="right">Zona</TableCell>
              <TableCell align="right">Ultimo pago</TableCell>
              <TableCell align="right">Fecha siguiente pago</TableCell>
              <TableCell align="right">Activo</TableCell>
              <TableCell align="center">Perfil</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.zone}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.status === true? <CheckCircle color={"primary"}/> : <HighlightOff color={"secondary"}/>}</TableCell>
                <TableCell align="center">
                  <Button color={"primary"} onClick={() => goButtonClicked(row.id,"")}>
                    Abrir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AdminMain;
