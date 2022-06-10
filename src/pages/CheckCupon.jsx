import React, {useEffect, useState} from 'react';
import {Box, Button, TextField, Typography} from "@material-ui/core";
import ApiRequest from "../Data/Petitions/ApiRequest";
import Cookies from "js-cookie";
import GlobalMethods from "../helpers/globalMethod";
import CheckingCoupon from "../components/checkingCoupon";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {CloseRounded} from "@material-ui/icons";
function CheckCupon(props) {
    //necesito el restaurantId,
    const [value, setValue] = useState('')
    const [restaurant, setRestaurant] = useState({nombre: '', id: ''})
    const [coupon, setCoupon] = useState({descuento: 0})
    const [islogged, setIslogged] = useState(false);
    const [loading, setIsloading] = useState(true);
    const [isValid, setIsValid] = useState(false);
    const [loginError, setloginError] = useState(false);
    const [couponFinalData, setCouponFinalData] = useState({})
    const handleChange = (event) => {
        setValue(event.target.value,);
    };
    useEffect(() => {
        const getData = async () => {
            let url = window.location.href;
            let parseUrl = url.split('/');
            let restaurantCookiesId = GlobalMethods.getRestaurantCuponesId();
            let couponUserId = parseUrl[parseUrl.length - 1];
            let couponBasicInfo = await ApiRequest.getCoupunData(couponUserId)
            console.log(couponBasicInfo);
            let restaurantId = couponBasicInfo.data.restaurantId;
            let restaurant = await ApiRequest.getRestaurantById(restaurantId)
            setCoupon(couponBasicInfo.data);
            setRestaurant(restaurant.data)
            if (restaurantCookiesId !== undefined) {
                checkCoupon();
                setIslogged(true);
            } else {

            }

        }
        getData()
    }, [])

    const checkCoupon = async ()=>{
        console.log('hola')
        let url = window.location.href;
        let parseUrl = url.split('/');
        let couponUserId = parseUrl[parseUrl.length - 1];
        let restaurantId = GlobalMethods.getRestaurantCuponesId();
        let couponCheckResponse =await ApiRequest.checkAndUseCoupon(couponUserId,restaurantId)
        if (couponCheckResponse.data.rowsUpdated[0] === 1){
            setIsValid(true)
        }else{
            setIsValid(false)
        }
        console.log(couponCheckResponse.data.data.cuponesUser[0].usuarios.email);
        setCouponFinalData(couponCheckResponse.data.data)
        setIsloading(false);
    }

    const loginUser = async () => {
        const loginResponse = await ApiRequest.loginRestaurantUser(restaurant.id, value)
        if (loginResponse.data.login === true) {
            Cookies.set('restaurantCuponesId', loginResponse.data.restaurant.id)
            setIslogged(true);
            checkCoupon();
        } else{
            setloginError(true);
        }
    }
    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: 'center',
            color: 'black',
            minHeight: '100vh',
            minWidth: '100%'
        }}>
            {islogged ?
                loading?
                    <CheckingCoupon/>:
                    isValid?
                    <Box style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor:'#1CC389',
                        color: 'white',
                        minHeight: '100vh',
                        minWidth: '100%'
                    }}>
                        <CheckCircleIcon  style={{ color: 'white' ,fontSize: 90  }} />
                        <Typography variant={'h2'}  >Cupón valido!</Typography>
                        <Typography variant={'h4'}  >Dia validez: {couponFinalData.date}</Typography>
                        <Typography variant={'h4'}  >Descuento: -{coupon.descuento}%</Typography>
                        <Typography   >Email usuario: {couponFinalData.cuponesUser[0].usuarios.email}</Typography>
                        <Typography   >Restaurante: {restaurant.nombre}</Typography>
                    </Box>:
                        <Box style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: "center",
                            alignItems: 'center',
                            backgroundColor:'red',
                            color: 'white',
                            minHeight: '100vh',
                            minWidth: '100%'
                        }}>
                            <CloseRounded  style={{ color: 'white' ,fontSize: 90  }} />
                            <Typography variant={'h2'}  >Cupón no valido!</Typography>
                            <Typography variant={'h4'}  >Dia validez: {couponFinalData.date}</Typography>
                            <Typography variant={'h4'}  >Tipo cupón: -{coupon.descuento}%</Typography>
                            <Typography   >Email usuario: {couponFinalData.cuponesUser[0].usuarios.email}</Typography>
                            <Typography   >Restaurante: {restaurant.nombre}</Typography>
                        </Box>
                :
                <Box style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: 'center',
                    color: 'black',
                    minHeight: '100vh',
                    minWidth: '100%'
                }}>
                <Typography align={'center'}  variant={'h3'} color={'primary'} >Cupón -{coupon.descuento}% valido para {restaurant.nombre}</Typography>
                <Typography style={{marginTop:20}}>Introduzca la constraseña del negocio</Typography>
                    { loginError&&<Typography color={'primary'} style={{marginTop:20}}>Error en la contraseña</Typography>}
                <TextField style={{marginTop:20}} variant={'outlined'} value={value} onChange={handleChange}></TextField>
                <Button style={{marginTop:20}} variant={'contained'} color={'primary'} onClick={()=>loginUser()}>Comprobar</Button>
                </Box>
            }
        </Box>
    );
}

export default CheckCupon;
