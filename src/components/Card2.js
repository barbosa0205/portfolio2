import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.article`
    position: relative;
    width: 100%;
    height: 280px;
    overflow: hidden;
    background: var(--ultralight-gray);
    border: 2px solid var(--light-gray);
    border-radius: 1rem;
    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Card2 = ({ img, title, desc, skills, repo, web }) => {
    return (
        <CardContainer>
            <img src={img} alt={title} />
        </CardContainer>
    )
}
