import axios from "axios";
import globalConfig from "../globalConfig";

export function signup(data) {
    return axios.post(globalConfig.apiUrl + "/signup", data);
}

export function login(data) {
    return axios.post(globalConfig.apiUrl + "/login", data);
}

export function token(refreshToken) {
    return axios.post(globalConfig.apiUrl + "/token", {
        token: refreshToken
    });
}

export function confirmation(token) {
    return axios.post(globalConfig.apiUrl + "/confimation/" + token);
}

export function sendConfirmation(email) {
    return axios.post(globalConfig.apiUrl + "/confirmation", {
        email: email
    });
}

const authService = {
    signup,
    login,
    token,
    confirmation,
    sendConfirmation
}

export default authService;
