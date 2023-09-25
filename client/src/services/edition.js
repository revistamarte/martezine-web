import axios from "axios";
import globalConfig from "../globalConfig";

export function getAll(accessToken) {
    return axios.get(globalConfig.apiUrl + "/edition", {
        headers: {
            Authorization: "Bearer " + accessToken
        }
    });
}

export function getEdition(id, accessToken) {
    return axios.get(globalConfig.apiUrl + "/edition/" + id, {
        headers: {
            Authorization: "Bearer " + accessToken
        }
    });
}

export function createEdition(data, accessToken) {
    return axios.post(globalConfig.apiUrl + "/edition", data, {
        headers: {
            Authorization: "Bearer " + accessToken
        }
    });
}

const editionService = {
    getAll,
    getEdition,
    createEdition
}
export default editionService;
