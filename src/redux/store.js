import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts']
}


const initialState = {
    contacts: [],
    filter: "",
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "contacts/addContacts":
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        case "contacts/deleteContacts":
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
            };
        case "filter/setFilter":
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const enhancer = devToolsEnhancer();
export const store = createStore(persistedReducer, enhancer)
export const persistor = persistStore(store)


// export const store = createStore(rootReducer, enhancer);