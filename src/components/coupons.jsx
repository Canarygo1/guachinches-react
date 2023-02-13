import React, {useEffect, useState} from 'react';
import {Box, Button, TextField} from "@material-ui/core";
import Weekdays from "./weekdays";
import {DatePicker, DateTimePicker, DesktopDatePicker} from "@mui/x-date-pickers";
import moment from "moment";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Dayjs} from "dayjs";
import dayjs from "dayjs";
import 'dayjs/locale/es';
import ApiRequest from "../Data/Petitions/ApiRequest";

function Coupons({restaurantId}) {

    const [startDate, setStartDate] = React.useState(dayjs());
    const [endDate, setEndDate] = React.useState(dayjs());
    const [percentage,setPercentage]= useState(0);


    const [days, setDays] = useState([
        {day: 'L', value: 'mon', turno: 'noche', mesas: 0, isSelected: false},
        {day: 'M', value: 'tue', turno: 'día', mesas: 0, isSelected: false},
        {day: 'X', value: 'wed', turno: 'día', mesas: 0, isSelected: false},
        {day: 'J', value: 'thu', turno: 'día', mesas: 0, isSelected: false},
        {day: 'V', value: 'fri', turno: 'día', mesas: 0, isSelected: false},
        {day: 'S', value: 'sat', turno: 'día', mesas: 0, isSelected: false},
        {day: 'D', value: 'sun', turno: 'día', mesas: 0, isSelected: false},
    ]);
    const [requestData,setRequestData] = useState()
    function getDaysBetweenDates(start, end, dayName) {
        let result = [];
        let days = {sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};
        let day = days[dayName.toLowerCase().substr(0,3)];
        // Copy start date
        let current = new Date(start);
        // Shift to next of required days
        current.setDate(current.getDate() + (day - current.getDay() + 7) % 7);
        // While less than end date, add dates to result array
        while (current < end) {
            result.push(new Date(+current));
            current.setDate(current.getDate() + 7);
        }
        return result;
    }


    useEffect(() => {
        const selectedDays = days.filter((element)=>element.isSelected)
        const dayForCreation = [];

        for (let i = 0; i < selectedDays.length; i++) {
            const days = getDaysBetweenDates(
                startDate,
                endDate,
                selectedDays[i].value);
            for (let j = 0; j < days.length; j++) {
                dayForCreation.push({
                    "day":days[j].getFullYear()+'-'+(days[j].getMonth()+1)+'-'+days[j].getDate(),
                    "percentage":percentage,
                    "totalTables":selectedDays[i].mesas,
                    "turno":selectedDays[i].turno
                });
            }
            const weekDays = {
                weekDays:dayForCreation,
            }
            console.log('weekDays',weekDays);
            setRequestData(weekDays)
        }


    }, [days])

    const handleButtonCreation = async () => {
        const responese = await ApiRequest.addCupones(restaurantId, requestData);
        console.log(responese);
    }
    return (
        <Box style={{
            minWidth: '100%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            gap:20
        }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'es'}>
                <Box style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 12, justifyContent: 'center',
                    alignItems: 'center', width: '100%'
                }}>
                    <TextField
                        type={'number'}
                        InputProps={{
                            inputProps: { min: 0 }
                        }}
                        label={'Porcentaje descuento'} value={percentage} onChange={(event)=>{setPercentage(parseInt(event.target.value))}}/>
                    <DatePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="Fecha inicio"
                        value={startDate}
                        onChange={(newValue) => {
                            setStartDate(newValue);
                        }}
                    />
                    <DatePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="Fecha fin"
                        value={endDate}
                        onChange={(newValue) => {
                            setEndDate(newValue);
                        }}
                    />
                </Box>
            </LocalizationProvider>
            <Weekdays setDays={setDays} days={days}/>
            <Button color={'primary'} variant={'contained'} onClick={()=>handleButtonCreation()}>Crear Cupones</Button>
        </Box>);
}

export default Coupons;
