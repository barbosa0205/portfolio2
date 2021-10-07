import React from 'react'
import styled from 'styled-components'
import { About } from './pages/mainPage/About'
import { Contact } from './pages/mainPage/Contact'
import { Home } from './pages/mainPage/Home'
import { NavBar } from './pages/mainPage/NavBar'
import { Proyects } from './pages/mainPage/Proyects'

const MainContainer = styled.div`
    width: 100%;
    background: #fff;
    @media (min-width: 600px) {
        position: relative;
        padding-left: 20%;
    }
    @media (min-width: 1024px) {
        padding: 0;
        margin: 0 auto;
    }
    @media (min-width: 1280px) {
        padding: 0;
        margin: 0 auto;
        width: 80%;
    }
`

const AppContainer = styled.div`
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1280px) {
        background: #eeeeee;
    }
`

export const PortfolioApp = () => {
    return (
        <AppContainer>
            <MainContainer>
                <NavBar />
                <Home />
                <About />
                <Proyects />
                <Contact />
            </MainContainer>
        </AppContainer>
    )
}
