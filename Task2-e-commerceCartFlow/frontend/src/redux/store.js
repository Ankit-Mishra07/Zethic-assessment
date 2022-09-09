import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cart/reducer";
import { getProductReducer } from "./product/reducer";

const rootReducer = combineReducers({
  productState: getProductReducer,
  cartState: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
