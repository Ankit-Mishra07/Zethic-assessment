import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { getProductReducer } from "./product/reducer";

const rootReducer = combineReducers({
  productState: getProductReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
