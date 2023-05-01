import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from "uuid";
import Modal from '../modal/Modal';
import LoginDialog from '../loginDialog/LoginDialog';
import headerButtons from "../../resources/headerButtons.json";
import HeaderButton from './headerButton/HeaderButton';

import "./MarteHeader.scss";
import logo from '../../assets/logos/marte-logo.svg';
import AppContext from '../../contexts/App.context';

function MarteHeader() {
    const { loggedUser } = useContext(AppContext);
    
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    // const [isSignupOpen, setIsSignupOpen] = useState(false);

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
                    <li>
                        {loggedUser ? (
                            <HeaderButton text={loggedUser.name} />
                        ) : (
                            <HeaderButton text='login' onClick={() => setIsLoginOpen(true)} />
                        )}
                    </li>
                    <Modal open={isLoginOpen}>
                        <LoginDialog onClose={() => setIsLoginOpen(false)} />
                    </Modal>
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
