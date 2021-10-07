import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TitleH2 = styled.h2`
    margin: 1rem 0rem;
    font-family: var(--title-font);
    font-size: 3rem;
    color: var(--main-dark);
    text-shadow: -4px 2px var(--light-gray);

    &.text-center {
        text-align: center;
    }

    @media (min-width: 600px) {
        font-size: 4rem;
    }

    @media (min-width: 1024px) {
        font-size: 5rem;
    }
`

export const Title = ({ text, center }) => {
    return (
        <div>
            <TitleH2 className={`${(center && 'text-center') || null}`}>
                {text}
            </TitleH2>
        </div>
    )
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
    center: PropTypes.bool,
}
