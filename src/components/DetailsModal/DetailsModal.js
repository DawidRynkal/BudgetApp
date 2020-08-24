import React from 'react';
import { Content, CloseIcon, Wrapper } from '../Modal/Modal.css';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';

function DetailsModal({ children }) {
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
export default DetailsModal;