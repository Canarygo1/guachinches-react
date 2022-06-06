import Cookies from "js-cookie";

class GlobalMethods {

    static removeAllCookies() {
        Cookies.remove("user");
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        Cookies.remove("role");
    }
    static isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }
    static getSessionAdmin(){
        return (Cookies.get("refreshToken") !== undefined && Cookies.get("user") !== undefined && Cookies.get("role") === "Admin")
    }

    static getSessionEmployee() {
        return (Cookies.get("restaurantId") !== undefined  && Cookies.get("refreshToken") !== undefined && Cookies.get("user") !== undefined && Cookies.get("role") === "Employee" )
    }

      static getUserRole() {
        return Cookies.get("role")
      }
    static getUserIdCookies(){
        return Cookies.get("user");
    }
  static getRestaurantId(){
    return Cookies.get("restaurantId");
  }
      static getRestaurantCuponesId(){
           return  Cookies.get("restaurantCuponesId")
      }
}

export default GlobalMethods;
