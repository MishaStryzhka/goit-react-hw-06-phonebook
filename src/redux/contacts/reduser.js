import { createReducer } from "@reduxjs/toolkit";
import { addContacts, deleteContacts } from "./actions";
import { contatsInitialState } from "./initialState";

export const contactsReducer = createReducer(contatsInitialState, {
    [addContacts]: (state, action) => [...state, action.payload],
    [deleteContacts]: (state, action) => state.filter(contact => contact.id !== action.payload),
});
