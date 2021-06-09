import { combineReducers } from 'redux';
import restaurantReducer from "./restaurantReducer";

const RootReducer = combineReducers({
  restaurantInfo: restaurantReducer,
});

export default RootReducer;
