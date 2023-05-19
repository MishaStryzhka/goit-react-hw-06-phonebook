import { filterInitialState } from "./initialState";

export const filtersReducer = (state = filterInitialState, action) => {
    switch (action.type) {
        case "filter/setFilter":
            return action.payload;
        default:
            return state;
    }
};