import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
// import timerReducer from "./timer/timerReducer";

const rootReducer = combineReducers({
        cart: cartReducer
//   timer: timerReducer
});

export default rootReducer;
