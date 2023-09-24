import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../../contexts/App.context';
import AppTheme from '../../constants/appTheme';
import browserStorageService from '../../services/browserStorage';
import userService from '../../services/user';
import authService from '../../services/auth';

import "./Confirm.scss";

function Confirm() {
    const { token } = useParams();
    const { setTheme, setTokens, setLoggedUser } = useContext(AppContext);
    const [confirmedState, setConfirmedState] = useState(ConfirmedState.LOADING);

    useEffect(() => {
        setTheme(AppTheme.RED);
    }, [setTheme]);

    useEffect(() => {
        const onConfirmSucceeded = async (res) => {
            setConfirmedState(ConfirmedState.CONFIRMED);
            setTokens(res.data);
            await browserStorageService.saveAccessToken(res.data.accessToken);
            browserStorageService.saveRefreshToken(res.data.refreshToken);
            userService.getLoggedUser(res.data.accessToken)
                .then(res => {
                    setLoggedUser(res.data);
                    window.location.pathname = "/";
                });
        }

        authService.confirmation(token).then(onConfirmSucceeded).catch(onConfirmFailed);
    }, [token, setLoggedUser, setTokens]);


    const onConfirmFailed = () => {
        setConfirmedState(ConfirmedState.FAILED);
    }

    return (
        <div className='marte-confirm'>
            {confirmedState === ConfirmedState.LOADING ? <>
                <div className='title'>Seu email está sendo confimado...</div>
            </> : confirmedState === ConfirmedState.CONFIRMED ? <>
                <div className='title'>Email confirmado</div>
            </> : <>
                <div className='title'>Algo deu errado</div>
                <div className='subtitle'>Tente novamente mais tarde.</div>
            </>}
        </div>
    )
}

export default Confirm;

const ConfirmedState = {
    LOADING: 0, CONFIRMED: 1, FAILED: 2
};