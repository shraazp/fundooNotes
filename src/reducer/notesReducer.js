import { ActionTypes } from "../constants/action-types";
const intialState = {
  notes: [],
  searchNotes:[]
};

export const notesReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_NOTES:
      return { ...state, notes: payload };
    case ActionTypes.SELECTED_NOTE:
      return { ...state, searchNotes: payload };
    default:
      return state;
  }
};