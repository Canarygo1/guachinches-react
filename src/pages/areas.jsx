import React, {useEffect, useState} from 'react';
import ApiRequest from "../Data/Petitions/ApiRequest";
import Title from "../components/title";
import {Box, Button, Divider, TextField, Typography} from "@material-ui/core";
import TextFieldWithLabel from "../components/textFieldWithLabel";

function Areas(props) {
  const [areas, setAreas] = useState([]);
  const [municipalityNorth, setmunicipalityNorth] = useState({area_municipiosId:"2563c6c7-33eb-43da-8d0a-f21f999a1068",Nombre:""});
  const [municipalityMetropolitane, setmunicipalityMetropolitane] = useState({area_municipiosId:"9b1308ec-0330-4243-85f3-337f60ca424c",Nombre:""});
  const [municipalitySouth, setmunicipalitySouth] = useState({area_municipiosId:"e4f84b7c-a10b-4b54-ae8f-85be33b3c954",Nombre:""});

  useEffect( () => {
    async function getData() {
    let {data} = await ApiRequest.getAllMunicipalities();
    setAreas(data.result)
  }
  getData();
}, []);

  let createMunicipality = async (municipality) => {
    let response = await ApiRequest.createMunicipality(municipality);
    console.log(municipality);
    console.log(response);

  }
  let updateMunicipalityValue = (event, municipalityArea,setMunicipalityArea) => {
    let {value} = event.target;
    setMunicipalityArea({...municipalityArea, Nombre:value})
    console.log(municipalityArea)
  }
  let determineArea  = (event, id) =>{
    console.log("test")
    if (municipalityNorth.area_municipiosId === id){
      updateMunicipalityValue(event, municipalityNorth, setmunicipalityNorth)
    }
    else if(municipalityMetropolitane.area_municipiosId === id){
      updateMunicipalityValue(event, municipalityMetropolitane, setmunicipalityMetropolitane)

    }
    else if(municipalitySouth.area_municipiosId === id){
      updateMunicipalityValue(event, municipalitySouth, setmunicipalitySouth)

    }
  }
  let determineValue = (e) =>{
    if (municipalityNorth.area_municipiosId === e.Id){
      return  municipalityNorth;
    }
    else if (municipalitySouth.area_municipiosId === e.Id){
      return  municipalitySouth;

    }
    else if (municipalityMetropolitane.area_municipiosId === e.Id){
      return  municipalityMetropolitane;
    }
  }
  return (
    <div>
      <Title title={"Areas"}></Title>
      <div className={"areas-list"}>
      {areas.map((e, index)=> {
        let municipalityValue = determineValue(e);
        return (
          <div >
          <Typography align={"center"}>{e.Nombre}</Typography>
            <Divider></Divider>
            <div className={"municipality-list"}>
              {e.Municipios.map((municipio)=> <Typography>{municipio.Nombre}</Typography>)}
              <TextField value={municipalityValue.Nombre} onChange={event => determineArea(event,e.Id)} label={"Nombre"}></TextField>
              <Box width={"100%"} marginTop={"2rem"}>
              <Button onClick={()=>createMunicipality(municipalityValue)} fullWidth={true} variant="contained" color="primary">Crear</Button>
              </Box>
            </div>
          </div>
      )
      })}
      </div>
    </div>
  );
}

export default Areas;
