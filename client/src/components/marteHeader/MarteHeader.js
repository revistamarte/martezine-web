import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from "uuid";
import Modal from '../modal/Modal';
import AuthDialog, { AuthDialogScreen } from '../authDialog/AuthDialog';
import headerButtons from "../../resources/headerButtons.json";
import HeaderButton from './headerButton/HeaderButton';
import AppContext from '../../contexts/App.context';
import MarteLogo from '../marteLogo/MarteLogo';

import "./MarteHeader.scss";

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
                    <MarteLogo />
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
                            <HeaderButton text={loggedUser.fullname.split(" ")[0]} onClick={() => setIsLoginOpen(true)} />
                        ) : (
                            <HeaderButton text='login' onClick={() => setIsLoginOpen(true)} />
                        )}
                    </li>
                    <Modal open={isLoginOpen} clickOutside={() => setIsLoginOpen(false)}>
                        <AuthDialog onClose={() => setIsLoginOpen(false)}
                        initialScreen={
                            loggedUser ? AuthDialogScreen.USER : AuthDialogScreen.LOGIN
                        } />
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
