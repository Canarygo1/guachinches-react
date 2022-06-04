import React, {useState} from 'react';
import {Box, Button, CircularProgress, TextField, Typography} from "@material-ui/core";

function CheckCupon(props) {
    //necesito el restaurantId,
    const [value, setValue] = useState('')
    const handleChange = (event) => {
        setValue( event.target.value,);
    };

    return (
        <Box style={{ display:'flex', flexDirection:'column',justifyContent:"center", alignItems:'center', color:'black',minHeight:'100vh',minWidth:'100%'}}>
            {/*<CircularProgress />*/}
            {/*<Typography>Comprobando cupón...</Typography>*/}
            <Typography>Introduzca la constraseña del negocio</Typography>
            <TextField style={{marginTop:20}} variant={'outlined'} value={value} onChange={handleChange}></TextField>
            <Button style={{marginTop:20}} variant={'contained'} color={'primary'}>Comprobar</Button>
        </Box>
    );
}

export default CheckCupon;
