import React from 'react'
import styled from 'styled-components'

const ModalContainer = styled.div`
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding-top: 10rem;
        min-height: 100vh;
        background: #00000050;
        z-index: 999;
    }
`

export const Modal = ({ children, showEmailForm, setShowEmailForm }) => {
    return (
        <ModalContainer onClick={() => setShowEmailForm(!showEmailForm)}>
            <div className={`container`}>{children}</div>
        </ModalContainer>
    )
}
