import { combineReducers } from "redux";
import { notesReducer } from "./notesReducer";
const reducers = combineReducers({
  allNotes: notesReducer,
  
});
export default reducers;