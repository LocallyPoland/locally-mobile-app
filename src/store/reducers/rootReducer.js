import { combineReducers } from "redux";
import baseReducer from "./baseReducer";
import profileReducer from "./profileReducer";
import cardsReducer from "./cardsReducer";
import placesReducer from "./placesReducer";
import historyReducer from "./historyReducer";

export default combineReducers({
  base: baseReducer,
  profile: profileReducer,
  cards: cardsReducer,
  places: placesReducer,
  history: historyReducer,
});
