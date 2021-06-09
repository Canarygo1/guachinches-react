import ProvidersState from './restaurantInitalState';

const restaurantReducer = (state = ProvidersState.restaurantInfo ,action) => {
  switch (action.type) {
    case "GET_RESTAURANT_INFO":{
      return {
        ...state,
        restaurantInfo:action.payload
      }
    }
    default:{
      return state;
    }
  }
};

export default restaurantReducer;
