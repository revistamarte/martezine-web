import React from 'react';
import { Link } from 'react-router-dom';

import closeIcon from "../../assets/icons/close-icon.svg";
import "./MarteDialog.scss";

function MarteDialog({ onClose, warning, children }) {
    return (
        <div className='wrapper'>
            {warning ? <>
                <div className='warning'>
                    <div className='text'>
                        <strong className='font-bold'>{warning.title}: </strong>
                        {warning.message}
                    </div>
                    { warning.linkMessage ? <>
                        <div className='link'>
                            <Link to={warning.link} onClick={onClose}>{warning.linkMessage}</Link>
                        </div>
                    </> : null}
                </div>
            </> : null}
            <div className='marte-dialog'>
                <div className='header font-title font-underlined'>
                    <div>bem vindo à marte</div>
                    <div className='close' onClick={onClose}>
                        <img src={closeIcon} alt='x' />
                    </div>
                </div>
                <div className='body'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MarteDialog