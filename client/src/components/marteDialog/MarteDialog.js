import React from 'react';

import closeIcon from "../../assets/icons/close-icon.svg";
import "./MarteDialog.scss";

function MarteDialog({ onClose, title, subtitle, warning, children, maxWidth }) {
    return (
        <div className='wrapper'>
            {warning ? <>
                <div className='warning'>
                    <div className='text'>
                        <strong className='font-bold'>{warning.title}: </strong>
                        {warning.message}
                    </div>
                    { warning.clickableMessage ? <>
                        <div className='clickable' onClick={warning.onClick}>
                            {warning.clickableMessage}
                        </div>
                    </> : null}
                </div>
            </> : null}
            <div className='marte-dialog' style={{maxWidth: maxWidth}}>
                <div className='header font-title'>
                    <div className='titles'>
                        <div className='title font-underlined'>{title}</div>
                        {subtitle ? <div className='subtitle'>{subtitle}</div> : null}
                    </div>
                    <div tabIndex={0} className='close' onClick={onClose}>
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

export default MarteDialog;