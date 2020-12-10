import { LOGIN, PASS, EMAIL, AUTH } from "../types";

const initialState = {
    auth: false,
    login: "",
    pass: "",
    email: "",
};

export const initializationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                auth: action.payload,
            };
        case LOGIN:
            return {
                ...state,
                login: action.payload,
            };
        case PASS:
            return {
                ...state,
                pass: action.payload,
            };
        case EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        default:
            return state;
    }
};
