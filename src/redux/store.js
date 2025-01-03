import { createStore, combineReducers, applyMiddleware } from "redux";
import cartReducer from "./reducers/cartReducer";
import fetchReducer from "./reducers/fetchReducer";
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({fetchReducer, cartReducer})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;