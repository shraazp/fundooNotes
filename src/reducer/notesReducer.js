import {ActionTypes} from "../constants/action-types";
const intialState = {
    notes: [],
    searchNotes: []
};

export const notesReducer = (state = intialState, {type, payload,noteId}) => {
    switch (type) {
        case ActionTypes.SET_NOTES:
            return {
                ...state,
                notes: payload
            };
        case ActionTypes.SELECTED_NOTE:
            return {
                ...state,
                searchNotes: payload
            };
        case ActionTypes.ADD_NEW_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    payload
                ]
            };
        case ActionTypes.UPDATE_NOTE:
         
          return state.notes.map((note)=>{
            if(note.id === noteId) {
              return {
                 ...note,
                 title:payload.title,
                content:payload.content
              }
            } else return note;
          })
        default:
            return state;
    }
};
