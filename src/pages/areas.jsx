import React, {useEffect, useState} from 'react';
import ApiRequest from "../Data/Petitions/ApiRequest";
import Title from "../components/title";
import {Box, Button, Divider, Grid, TextField, Typography} from "@material-ui/core";
import TextFieldWithLabel from "../components/textFieldWithLabel";

function Areas(props) {
  const [areas, setAreas] = useState([]);
  const [municipalityNorth, setmunicipalityNorth] = useState({area_municipiosId:"2563c6c7-33eb-43da-8d0a-f21f999a1068",Nombre:""});
  const [municipalityMetropolitane, setmunicipalityMetropolitane] = useState({area_municipiosId:"9b1308ec-0330-4243-85f3-337f60ca424c",Nombre:""});
  const [municipalitySouth, setmunicipalitySouth] = useState({area_municipiosId:"e4f84b7c-a10b-4b54-ae8f-85be33b3c954",Nombre:""});
  const [municipalityNorthGC, setmunicipalityNorthGC] = useState({area_municipiosId:"dc491b18-4fcb-46ef-b21a-d4fc968133d9",Nombre:""});
  const [municipalityMetropolitaneGC, setmunicipalityMetropolitaneGC] = useState({area_municipiosId:"0a3b51b7-0fac-4f07-b9e1-a3715c04d03d",Nombre:""});
  const [municipalitySouthGC, setmunicipalitySouthGC] = useState({area_municipiosId:"b351e6de-4d0a-4548-ac13-db41d3de10f2",Nombre:""});

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
    if (municipalityNorth.area_municipiosId === id){
      updateMunicipalityValue(event, municipalityNorth, setmunicipalityNorth)
    }
    else if(municipalityMetropolitane.area_municipiosId === id){
      updateMunicipalityValue(event, municipalityMetropolitane, setmunicipalityMetropolitane)

    }
    else if(municipalitySouth.area_municipiosId === id){
      updateMunicipalityValue(event, municipalitySouth, setmunicipalitySouth)

    }    else if(municipalitySouthGC.area_municipiosId === id){
      updateMunicipalityValue(event, municipalitySouthGC, setmunicipalitySouthGC)

    }    else if(municipalityNorthGC.area_municipiosId === id){
      updateMunicipalityValue(event, municipalityNorthGC, setmunicipalityNorthGC)

    }    else if(municipalityMetropolitaneGC.area_municipiosId === id){
      updateMunicipalityValue(event, municipalityMetropolitaneGC, setmunicipalityMetropolitaneGC)

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
    else if (municipalityMetropolitaneGC.area_municipiosId === e.Id){
      return  municipalityMetropolitaneGC;
    }
    else if (municipalityNorthGC.area_municipiosId === e.Id){
      return  municipalityNorthGC;
    }
    else if (municipalitySouthGC.area_municipiosId === e.Id){
      return  municipalitySouthGC;
    }
  }
  return (
    <div>
      <Title title={"Areas"}></Title>
      <Grid container xs={12} spacing={2}>
      {areas.map((e, index)=> {
        let municipalityValue = determineValue(e);
        return (
          <Grid item  container xs={4} style={{
            display:'flex',flexDirection:'column'}}>
            <Box className={"municipality-list"} style={{

            }}>
              <Typography align={"center"}>{e.Nombre}</Typography>
              <Divider></Divider>

              {e.Municipios.map((municipio)=> <Typography>{municipio.Nombre}</Typography>)}
              <TextField value={municipalityValue.Nombre} onChange={event => determineArea(event,e.Id)} label={"Nombre"}></TextField>
              <Box width={"100%"} marginTop={"2rem"}>
              <Button onClick={()=>createMunicipality(municipalityValue)} fullWidth={true} variant="contained" color="primary">Crear</Button>
              </Box>
            </Box>
          </Grid>
      )
      })}
      </Grid>
    </div>
  );
}

export default Areas;
