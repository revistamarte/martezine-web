import React, { useContext, useState } from 'react';
import validator from "validator";
import MarteDialog from '../../marteDialog/MarteDialog';
import authService from '../../../services/auth';
import AuthDialogContext from '../../../contexts/AuthDialog.context';
import { AuthDialogScreen } from '../AuthDialog';

import "./ConfirmationDialog.scss";

function ConfirmationDialog({ onClose }) {
    const {setScreen} = useContext(AuthDialogContext);
    
    const [confirmationData, setConfirmationData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const validateData = () => {
        const errors = {};
        if (!confirmationData.email) {
            errors.email = "preencha o campo 'email'";
        } else if (!validator.isEmail(confirmationData.email)) {
            errors.email = "insira um email válido";
        }
        return errors;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateData();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        setFormErrors({});
        authService.sendConfirmation(confirmationData.email).then(onSendSucceeded).catch(onSendFailed);
    }

    const onSendSucceeded = (res) => {
        setScreen(AuthDialogScreen.WELCOME);
    }

    const onSendFailed = (reason) => {
        const authError = {}
        if (
            reason.response &&
            (reason.response?.status === 400 || reason.response.status === 404)
        ) {
            authError.message = "email não encontrado ou já confirmado";
        } else {
            authError.message = "algo deu errado";
        }
        setFormErrors({
            auth: authError
        });
    }
        
    const handleChange = (event) => {
        console.log(confirmationData);
        const { name, value } = event.target;
        setConfirmationData((prevData) => ({ ...prevData, [name]: value }));
    }

    const getErrorToShow = () => {
        const keys = Object.keys(formErrors);
        if (keys.length === 0) return null;
        const error = formErrors[keys[0]];
        if (typeof error === 'object') {
            return {
                title: "!erro",
                message: error.message
            }
        } else {
            return {
                title: "!erro",
                message: error
            };
        }
    }

    return (
        <MarteDialog 
        title={"seu email não chegou? vamos tentar novamente!"}
        onClose={onClose}
        warning={getErrorToShow()}>
            <form className='resend-form font-form' onSubmit={handleSubmit}>
                <input className='email' type='text' name='email' placeholder='insira aqui o seu email'
                onChange={handleChange} />
                <div className='footer'>
                    <input type='submit' value={"reenviar"} />
                </div>
            </form>
        </MarteDialog>
    );
}

export default ConfirmationDialog;