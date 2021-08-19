import axios from "axios";
import Cookies from "js-cookie"
import GlobalMethods from "./globalMethod";

const Axios = (history=null)=>{
    // const baseUrl = "http://localhost:3500/";
    const baseUrl = "https://api.discarten.com:440/";

    let headers = {
        token:""
    }

    if(Cookies.get("accessToken")){
        headers.token = Cookies.get("accessToken")
    }

    const axiosInstance = axios.create({
        baseURL: baseUrl,
        headers,
    });

    axiosInstance.interceptors.response.use(
        response => {
            return response
        },
        error => {
            // Reject promise if usual error
            if (error.response.status !== 401) {
              return Promise.reject(error);
            }else{
                return axios.post(baseUrl+'token', {
                    'RefreshToken': Cookies.get('refreshToken')
                }).then(response => {
                    Cookies.set("accessToken", response.data.result.AccessToken)
                    error.response.config.headers['token'] =Cookies.get("accessToken") ;

                    return axios(error.response.config);
                }).catch(error => {
                    GlobalMethods.removeAllCookies();
                    return Promise.reject(error);
                });
            }


        }
    );
    return axiosInstance;
}

export default Axios;
