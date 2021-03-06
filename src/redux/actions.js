import { LOGIN, PASS, EMAIL, AUTH, CITY } from "./types";

export function createLogin(login) {
    return {
        type: LOGIN,
        payload: login,
    };
}

export function createPass(pass) {
    return {
        type: PASS,
        payload: pass,
    };
}

export function createEmail(email) {
    return {
        type: EMAIL,
        payload: email,
    };
}

export function createAuth(auth) {
    return {
        type: AUTH,
        payload: auth,
    };
}

export function createCity(city) {
    return {
        type: CITY,
        payload: city,
    };
}
