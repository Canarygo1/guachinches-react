import React, {useEffect, useState} from 'react';
import {Box, TextField} from "@material-ui/core";
import Weekdays from "./weekdays";
import {DateTimePicker, DesktopDatePicker} from "@mui/x-date-pickers";

function Coupons() {
    const [days,setDays] =useState( [
        {day:'L',value:'Monday',turno:'noche',mesas:0,isSelected:true},
        {day:'M',value:'Tuesday',turno:'día',mesas:0,isSelected:false},
        {day:'X',value:'Wednesday',turno:'día',mesas:0,isSelected:false},
        {day:'J',value:'Thursday',turno:'día',mesas:0,isSelected:false},
        {day:'V',value:'Friday',turno:'día',mesas:0,isSelected:false},
        {day:'S',value:'Saturday',turno:'día',mesas:0,isSelected:false},
        {day:'D',value:'Sunday',turno:'día',mesas:0,isSelected:true},
    ]);
    useEffect(()=>{
        console.log('days',days)
    },[days])

    return (
        <Box style={{
            minWidth:'100%',
        }}>
            <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </Box>    );
}

export default Coupons;
