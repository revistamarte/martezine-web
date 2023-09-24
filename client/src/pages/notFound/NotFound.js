import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import AppTheme from '../../constants/appTheme';
import AppContext from '../../contexts/App.context';

import "./NotFound.scss";

function NotFound() {
    const { setTheme } = useContext(AppContext);

    useEffect(() => {
        setTheme(AppTheme.WHITE);
    }, [setTheme]);

    return (
        <div className="marte-not-found">
            <h1 className="title">opa! página não encontrada...</h1>
            <h3 className="subtitle">esse é um caminho inexistente. se você quiser, pode <Link to="/">
                voltar à página inicial
            </Link></h3>
        </div>
    );
}

export default NotFound;