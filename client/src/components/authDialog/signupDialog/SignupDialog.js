import React, { useContext, useState } from 'react';
import validator from "validator";
import MarteDialog from '../../marteDialog/MarteDialog';
import MarteDatePicker from '../../marteDatePicker/MarteDatePicker';
import authService from '../../../services/auth';
import AuthDialogContext from '../../../contexts/AuthDialog.context';
import { AuthDialogScreen } from '../AuthDialog';

import show from "../../../assets/icons/show.svg";
import hide from "../../../assets/icons/hide.svg";
import "./SignupDialog.scss";

function SignupDialog({ onClose }) {
    const { setScreen, setSignupPronouns } = useContext(AuthDialogContext);

    const [signupData, setSignupData] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateData = () => {
        const errors = {};
        if (!signupData.fullname) {
            errors.fullname = "o campo 'nome completo' é obrigatório";
        }
        if (!signupData.birthday) {
            errors.birthday = "o campo 'data de nascimento' é obrigatório";
        }
        if (!signupData.email) {
            errors.email = "o campo 'email' é obrigatório";
        } else if (!validator.isEmail(signupData.email)) {
            errors.email = "insira um email válido";
        }
        if (!signupData.password) {
            errors.password = "o campo 'senha' é obrigatório";
        } else if (!validator.isLength(signupData.password, {min: 6})) {
            errors.password = "insira uma senha de pelo menos 6 caracteres";
        }
        if (!signupData.terms) {
            errors.password = "você precisa aceitar os termos de uso e a política de privacidade";
        }
        return errors;
    }

    const handleChange = (event) => {
        const {name, value, checked} = event.target;
        if (event.target.type === "checkbox") {
            setSignupData((prevData) => ({...prevData, [name]: checked}));
        } else {
            setSignupData((prevData) => ({...prevData, [name]: value}));
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateData();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        setFormErrors({});
        authService.signup(signupData).then(onSignupSucceeded).catch(onSignupFailed);
        // onSignupSucceeded();
    }

    const onSignupSucceeded = (res) => {
        authService.sendConfirmation(signupData.email);
        setSignupPronouns(signupData.pronouns);
        setScreen(AuthDialogScreen.WELCOME);
    }

    const onSignupFailed = (reason) => {
        const authError = {}
        if (
            reason.response &&
            reason.response?.status === 400
        ) {
            authError.message = "email ja registrado";
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
        <MarteDialog title={"cadastro"} onClose={onClose} warning={getErrorToShow()}>
            <form className='signup-form font-form' onSubmit={handleSubmit}>
                <input type='text' name='fullname' placeholder='nome completo*'
                onChange={handleChange} />
                <div className='pronouns-and-birthday'>
                    <input type='text' name="pronouns" placeholder='pronome'
                    onChange={handleChange} />
                    <MarteDatePicker onChange={handleChange}></MarteDatePicker>
                </div>
                <input type='text' name='email' placeholder='email*'
                onChange={handleChange} />
                <div className='password'>
                    <input type={showPassword ? 'text' : 'password'} name='password'
                    placeholder='senha*' onChange={handleChange} />
                    <div tabIndex={0} onClick={() => setShowPassword(!showPassword)}>
                        <img height='30' src={showPassword ? hide : show} alt='eye' />
                    </div>
                </div>
                <div className='form-footer'>
                    <div>
                        <input type='checkbox' name='terms' onChange={handleChange} />
                        Aceito os <a className='has-link' href='/'>
                            termos de uso
                        </a> e a <a className='has-link' href='/'>
                            política de privacidade
                        </a>
                    </div>
                    <input type='submit' value={"cadastrar"} />
                </div>
            </form>
        </MarteDialog>
    )
}

export default SignupDialog;