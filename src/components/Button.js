import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.a`
    padding: 1rem 3.2rem;
    border-radius: 4px;
    background: var(--main-dark);
    color: var(--main-white);
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background: var(--high-dark);
    }
`

export const Button = ({ children, text, link, type = 'button' }) => {
    return (
        <ButtonContainer href={link}>
            {text}
            {children}
        </ButtonContainer>
    )
}
