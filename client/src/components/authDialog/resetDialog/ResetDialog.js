import React from 'react';
import MarteDialog from '../../marteDialog/MarteDialog';

import "./ResetDialog.scss";

function ResetDialog({ onClose }) {

    const handleChange = (event) => {
        
    }

    const handleSubmit = (event) => {
        
    }

    return (
        <MarteDialog 
        title={"esqueceu sua senha?"}
        subtitle={"informe o e-mail associado à sua conta para alterar sua senha"}
        onClose={onClose}>
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