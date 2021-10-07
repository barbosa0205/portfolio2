import React from 'react'
import styled from 'styled-components'

const EmailFormContainer = styled.div`
    width: 90%;
    height: 80vh;
    max-width: 100rem;
    overflow: hidden;
    transition: 0.3s ease;

    background: var(--main-white);
    border-radius: 1rem;

    & > form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50%;

        & > input {
            width: 80%;
            height: 4rem;
            padding: 1rem;
            border: 2px solid var(--ultralight-gray);
            outline: none;
            border-radius: 0.8rem;
            font-size: 1.4rem;
            margin: 0.5rem 0;

            &:hover {
                border: 2px solid var(--light-gray);
            }

            &:focus {
                border: 2px solid var(--medium-gray);
            }
        }
    }

    .decoration {
        width: 100%;
        height: 100%;
        background: var(--high-dark);
        transform: skewY(11deg);
    }
`

export const EmailForm = ({ showEmailForm }) => {
    return (
        <EmailFormContainer onClick={event => event.stopPropagation()}>
            <form action="mail.php" method="post" autoComplete="off">
                <input type="text" name="name" placeholder="Tu Nombre" />
                <input type="email" name="email" placeholder="Tu Correo" />
            </form>
            <div className="decoration"></div>
        </EmailFormContainer>
    )
}
