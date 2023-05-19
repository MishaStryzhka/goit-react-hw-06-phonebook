import { createReducer } from "@reduxjs/toolkit";
import { setFilter } from "./actions";
import { filterInitialState } from "./initialState";

export const filtersReducer = createReducer(filterInitialState, {
    [setFilter]: (state, action) => action.payload,
});