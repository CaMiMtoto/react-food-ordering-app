import React from 'react';

const Modal = ({children, onSubmit, id, title, size}) => {
    function handleSubmit(event) {
        event.preventDefault();
        onSubmit();
    }

    return (
        <div className="modal fade" id={id} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className={'modal-content rounded-4 modal-' + size}>
                    <div className="modal-header border-bottom-0">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                        <button type="button" className="btn-close rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        {children}
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Modal;