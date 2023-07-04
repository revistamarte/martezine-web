import React, { useState } from 'react'
import LoginDialog from './loginDialog/LoginDialog';
import AuthDialogContext from '../../contexts/AuthDialog.context';
import UserDialog from './userDialog/UserDialog';
import SignupDialog from './signupDialog/SignupDialog';
import WelcomeDialog from './welcomeDialog/WelcomeDialog';
import Pronouns from '../../constants/pronouns';
import ConfirmationDialog from './confirmationDialog/ConfirmationDialog';
import ResetDialog from './resetDialog/ResetDialog';

function AuthDialog({ onClose, initialScreen }) {
    const [ screen, setScreen ] = useState(initialScreen);
    const [ signupPronouns, setSignupPronouns ] = useState(Pronouns.ANY);

    const getCurrentScreen = () => {
        switch (screen) {
            case AuthDialogScreen.LOGIN:
                return (<LoginDialog onClose={onClose} />)
            case AuthDialogScreen.SIGNUP:
                return (<SignupDialog onClose={onClose} />)
            case AuthDialogScreen.USER:
                return (<UserDialog onClose={onClose} />)
            case AuthDialogScreen.WELCOME:
                return (<WelcomeDialog onClose={onClose} />)
            case AuthDialogScreen.RESET_PASSWORD:
                return (<ResetDialog onClose={onClose} />)
            case AuthDialogScreen.RESEND_CONFIRMATION:
                return (<ConfirmationDialog onClose={onClose} />)
            default:
                onClose();
                return null;
        }
    }
    
    const authDialogContextValue = {
        screen, setScreen,
        signupPronouns, setSignupPronouns
    };

    return (
        <AuthDialogContext.Provider value={authDialogContextValue}>
            {getCurrentScreen()}
        </AuthDialogContext.Provider>
    )
}

export const AuthDialogScreen = {
    LOGIN: 0,
    SIGNUP: 1,
    USER: 2,
    WELCOME: 3,
    RESET_PASSWORD: 4,
    RESEND_CONFIRMATION: 5,
}

export default AuthDialog;