import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/reduser";
import { filtersReducer } from "./filter/reduser";

export const reducer = combineReducers({
    contacts: contactsReducer,
    filter: filtersReducer,
})