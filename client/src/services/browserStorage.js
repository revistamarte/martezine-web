import authService from "./auth";

const accessTokenKey = "marte-access-token";
const refreshTokenKey = "marte-refresh-token";

export function saveAccessToken(accessToken) {
    const body = {
        token: accessToken,
        expiration: Date.now() + 1000 * 60 * 60
    };
    localStorage.setItem(accessTokenKey, JSON.stringify(body));
}

export function saveRefreshToken(refreshToken) {
    const body = {
        token: refreshToken
    };
    localStorage.setItem(refreshTokenKey, JSON.stringify(body));
}

export async function getAccessToken() {
    const tokenObj = JSON.parse(localStorage.getItem(accessTokenKey));
    if (tokenObj == null) return null;
    if (tokenObj.expiration <= Date.now()) {
        const refreshToken = getRefreshToken();
        try {
            const tokens = (await authService.token(refreshToken)).data;
            saveAccessToken(tokens.accessToken);
            saveRefreshToken(tokens.refreshToken);
            return tokens.accessToken;
        } catch (e) {
            removeTokens();
        }
    }
    return tokenObj.token;
}

export function getRefreshToken() {
    const tokenObj = JSON.parse(localStorage.getItem(refreshTokenKey));
    if (tokenObj == null) return null;
    return tokenObj.token;
}

export function removeTokens() {
    localStorage.removeItem(accessTokenKey);
    localStorage.removeItem(refreshTokenKey);
}

const browserStorageService = {
    saveAccessToken,
    saveRefreshToken,
    getAccessToken,
    getRefreshToken,
    removeTokens
}

export default browserStorageService;
