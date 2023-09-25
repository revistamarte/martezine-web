import React, { useState } from 'react';
import validator from 'validator';
import MarteDialog from '../../marteDialog/MarteDialog';

import "./ResetDialog.scss";

function ResetDialog({ onClose }) {
    const [resetData, setResetData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const validateData = () => {
        const errors = {};
        if (!resetData.email) {
            errors.email = "preencha o campo 'email'";
        } else if (!validator.isEmail(resetData.email)) {
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
        // authService.sendConfirmation(confirmationData.email).then(onSendSucceeded).catch(onSendFailed);
        onSendSucceeded();
    }

    const onSendSucceeded = (res) => {
        onClose();
    }

    const onSendFailed = (reason) => {
        const authError = {}
        if (
            reason.response &&
            (reason.response?.status === 400)
        ) {
            authError.message = "email não encontrado";
        } else {
            authError.message = "algo deu errado";
        }
        setFormErrors({
            auth: authError
        });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setResetData((prevData) => ({ ...prevData, [name]: value }));
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
        title={"esqueceu sua senha?"}
        subtitle={"informe o e-mail associado à sua conta para alterar sua senha"}
        onClose={onClose}
        warning={getErrorToShow()}>
            <form className='reset-form font-form' onSubmit={handleSubmit}>
                <input className='email' type='text' name='email' placeholder='insira aqui o seu email' onChange={handleChange} />
                <div className='footer'>
                    <input type='submit' value={"enviar"} />
                </div>
            </form>
        </MarteDialog>
    );
}

export default ResetDialog;