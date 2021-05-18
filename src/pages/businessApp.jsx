import React from 'react';
import {Box, Typography} from "@material-ui/core";

function BusinessApp(props) {
  return (
    <Box display={"flex"} flexDirection={"column"} width={"100%"}>
      <div className={"top-bar"}>
        <div className={"img-app-container"}>
          <img className={"img-app-logo"} src="logo.png" alt=""/>
        </div>
        <div className={"top-menu-items"}>
          <Typography variant={"h6"}>Inicio</Typography>
          <Typography variant={"h6"}>Historia</Typography>
          <Typography variant={"h6"}>Redes sociales</Typography>
        </div>
      </div>
      <div className={"page-container-business-app"}>
        <div className={"divide-row-text-businessApp"}>
          <Box display={"flex"} flexDirection={"column"} >
            <Typography variant={"h1"}>
              <Box fontSize={"1.1em"} className={"text-title-mobile"} fontWeight={500} alignSelf={"center"}>
                Descarga nuestra app
              </Box>
            </Typography>
            <div className={"store-icons"}>
              <img className={"store-image"} src="app-store-icon.png" alt=""/>
              <img className={"store-image"} src="google-store-icon.png" alt=""/>
            </div>
          </Box>
        </div>
        <div className={"divide-row"}>
          <img className={"img-size"} src="mobiles-info.png" alt=""/>
        </div>
      </div>
    </Box>
  );
}

export default BusinessApp;
