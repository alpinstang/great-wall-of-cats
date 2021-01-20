import { CatActionTypes } from "./cats.types";

const INITIAL_STATE = {
  cats: null,
};

const catsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CatActionTypes.ADD_CATS:
      return {
        ...state,
        cats: action.payload,
      };
    default:
      return state;
  }
};

export default catsReducer;
