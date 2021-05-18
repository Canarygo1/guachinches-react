import React from 'react';
import Title from "../components/title";
import TitleWithRating from "../components/titleWithRating";
import {Box, Button, Typography} from "@material-ui/core";
import TextFieldWithLabel from "../components/textFieldWithLabel";

function Main(props) {
  return (
    <div className={"test"}>
      <Title title={"Principal"}></Title>
      <div className={"page-container-business-basic-data"}>
      <div className={"divide-row"}>
        <Box display={"flex"} flexDirection={"row"}>
        <TitleWithRating name={"Bodegon Mojo Picon"} rating={4.5}/>
          <Box alignSelf={"center"} marginLeft={"30px"}>
            <Button variant="contained" color="primary">
              Guardar
            </Button>
          </Box>
        </Box>
        <Typography>Datos del negocio</Typography>
        <TextFieldWithLabel/>
      </div>
        <div className={"divide-row"}>
          <TitleWithRating name={"Guchinche Mojo Picon"} rating={4.5}/>
        </div>
      </div>
    </div>
  );
}

export default Main;
