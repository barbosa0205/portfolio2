import React from 'react'
import styled from 'styled-components'
import { About } from '../components/mainPage/About'
import { Contact } from '../components/mainPage/Contact'
import { Home } from '../components/mainPage/Home'
import { NavBar } from '../components/mainPage/NavBar'
import { Proyects } from '../components/mainPage/Proyects'

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
function Portfolio() {
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

export default Portfolio
