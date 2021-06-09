import React, {useCallback, useState} from 'react';
import {Box, Button, CircularProgress, TextField} from "@material-ui/core";
import ApiRequest from "../Data/Petitions/ApiRequest";
import Cookies from "js-cookie";
import GlobalMethods from "../helpers/globalMethod";
import {useHistory} from "react-router-dom";

function Login(props) {
  const [inputValues, setInputValues] = useState({
    email: '', password: ''
  });
  const [errorLogin, setErrorLogin] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleOnChange = useCallback(event => {
    const {name, value} = event.target;
    setInputValues({...inputValues, [name]: value});
  });

  const submitForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    let response = await ApiRequest.login(inputValues);
    setLoading(false);

    console.log(response);
    if (response.data.code === 200) {
      console.log(response.data.result.role)
      GlobalMethods.removeAllCookies();

      Cookies.set("user", response.data.result.id, {expires: 90});
      Cookies.set("accessToken", response.data.result.accessToken, {expires: 90});
      Cookies.set("refreshToken", response.data.result.refreshToken, {expires: 90});
      Cookies.set("role", response.data.result.role, {expires: 90});
      if (response.data.result.role === 'Employee'){
        let employeeData = await ApiRequest.getEmployee(response.data.result.id);
        Cookies.set("restaurantId", employeeData.data.result.restaurante_empleadoId, {expires: 90});
        doBusinessLogin(employeeData.data.result.restaurante_empleadoId);

      }else if (response.data.result.role === 'Admin'){
        doAdminLogin();
      }
    } else {
      setErrorLogin(true);
    }
  }

  function doBusinessLogin(restaurantId) {
    history.push(`/app/${restaurantId}`);
  }
  function doAdminLogin() {
    history.push(`app/admin/main`);
  }

  return (
    <div className={"login-container"}>
      <div className="login-box">
        <div className={"img-login-container"}>
          <img className={"login-logo"} src="/logo.png" alt=""/>
        </div>
        <form onSubmit={submitForm}>

          <Box display={"flex"} justifyContent={"center"}>
            {loading ? <CircularProgress disableShrink/>:<></>}

          </Box>
          {errorLogin ?
            <div className="error-login-container">
              <span>Error al iniciar sesión, compruebe sus credenciales</span>
            </div> : <></>
          }
          <div className={"login-content"}>

            <TextField name={"email"}
                       id="standard-basic" label={"Correo electronico"} onChange={handleOnChange}/>
            <TextField name={"password"}
                       id="standard-basic" label={"Contraseña"} onChange={handleOnChange}/>

            <Button className={"search-bar-button"} variant="contained" type="submit" color="primary">
              Entrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
