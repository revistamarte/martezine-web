import React, { useContext } from 'react';
import MarteDialog from '../../marteDialog/MarteDialog';
import AuthDialogContext from '../../../contexts/AuthDialog.context';
import { AuthDialogScreen } from '../AuthDialog';

import "./WelcomeDialog.scss";
import Pronouns from '../../../constants/pronouns';

function WelcomeDialog({ onClose }) {
    const { setScreen, signupPronouns } = useContext(AuthDialogContext);

    const getTextBasedOnPronouns = () => {
        switch (signupPronouns) {
            case Pronouns.HE:
                return "bem vindo";
            case Pronouns.SHE:
                return "bem vinda";
            case Pronouns.THEY:
                return "bem vinde";
            default:
                return ["bem vindo", "bem vinda", "bem vinde"][Math.floor(Math.random() * 3)];
        }
    }

    return (
        <MarteDialog onClose={onClose} maxWidth="920px">
            <div className='welcome'>
                <div className="text">você se cadastrou com sucesso!</div>
                <span className="welcome-text">{getTextBasedOnPronouns()}<br/>à marte.</span>
                <div className="text">cheque seu email para<br />confirmar sua conta</div>
                <div className="resend">
                    não chegou? <div tabIndex={0} className='font-underlined has-link'
                        onClick={() => setScreen(AuthDialogScreen.RESEND_CONFIRMATION)}>
                        reenviar email de confirmação
                    </div>
                </div>
            </div>
        </MarteDialog>
    );
}

export default WelcomeDialog;