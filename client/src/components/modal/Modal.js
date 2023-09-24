import React, { useRef } from 'react'
import ReactDOM from "react-dom";

import "./Modal.scss";

function Modal({ open, clickOutside, children }) {
    const outside = useRef();

    if (!open) return null;
    
    const handleClickOutside = (e) => {
        if (e.target === outside.current) {
            clickOutside();
        }
    }
    
    return ReactDOM.createPortal(
        <div ref={outside} className='modal-container' onClick={handleClickOutside}>
            {children}
        </div>,
        document.getElementById('portal')
    );
}

export default Modal;