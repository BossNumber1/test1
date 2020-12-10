import { LOGIN, PASS, EMAIL, AUTH, CITY } from "../types";

const initialState = {
    auth: false,
    login: "",
    pass: "",
    email: "",
    city: "",
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
        case CITY:
            return {
                ...state,
                city: action.payload,
            };
        default:
            return state;
    }
};
