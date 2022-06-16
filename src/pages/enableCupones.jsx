import React, {useEffect, useState} from 'react';
import {Box, CircularProgress, Typography} from "@material-ui/core";
import Cookies from "js-cookie";
import ApiRequest from "../Data/Petitions/ApiRequest";


///cupones/enable/cupones/:restaurantId
function EnableCupones(props) {
    const [isEnable, setIsEnable] = useState(false);

    useEffect(async () => {
        let url = window.location.href;
        let parseUrl = url.split('/');
        let restaurant = await ApiRequest.getRestaurantById(parseUrl[parseUrl.length - 1])
        console.log(restaurant);
        Cookies.set('restaurantCuponesId',restaurant.data.id );

        setIsEnable(true);
    },[]);

    return (
        <Box sx={{
            width:'100vw',
            height:'100vh',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            bgcolor:isEnable?'#1CC389':'white'

        }}>
            {
                isEnable?
                    <Typography>
                        Su negocio ha sido configurado para la lectura de cupones con éxito!
                    </Typography>
                    :<Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center',
                    gap:2,
                    }}>
                    <CircularProgress/>
                    <Typography>Estamos configurando su negocio. Espere un momento, gracias.</Typography>
                    </Box>

            }

        </Box>
    );
}

export default EnableCupones;
