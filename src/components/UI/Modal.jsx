import React from 'react';
import ReactDOM from "react-dom";
import './modal.css';

const Backdrop = props => {
    return <div className="backdrop"></div>;
}

const ModalOverlay = props => {
    return (
        <div className="modal">
            <div className="content">{props.children}</div>
        </div>
    );
}

const Modal = props => {
    let overLays = document.getElementById('overlays');
    return (
        <>
            {ReactDOM.createPortal(<Backdrop/>, overLays)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overLays)}
        </>
    );
};


export default Modal;