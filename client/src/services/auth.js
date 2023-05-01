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

const authService = {
    signup,
    login,
    token,
}

export default authService;
