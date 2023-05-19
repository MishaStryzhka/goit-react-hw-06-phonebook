import { combineReducers } from "redux";

import { contactsReducer } from "./contacts/reduser";
import { filtersReducer } from "./filter/reduser";

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filtersReducer,
});