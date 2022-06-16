import React, {useCallback, useEffect, useState} from 'react';
import Title from "../components/title";
import TitleWithRating from "../components/titleWithRating";
import {
  Box,
  Button,
  CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
  FormControlLabel, Modal,
  Switch,
  TextField,
  Typography
} from "@material-ui/core";
import TextFieldWithLabel from "../components/textFieldWithLabel";
import CategoryList from "../components/categoryList";
import ImageDragAndDrop from "../components/imageDragAndDrop";
import ImageUploadedCard from "../components/imageUploadedCard";
import {
  useParams
} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getRestauranInfo} from "../redux/actioner/restaurantAction";
import ApiRequest from "../Data/Petitions/ApiRequest";
import {CheckCircle} from "@material-ui/icons";
import SelectMunicipality from "../components/selectMunicipality";
import {useHistory} from "react-router-dom";

function Main(props) {
  let {businessId} = useParams();
  const dispatch = useDispatch();
  const {restaurantInfo} = useSelector(state => state.restaurantInfo);
  const {result} = restaurantInfo;
  const [inputValues, setInputValues] = useState({  enable:true});
  const [loading, setLoading] = useState(false);
  const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false);
  const [linkGeneratorDialogIsOpen, setlinkGeneratorDialogIsOpen] = useState(false);
  const [saved, setSaved] = useState(true);
  const [municipalities, setMunicipalities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesSelected, setCateogiresSelected] = useState([]);
  const [photos, setPhotos] = useState([]);
  const history = useHistory();



  const handleCloseDeleteDialog =()=>{
    setDeleteDialogIsOpen(false)
  }
  const handleCloseLinkDialog =()=>{
    setlinkGeneratorDialogIsOpen(false)
  }

  const handleDeleteBusiness = async () => {
    let response = await ApiRequest.deleteRestaurant(result.id)
    history.push(`/app/admin/main`);

  }

  useEffect( () => {
    async function getData() {
      const {result} = restaurantInfo;
      setInputValues()

      let {data} = await ApiRequest.getAllMunicipalities();
      setMunicipalities(data.result)
      let categoriesData = await ApiRequest.getAllCategories();

      setCategories(categoriesData.data.result);
      await getAllPhotos();
      dispatch(getRestauranInfo(businessId));
    }
    getData();
  }, []);

  useEffect(() => {
    setInputValues(result);
    if (result.categoriaRestaurantes !== undefined) {
      setCateogiresSelected(result.categoriaRestaurantes)
    }
  }, [result]);

  const handleOnChange = useCallback(event => {
    let {name, value} = event.target;
    if (name === "enable") {
      value = event.target.checked;
    }
    setSaved(false);
    setInputValues({...inputValues, [name]: value});
  });

  const onSaveClick = async () => {
    setLoading(true);
    await ApiRequest.updateRestaurant(businessId, inputValues);
    setLoading(false);
    setSaved(true);
  }
  const getAllPhotos = async () => {
    let photosData = await ApiRequest.getAllPhotos(businessId);
    setPhotos(photosData.data.result);
  }

  const handleOpenDeleteDialog = ()=> {
    console.log('TESTTT')
    setDeleteDialogIsOpen(true)
  }

  return (
    <div className={"test"}>
      <Title title={"Principal"}></Title>
      <div className={"page-container-business-basic-data"}>
        <div className={"divide-row-main-edit"}>
          <div className={"test-02"}>
            <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
              <TitleWithRating name={result.nombre} rating={4.5}/>
              <Box alignSelf={"center"} marginLeft={"30px"}>
                {loading ? <CircularProgress disableShrink/> :
                  saved ? <CheckCircle color={"primary"} fontSize={"large"}/> :
                    <Typography color={"secondary"}>CAMBIOS SIN GUARDAR</Typography>}
                <Button variant="contained" color="primary" onClick={onSaveClick}>
                  Guardar
                </Button>
              </Box>
            </Box>
            <Button variant={'outlined'} color={'primary'} onClick={()=>{

              setlinkGeneratorDialogIsOpen(true)
            }}>Generar link validador cupones</Button>

            <Box display={"flex"} justifyContent={"center"} pt={"1rem"}>
              <Typography>Datos del negocio</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
              <FormControlLabel
                control={
                  <Switch size="small" color={"primary"} name={"enable"} onChange={handleOnChange}
                                  checked={inputValues.enable}/>}
                label={"ESTADO"}
              />
            </Box>
            <TextFieldWithLabel value={inputValues.nombre} name="nombre" onChange={handleOnChange} label={"Nombre"}/>
            <TextFieldWithLabel value={inputValues.telefono} name="telefono" onChange={handleOnChange}
                                label={"Telefono"}/>
            <TextFieldWithLabel value={inputValues.movilPago} name="movilPago" onChange={handleOnChange}
                                label={"móvil para pago"}/>
            <Typography>Horario</Typography>
            <TextField
              id="outlined-textarea"
              multiline
              rows="4"
              fullWidth={true}
              value={inputValues.horarios}
              onChange={handleOnChange}
              name={"horarios"}
            />

            <Typography>Categorías</Typography>
            {<CategoryList categories={categories} categoriesOfRestaurant={result.categoriaRestaurantes}
                           categoriesSelected={categoriesSelected} businessId={businessId}
                           setCategoriesSelected={setCateogiresSelected}/>
            } <Typography>Municipio</Typography>
            <SelectMunicipality municipalities={municipalities} value={inputValues.NegocioMunicipioId}
                                onChange={handleOnChange}/>
            <TextFieldWithLabel value={inputValues.direccion} name={"direccion"} onChange={handleOnChange}
                                label={"Direccion"}/>
            <TextFieldWithLabel value={inputValues.googleUrl} name={"googleUrl"} onChange={handleOnChange}
                                label={"URL google"}/>

              <Button style={{
                marginTop:20,
                marginBottom:20
              }} color={'secondary'} variant={'contained'} onClick={handleOpenDeleteDialog}>Eliminar negocio</Button>

          </div>
        </div>
        <div className={"divide-row"}>
          <Typography>Fotos principales</Typography>
          <ImageDragAndDrop loadPhotos={() => getAllPhotos().bind} businessId={businessId} photos={photos.length}/>
          <Box display={"flex"} flexDirection={"row"} gridGap={"4px"} justifyContent={"center "} minWidth={"70%"}
               flexWrap={"wrap"} marginTop={"10px"}>
            {photos.map((e)=> <ImageUploadedCard photoId={e.id} businessId={businessId} loadPhotos={() => getAllPhotos().bind}  isMain={e.type==="principal"} imgUrl={e.photoUrl}/> )}
          </Box>
        </div>
      </div>
      <Dialog open={deleteDialogIsOpen} onClose={handleCloseDeleteDialog}>
        <DialogTitle id="alert-dialog-title">
          {`ELIMINAR ${inputValues.nombre}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`Estas seguro que deseas eliminar  ${inputValues.nombre}. ESTA OPERACIÓN NO ES REVERSIBLE.`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant={'outlined'} onClick={handleCloseDeleteDialog}>Cancelar</Button>
          <Button color={'secondary'} variant={'contained'} autoFocus onClick={handleDeleteBusiness}>
          Aceptar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={linkGeneratorDialogIsOpen} onClose={handleCloseLinkDialog}>
        <DialogTitle id="alert-dialog-title">
          {`Código valido para: ${inputValues.nombre}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`Tu link es: https:www.guachinchesmodernos.com/cupones/enable/${result.id}`}
            <Button variant={'outlined'} color={'primary'} onClick={()=>{
              navigator.clipboard.writeText(`https:www.guachinchesmodernos.com/cupones/enable/${result.id}`)}
            } >Copiar link</Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant={'outlined'} onClick={handleCloseLinkDialog}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Main;
