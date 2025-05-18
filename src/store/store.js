import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer  from "../reducers/auth";
/*
const middleware = [thunk];

const store = createStore(
  authReducer ,
  composeWithDevTools(applyMiddleware(...middleware))
);
*/
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: { auth: authReducer },
});

export default store;