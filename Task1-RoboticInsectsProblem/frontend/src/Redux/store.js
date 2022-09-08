import { createStore, combineReducers, applyMiddleware } from "redux";
import { insectReducer } from "./InsectNavigate/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  outputState: insectReducer,
});
const middleware = [thunk];
let store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
