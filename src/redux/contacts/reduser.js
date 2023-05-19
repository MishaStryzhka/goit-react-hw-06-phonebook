import { contatsInitialState } from "./initialState";

export const contactsReducer = (state = contatsInitialState, action) => {
    switch (action.type) {
        case "contacts/addContacts":
            return [...state, action.payload];
        case "contacts/deleteContacts":
            return state.filter(contact => contact.id !== action.payload);
        default:
            return state;
    }
};
