import React, { useState } from 'react'
import LoginDialog from './loginDialog/LoginDialog';
import AuthDialogContext from '../../contexts/AuthDialog.context';
import UserDialog from './userDialog/UserDialog';
import SignupDialog from './signupDialog/SignupDialog';

function AuthDialog({ onClose, initialScreen }) {
    const [ screen, setScreen ] = useState(initialScreen);

    const getCurrentScreen = () => {
        switch (screen) {
            case AuthDialogScreen.LOGIN:
                return (<LoginDialog onClose={onClose} />)
            case AuthDialogScreen.SIGNUP:
                return (<SignupDialog onClose={onClose} />)
            case AuthDialogScreen.USER:
                return (<UserDialog onClose={onClose} />)
            default:
                onClose();
                return null;
        }
    }
    
    const authDialogContextValue = {
        screen, setScreen
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
}

export default AuthDialog;