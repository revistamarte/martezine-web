import logo from '../../assets/logos/marte-logo.svg';
import { Link } from 'react-router-dom';
import { v4 } from "uuid";
import headerButtons from "../../resources/headerButtons.json";
import HeaderButton from './headerButton/HeaderButton';

import "./MarteHeader.scss";

function MarteHeader() {

    /** @type {HeaderButtons} */
    const buttons = headerButtons;

    return (
        <header className='marte-header'>
            <div className='left'>
                <nav><ul>
                    {buttons.left.map(button => 
                        <li key={v4()}>
                            <HeaderButton to={button.to} text={button.text} />
                        </li>
                    )}
                </ul></nav>
            </div>
            <div className='logo'>
                <Link to="/">
                    <img src={logo} alt='logo' />
                </Link>
            </div>
            <div className='right'>
                <nav><ul>
                    {buttons.right.map(button => 
                        <li key={v4()}>
                            <HeaderButton to={button.to} text={button.text} />
                        </li>
                    )}
                </ul></nav>
            </div>
        </header>
    );
}

/**
 * @typedef HeaderButtons
 * @property {HeaderButton[]} left
 * @property {HeaderButton[]} right
 * 
 * @typedef HeaderButton
 * @property {String} to
 * @property {String} text
 */

export default MarteHeader;
