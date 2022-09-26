import React, { useState } from 'react'
import styled from 'styled-components'

const NavBarMovil = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 5rem;
  position: fixed;
  grid-area: navbar;
  top: 0;
  left: 0;
  background-color: #ffffff30;
  backdrop-filter: blur(2px);

  @media (min-width: 600px) {
    display: none;
  }

  & > i {
    margin: 1rem 1.5rem 0 0;
    padding: 1rem 0.5rem;
    font-size: 2.3rem;
    cursor: pointer;
    color: var(--main-dark);
  }
`
const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: -110%;
  width: 100vw;

  min-height: 100vh;
  background-color: var(--main-white);
  transition: 0.2s ease-in-out;
  box-shadow: 0 0 5px 0 var(--light-gray);
  z-index: 10;
  &.is-open {
    left: 0%;
  }

  .close-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    & > i {
      padding: 2rem;
      font-size: 2.5rem;
      cursor: pointer;
    }
  }

  @media (min-width: 600px) {
    position: sticky;
    left: 0;
    height: 100%;
    max-width: 120px;

    .close-container {
      visibility: hidden;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    max-width: 100%;
    width: 100%;
    height: 5rem;
    min-height: 0;
  }
`

const NightContainer = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid var(--ultralight-gray);

  @media (min-width: 1024px) {
    max-width: 10rem;
    height: auto;
    border-bottom: none;
  }
`

const LinksContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    height: 100%;
  }
`
const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid var(--ultralight-gray);
  @media (min-width: 1024px) {
    width: 12rem;
    border-bottom: none;
    border-right: 1px solid var(--ultralight-gray);
    &:first-child {
      border-left: 1px solid var(--ultralight-gray);
    }
    justify-content: center;
    max-width: 20rem;
    height: 100%;
  }
`

const LinkStyle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  text-decoration: none;
  font-size: 2rem;
  font-family: var(--main-font);
  color: var(--main-dark);
  font-weight: 400;
  transition: 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: 0.1s ease-in-out;
    background: #16161620;
  }
`

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleTogle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <NavBarMovil>
        <i className='fas fa-bars ' aria-hidden onClick={handleTogle}></i>
      </NavBarMovil>
      <Sidebar className={`${isOpen ? 'is-open' : null}`}>
        <div className='close-container'>
          <i
            className='ri-close-circle-fill'
            onClick={() => setIsOpen(false)}
          ></i>
        </div>
        <NightContainer />
        <LinksContainer>
          <LinkContainer>
            <LinkStyle href='#home' onClick={() => setIsOpen(!isOpen)}>
              Inicio
            </LinkStyle>
          </LinkContainer>
          <LinkContainer>
            <LinkStyle href='#about' onClick={() => setIsOpen(!isOpen)}>
              Sobre Mi
            </LinkStyle>
          </LinkContainer>
          <LinkContainer>
            <LinkStyle href='#proyects' onClick={() => setIsOpen(!isOpen)}>
              Proyectos
            </LinkStyle>
          </LinkContainer>
          <LinkContainer>
            <LinkStyle href='#contact' onClick={() => setIsOpen(!isOpen)}>
              Contacto
            </LinkStyle>
          </LinkContainer>
        </LinksContainer>
      </Sidebar>
    </>
  )
}
