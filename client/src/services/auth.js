import axios from "axios";
import globalConfig from "../globalConfig";

export function signup(data) {
    return axios.post(globalConfig.apiUrl + "/signup", data);
}

export function login(data) {
    return axios.post(globalConfig.apiUrl + "/login", data);
}

const authService = {
    login
}

export default authService;
