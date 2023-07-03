import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../../../contexts/App.context";

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
    const {background} = useContext(AppContext);

    return (
        <NavLink to={to} className={({isActive}) => (isActive && to ? 'header-button active' : 'header-button')}
        onClick={onClick}>
            <div className={background}>
                {text}
            </div>
        </NavLink>
    )
}

export default HeaderButton;
