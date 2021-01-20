import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import catsReducer from "./cats/cats.reducer";
import { reducer as fetchReducer } from "react-redux-fetch";

export default combineReducers({
  user: userReducer,
  cats: catsReducer,
  repository: fetchReducer,
});
