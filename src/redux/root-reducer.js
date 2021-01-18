import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import catsReducer from "./cats/cats.reducer";

export default combineReducers({
  user: userReducer,
  cats: catsReducer,
});
