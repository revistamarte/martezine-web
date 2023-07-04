import React, { useContext, useEffect, useState } from 'react';
import MarteDialog from '../../marteDialog/MarteDialog';
import validator from "validator";
import authService from '../../../services/auth';
import userService from '../../../services/user';
import AppContext from '../../../contexts/App.context';
import browserStorageService from '../../../services/browserStorage';
import AuthDialogContext from '../../../contexts/AuthDialog.context';
import { AuthDialogScreen } from '../AuthDialog';

import show from "../../../assets/icons/show.svg"
import hide from "../../../assets/icons/hide.svg"
import "./LoginDialog.scss";

function LoginDialog({ onClose }) {
    const { setScreen } = useContext(AuthDialogContext);
    const { setTokens, setLoggedUser } = useContext(AppContext);
    
    const [loginData, setLoginData] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [welcomeIdx, setWelcome] = useState(0);

    const welcomes = ["vindo", "vinda", "vinde"];

    useEffect(() => {
        const timer = setTimeout(() => setWelcome((welcomeIdx + 1) % 3), 100);
        return () => clearInterval(timer);
    }, [welcomeIdx]);

    const validateData = () => {
        const errors = {};
        if (!loginData.email) {
            errors.email = "preencha o campo 'email'";
        } else if (!validator.isEmail(loginData.email)) {
            errors.email = "insira um email válido";
        }
        if (!loginData.password) {
            errors.password = "preencha o campo 'senha'";
        } else if (!validator.isLength(loginData.password, {min: 6})) {
            errors.password = "insira uma senha de pelo menos 6 caracteres";
        }
        return errors;
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setLoginData((prevData) => ({...prevData, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateData();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        setFormErrors({});
        authService.login(loginData).then(onLoginSucceeded).catch(onLoginFailed);
    }

    const onLoginSucceeded = async (res) => {
        setTokens(res.data);
        await browserStorageService.saveAccessToken(res.data.accessToken);
        browserStorageService.saveRefreshToken(res.data.refreshToken);
        userService.getLoggedUser(res.data.accessToken)
        .then(res => setLoggedUser(res.data));
        onClose();
    }

    const onLoginFailed = (reason) => {
        const authError = {}
            if (
            reason.response &&
            (reason.response?.status === 400 || reason.response.status === 404)
        ) {
            authError.message = "email ou senha incorreto";
        } else if (
            reason.response &&
            reason.response.status === 403
        ) {
            authError.message = "confirme seu email";
            authError.linkMessage = "reenviar email de confirmação";
            authError.link = "/confirmar";
        } else {
            authError.message = "algo deu errado";
        }
        setFormErrors({
            auth: authError
        });
    }

    const getErrorToShow = () => {
        const keys = Object.keys(formErrors);
        if (keys.length === 0) return null;
        const error = formErrors[keys[0]];
        if (typeof error === 'object') {
            return {
                title: "!erro",
                message: error.message,
                linkMessage: error.linkMessage,
                link: error.link
            }
        } else {
            return {
                title: "!erro",
                message: error
            };
        }
    }

    return (
        <MarteDialog onClose={onClose} title={`bem-${welcomes[welcomeIdx]} à marte`}
        warning={getErrorToShow()} >
            <form className='login-form font-form' onSubmit={handleSubmit}>
                <input type='text' name='email' placeholder='email' onChange={handleChange} />
                <div className='password'>
                    <input type={showPassword ? 'text' : 'password'} name='password'
                    placeholder='senha' onChange={handleChange} />
                    <div tabIndex={0} onClick={() => setShowPassword(!showPassword)}>
                        <img height='30' src={showPassword ? hide : show} alt='eye' />
                    </div>
                </div>
                <div className='recover-password'>
                    <div tabIndex={0} className='has-link'
                    onClick={() => setScreen(AuthDialogScreen.RESET_PASSWORD)}>
                        esqueceu a senha?
                    </div>
                </div>
                <div className='form-footer'>
                    <input type='submit' value={"entrar"} />
                    <div>ainda não faz parte da marte?</div>
                    <div tabIndex={0} className='font-underlined has-link'
                    onClick={() => setScreen(AuthDialogScreen.SIGNUP)}>
                        crie sua conta!
                    </div>
                </div>
            </form>
        </MarteDialog>
    )
}

export default LoginDialog