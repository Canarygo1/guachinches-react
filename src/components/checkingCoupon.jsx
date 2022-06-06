import React from 'react';
import {Box, CircularProgress, Typography} from "@material-ui/core";

function CheckingCoupon(props) {
    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: 'center',
            color: 'black',
            minHeight: '100vh',
            minWidth: '100%'
        }}>                    <CircularProgress/>
            <Typography>Comprobando cupón...</Typography>
        </Box>
    );
}

export default CheckingCoupon;
