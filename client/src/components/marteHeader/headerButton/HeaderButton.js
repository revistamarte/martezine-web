import { NavLink } from "react-router-dom";

import "./HeaderButton.scss"

/**
 * @typedef HeaderButtonParams
 * @property {String} to
 * @property {String} text
 * @property {Function} onClick
 */

/**
 * @param {HeaderButtonParams} param0
 */
function HeaderButton({ to, text, onClick }) {
    return (
        <NavLink to={to} className={({isActive}) => (isActive && to ? 'header-button active' : 'header-button')}
        onClick={onClick}>
            <div>
                {text}
            </div>
        </NavLink>
    )
}

export default HeaderButton;
