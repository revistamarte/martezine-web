import React from 'react';
import MarteDialog from '../../marteDialog/MarteDialog';

import "./ConfirmationDialog.scss";

function ConfirmationDialog({ onClose }) {

    const handleChange = (event) => {
        
    }

    const handleSubmit = (event) => {
        
    }

    return (
        <MarteDialog 
        title={"seu email não chegou? vamos tentar novamente!"}
        onClose={onClose}>
            <form className='resend-form font-form' onSubmit={handleSubmit}>
                <input className='email' type='text' name='email' placeholder='insira aqui o seu email' onChange={handleChange} />
                <div className='footer'>
                    <input type='submit' value={"reenviar"} />
                </div>
            </form>
        </MarteDialog>
    );
}

export default ConfirmationDialog;