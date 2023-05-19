import { nanoid } from "nanoid";

export const addContacts = user => {
    return {
        type: "contacts/addContacts",
        payload: {
            id: nanoid(),
            ...user
        },
    };
};

export const deleteContacts = contactsId => {
    return {
        type: "contacts/deleteContacts",
        payload: contactsId,
    };
};

export const setFilter = value => {
    return {
        type: "filter/setFilter",
        payload: value,
    };
};