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

export const addNewNote = (note) => {
  return {
    type: ActionTypes.ADD_NEW_NOTE,
    payload: note,
  };
};

export const updateNote = (note) => {
  return {
    type: ActionTypes.UPDATE_NOTE,
    payload: note
  };
};

export const deleteNote = (noteId) => {
  return {
    type: ActionTypes.DELETE_NOTE,
    payload: noteId
  };
};

export const listView = (flag) => {
  return {
    type: ActionTypes.LIST_VIEW,
    payload: flag,
  };
};