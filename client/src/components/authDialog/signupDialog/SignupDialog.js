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
import Pronouns from '../../../constants/pronouns';

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
        return errors;
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        if (value === undefined) return;
        setSignupData((prevData) => ({...prevData, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setScreen(AuthDialogScreen.WELCOME); return;
        const errors = validateData();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        setFormErrors({});
        authService.signup(signupData)
        .then(res => {
            setScreen(AuthDialogScreen.WELCOME);
        })
        .catch(err => {
            console.log(err);
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
                    {/* <input type={(dateFocused || signupData.birthday) ? "date" : "text"}
                    name="birthday" placeholder='data de nascimento*'
                    onChange={handleChange} min={"1900-01-01"}
                    onFocus={() => setDateFocused(true)} onBlur={() => setDateFocused(false)}
                    max={new Date().toISOString().split("T")[0]} /> */}
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
                        <input type='checkbox' name='terms' />
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