
/** @enum {String} */
const UserSubscription = {
    FREE: "free",
    SUBSCRIBER: "subscriber"
}
/** @enum {String} */
const UserRole = {
    REGULAR: "regular",
    EDITOR: "editor",
    ADMIN: "admin"
}
/** @enum {String} */
const UserPronouns = {
    NONE: "none",
    HE: "he/him",
    SHE: "she/her",
    THEY: "they/them"
}
/** @enum {String} */
const TokenType = {
    REFRESH: "refresh",
    USER_CONFIRMATION: "user_confirmation"
}

module.exports = {
    UserSubscription,
    UserRole,
    UserPronouns,
    TokenType
}
