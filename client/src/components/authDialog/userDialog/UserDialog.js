import React, { useContext } from 'react'
import MarteDialog from '../../marteDialog/MarteDialog'
import AppContext from '../../../contexts/App.context'
import browserStorageService from '../../../services/browserStorage';
import { useNavigate } from 'react-router-dom';

function UserDialog({ onClose }) {
    const { loggedUser, setLoggedUser, setTokens } = useContext(AppContext);
    const navigate = useNavigate();

    const signout = () => {
        browserStorageService.saveAccessToken(null);
        browserStorageService.saveRefreshToken(null);
        setTokens(null);
        setLoggedUser(null);
        navigate("/");
        onClose();
    }

    if (loggedUser == null) {
        signout();
        return;
    }

    return (
        <MarteDialog title={"olá " + loggedUser.name}
            warning={{ title: "atenção", message: "isso é um aviso" }}
            onClose={onClose}>
            <div>Usuário q n sei oq la</div>
            <div className='has-link' onClick={() => signout()} >sair</div>
        </MarteDialog>
    )
}

export default UserDialog