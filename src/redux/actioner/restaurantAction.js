import ApiRequest from "../../Data/Petitions/ApiRequest";

export const GET_RESTAURANT_INFO = "GET_RESTAURANT_INFO";

export const getRestauranInfo =  (businessId) => {
  return dispatch => {
    ApiRequest.getBusinessDetails(businessId).then(res => {
      dispatch({
        type: GET_RESTAURANT_INFO,
        payload: res.data
      });
    });
  };
};
