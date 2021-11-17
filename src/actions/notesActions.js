import { ActionTypes } from "../constants/action-types";

export const setNotes = (notes) => {
  return {
    type: ActionTypes.SET_NOTES,
    payload: notes,
  };
};

export const selectedNote = (notes) => {
  return {
    type: ActionTypes.SELECTED_NOTE,
    payload: notes,
  };
};
