import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContacts = createAction("contacts/addContacts", (user) => ({
    payload: {
        id: nanoid(),
        ...user
    }
}));

export const deleteContacts = createAction("contacts/deleteContacts")