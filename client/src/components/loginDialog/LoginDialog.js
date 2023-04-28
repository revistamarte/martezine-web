import React, { useEffect, useState } from 'react';
import MarteDialog from '../marteDialog/MarteDialog';
import validator from "validator";
import axios from 'axios';
import globalConfig from '../../globalConfig';

import show from "../../assets/icons/show.svg"
import hide from "../../assets/icons/hide.svg"
import "./LoginDialog.scss";

function LoginDialog({ onClose }) {
    const [loginData, setLoginData] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [welcome, setWelcome] = useState(0);

    const welcomes = ["vindo", "vinda", "vinde"];

    useEffect(() => {
        setTimeout(() => setWelcome((welcome + 1) % 3), 1000);
    });

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
        axios.post(globalConfig.apiUrl + "/login", loginData)
        .then(res => {
            console.log(res.data);
            onClose();
        }).catch(reason => {
            const authError = {}
            if (reason.response.status === 400 || reason.response.status === 404) {
                authError.message = "email ou senha incorreto";
            } else if (reason.response.status === 403) {
                authError.message = "confirme seu email";
                authError.linkMessage = "reenviar email de confirmação";
                authError.link = "/confirmar";
            } else {
                authError.message = "algo deu errado";
            }
            setFormErrors({
                auth: authError
            });
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
        <MarteDialog onClose={onClose} title={`bem ${welcomes[welcome]} à marte`} warning={getErrorToShow()} >
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
                    <div tabIndex={0} className='has-link'>esqueceu a senha?</div>
                </div>
                <div className='form-footer'>
                    <input type='submit' value={"entrar"} />
                    <div>ainda não faz parte da marte?</div>
                    <div tabIndex={0} className='font-underlined has-link'>crie sua conta!</div>
                </div>
            </form>
        </MarteDialog>
    )
}

export default LoginDialog