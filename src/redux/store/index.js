import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rockListReducer from "../reducers/gen";
import favoriteReducer from "../reducers/favorite";

const globalReducers = combineReducers({
  gen: rockListReducer,
  favorite: favoriteReducer,
});
const store = configureStore({
  reducer: globalReducers,
});
export default store;
