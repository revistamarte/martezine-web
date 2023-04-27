import React from 'react'
import ReactDOM from "react-dom";

import "./Modal.scss";

function Modal({ open, closeEvent, children }) {
    if (!open) return null;
    
    return ReactDOM.createPortal(
        <div className='modal-container'>
            {children}
        </div>,
        document.getElementById('portal')
    );
}

export default Modal;