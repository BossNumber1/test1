import { combineReducers } from "redux";
import { initializationReducer } from "./initializationReducer";

export const rootReducer = combineReducers({
    init: initializationReducer,
});
