import React from 'react';
import { createPortal } from 'react-dom';
import { Wrapper, Content, CloseIcon } from './Modal.css';
import { useHistory } from 'react-router-dom';

function Modal({ children }) {
    let history = useHistory();
    const handleCloseClick = () => {
        history.goBack()
    }

    return createPortal(
        <Wrapper onClick={handleCloseClick}>
            <Content onClick={e => e.stopPropagation()}>
                <CloseIcon onClick={handleCloseClick}>X</CloseIcon>
                {children}
            </Content>
        </Wrapper>
        , document.querySelector('#modal')
    )
}

export default Modal;