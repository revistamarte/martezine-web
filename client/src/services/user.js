import axios from "axios";
import globalConfig from "../globalConfig";

export function getLoggedUser(accessToken) {
    return axios.get(globalConfig.apiUrl + "/user", {
        headers: {
            Authorization: "Bearer " + accessToken
        }
    });
}

const userService = {
    getLoggedUser
}

export default userService;
