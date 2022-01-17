import React from 'react'
import styled from 'styled-components'
import { Title } from '../../components/Title'
import mainLogo from '../../assets/svg/Coding-rafiki-black.svg'

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: home;
    margin: 0 auto;
    margin-top: 3rem;
`

const MainContainer = styled.div`
    width: 100%;

    @media (min-width: 1024px) {
        display: flex;
        align-items: center;
    }
`
const TitleContainer = styled.div`
    margin-left: 2rem;

    & > .jobTitle,
    .cheer {
        width: 100%;
        font-size: 3rem;
        font-weight: 700;
        text-align: right;
        padding-right: 3rem;
        color: var(--main-dark);
        text-shadow: -0.3rem 0.2rem 0 var(--light-gray);
    }

    & > .cheer {
        text-align: start;
    }

    @media (min-width: 600px) {
        padding: 0px;
        margin-top: 0px;
    }

    @media (min-width: 1024px) {
        width: 50%;
        margin-left: 3rem;
    }
`
const ImageContainer = styled.div`
    max-width: 62rem;
    margin: 0 auto;
    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        & > img {
            max-width: 800px;
        }
    }
`

const BtnContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
`

const Btn = styled.a`
    padding: 1rem 2rem;
    border-radius: 0.4rem;
    background-color: var(--high-dark);
    color: var(--main-white);
    font-family: var(--main-font);
    text-decoration: none;
    box-shadow: -3px 3px var(--medium-gray);
    transition: 0.2s ease-in-out;
    &:hover {
        box-shadow: -5px 6px var(--medium-gray), 6px -6px var(--light-gray);
    }

    @media (min-width: 600px) {
        padding: 1.5rem 3rem;
        font-size: 2rem;
    }
`

export const Home = () => {
    return (
        <HomeContainer id="home" className="container">
            <MainContainer>
                <TitleContainer>
                    <p className="cheer">Hola, mi nombre es</p>
                    <Title text="José Luis Barbosa Cepeda" />
                    <p className="jobTitle">Programador Web Frontend</p>
                </TitleContainer>
                <ImageContainer>
                    <img src={mainLogo} alt="main-logo" />
                </ImageContainer>
            </MainContainer>
            <BtnContainer className="btn-container">
                <Btn href="#proyects">PROYECTOS</Btn>
            </BtnContainer>
        </HomeContainer>
    )
}
