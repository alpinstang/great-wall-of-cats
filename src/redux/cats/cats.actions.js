import { CatActionTypes } from "./cats.types";

export const cats = (cats) => ({
  type: CatActionTypes.ADD_CATS,
  payload: cats,
});
