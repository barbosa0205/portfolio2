import React from 'react'
import styled from 'styled-components'
import { About } from './pages/mainPage/About'
import { Contact } from './pages/mainPage/Contact'
import { Home } from './pages/mainPage/Home'
import { NavBar } from './pages/mainPage/NavBar'
import { Proyects } from './pages/mainPage/Proyects'

const MainContainer = styled.div`
    display: grid;
    grid-template-areas:
        'navbar'
        'home'
        'about'
        'proyects'
        'contact';
    width: 100%;
    background: #fff;
    @media (min-width: 600px) {
        grid-template-areas:
            'navbar home'
            'navbar about'
            'navbar proyects'
            'navbar contact';
        position: relative;
    }
    @media (min-width: 1024px) {
        grid-template-areas:
            'navbar'
            'home'
            'about'
            'proyects'
            'contact';
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
