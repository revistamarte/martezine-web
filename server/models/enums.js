
/** @enum {String} */
export const UserSubscription = {
    FREE: "free",
    SUBSCRIBER: "subscriber"
}
/** @enum {String} */
export const UserRole = {
    REGULAR: "regular",
    EDITOR: "editor",
    ADMIN: "admin"
}
/** @enum {String} */
export const UserPronouns = {
    NONE: "none",
    HE: "he/him",
    SHE: "she/her",
    THEY: "they/them"
}
/** @enum {String} */
export const TokenType = {
    REFRESH: "refresh",
    USER_CONFIRMATION: "user_confirmation"
}

const enums = {
    UserSubscription,
    UserRole,
    UserPronouns,
    TokenType
};
export default enums;
