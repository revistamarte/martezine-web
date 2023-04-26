import { Link } from "react-router-dom";

import "./HeaderButton.scss"

/**
 * @typedef HeaderButtonParams
 * @property {String} to
 * @property {String} text
 */

/**
 * @param {HeaderButtonParams} param0
 */
function HeaderButton({ to, text }) {
    return (
        <Link to={to} className="header-button">
            <div>
                {text}
            </div>
        </Link>
    )
}

export default HeaderButton;
