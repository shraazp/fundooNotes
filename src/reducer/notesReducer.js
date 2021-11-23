import {ActionTypes} from "../constants/action-types";
const intialState = {
    notes: [],
    searchNotes: []
};

export const notesReducer = (state = intialState, {type, payload}) => {
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

            let newNote = [...state.notes];


            let index = state.notes.findIndex(note => note._id === payload.data._id)
            newNote[index] = payload.data


            return {
                ...state,
                notes: newNote
            }

        case ActionTypes.DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(item => item._id !== payload)
            };
        default:
            return state;
    }
};
