import React, {useCallback, useEffect, useState} from 'react';
import {
  Box,
  Button,
  Dialog, DialogActions, DialogContent,
  DialogTitle, Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, TextField
} from "@material-ui/core";
import Title from "../components/title";
import ApiRequest from "../Data/Petitions/ApiRequest";
import {useHistory} from "react-router-dom";
import SelectMunicipality from "../components/selectMunicipality";
import {CheckCircle, HighlightOff} from "@material-ui/icons";
import Alert from '@material-ui/lab/Alert';
import SearchIcon from "@material-ui/icons/Search";

function AdminMain(props) {
  function createData(name, zone, fat, carbs, id, status,movilPago) {
    return {name, zone, fat, carbs, id, status,movilPago};
  }
  const [open, setOpen] = useState(false);
  const [openSMS, setOpenSMS] = useState(false);
  const [restaurantsAux,setRestaurantsAux] = useState([])
  const [restaurants, setRestaurants] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  let dateLastPayment = new Date();
  let parseDate = `${dateLastPayment.getFullYear()}-${dateLastPayment.getMonth()+1}-${dateLastPayment.getDate()}`;

  const [inputValues, setInputValues] = useState({'ultimoPago': parseDate});
  const [inputValuesSMS, setInputValuesSMS] = useState({});
  const [smsSend, setSmsSend] = useState(false);

  const history = useHistory();
  const handleCreation = async () => {
    setInputValues({...inputValues, 'ultimoPago': parseDate});

      let response = await ApiRequest.addRestaurant(inputValues);
      console.log('add',);
    // let googlePlacesIds = await ApiRequest.googlePlacesIds();
    //
    //   let googleOpening = await ApiRequest.googleOpening();
      if (response.data.code === 200){
        history.push(`/app/${response.data.result.id}`);
      }

  };
  const handleSendSMS = async ()=>{
    let response = await ApiRequest.sendPaymentSMS(inputValuesSMS);
    console.log(response);
    if (response.data.code === 200){
      setSmsSend(true);
    }
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseSMS = () => {
    setOpenSMS(false);
  };
  const handleOpenSMS = (row) => {
    const {movilPago, id,  name} = row;
    setInputValuesSMS({movilPago,id,nombre:name});
    setOpenSMS(true);
  };
  useEffect( () => {
    async function getData() {
      let {data} = await ApiRequest.getAllBusiness();
      let municipalitiesData = await ApiRequest.getAllMunicipalities();
      setRestaurants(data.result);
      setRestaurantsAux(data.result);
      setMunicipalities(municipalitiesData.data.result);
    }
    getData();
  }, []);
  const rows = [];
  const tableData = () => {
    for (let i = 0; i < restaurants.length; i++) {
      console.log(restaurants[i]);
      let row = createData(restaurants[i].nombre, restaurants[i].municipio.Nombre, restaurants[i].ultimoPago, 0, restaurants[i].id, restaurants[i].enable,restaurants[i].movilPago);
      rows.push(row);
    }
  }
  tableData();
  const handleOnChange = useCallback(event => {
    const {name, value} = event.target;

    setInputValues({...inputValues, [name]: value});
  });

  const handleOnChangeSMS = useCallback(event => {
    const {name, value} = event.target;

    setInputValuesSMS({...inputValuesSMS, [name]: value});
  });
  const goButtonClicked = (businessId, route)=>{
    history.push(`/app/${businessId}${route}`);
  }

  const [searchValue,setSearchValue] = useState('');
  const  handleSearch = (event)=>{
    const {value} = event.target
    setSearchValue(value);
    console.log(restaurantsAux);
    let obj = restaurantsAux.filter(o => o.nombre.toLowerCase().includes(value.toLowerCase()) );
    setRestaurants(obj)
    console.log(obj);
  }
  return (
    <div>
      <Title title={"Lista de negocios"}/>
      <div className={"search-bar-content"}>
        <div className="search-bar-container">
          <SearchIcon/>
          <input value={searchValue}  onChange={handleSearch} className={"search-bar"} type="text" placeholder={"Buscar"} name="name"/>
        </div>
        <Button className={"search-bar-button"} variant="contained"  color="primary">
          Buscar
        </Button>
      </div>
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
      <Dialog onClose={handleCloseSMS} aria-labelledby="simple-dialog-title" open={ openSMS}>
          <DialogTitle id="simple-dialog-title">Enviar SMS de pago</DialogTitle>
        <DialogContent>
          <Box display={"flex"} flexDirection={"column"} width={"30rem"}>
            <TextField name={"movilPago"} label={"móvil para pago"} value={inputValuesSMS.movilPago} onChange={handleOnChangeSMS}></TextField>
            <TextField inputProps={{ maxLength: 2 }}
                           name={"duracion"} label={"duracion (en meses)"} value={inputValuesSMS.duracion} onChange={handleOnChangeSMS}></TextField>
            <TextField inputProps={{ maxLength: 5 }}
                           name={"precio"} label={"precio (por mes)"} value={inputValuesSMS.precio} onChange={handleOnChangeSMS}></TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSMS} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSendSMS} color="primary" autoFocus >
            Enviar SMS
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={smsSend}
        variant={"success"}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        autoHideDuration={2000}
        message="SMS enviado con exito!"
        onClose={() => setSmsSend(false)}
      >
        <Alert severity={"success"}>
          SMS enviado con exito!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AdminMain;
