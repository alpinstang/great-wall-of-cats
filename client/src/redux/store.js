import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
  import { middleware as fetch } from "react-redux-fetch"; 
import rootReducer from "./root-reducer";

const middlewares = [logger, fetch];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
