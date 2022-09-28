import React, { useState } from 'react'
import styled from 'styled-components'
import Wave from '../../assets/svg/wave.svg'
import { EmailForm } from '../EmailForm'
import { Modal } from '../Modal'
// import { EmailForm } from '../../components/EmailForm'
// import { Modal } from '../../components/Modal'

const FooterContainer = styled.section`
  grid-area: contact;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background: var(--high-dark);

  & p {
    margin: 1rem;
    font-size: 3.3rem;
    color: var(--main-white);
  }

  .footer-icons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5rem;

    & a {
      text-decoration: none;
    }

    & i {
      font-size: 6.5rem;
      cursor: pointer;
      padding: 0 1rem;
      color: var(--main-white);
    }
  }

  @media (min-width: 600px) {
    & p {
      font-size: 4rem;
    }
    & i {
      font-size: 5.3rem;
    }
  }
`

export const Contact = () => {
  const [showEmailForm, setShowEmailForm] = useState(false)
  return (
    <FooterContainer>
      <Wave className='contactWave' />
      <Footer id='contact'>
        <p>CONTACTAME</p>
        <div className='footer-icons'>
          <a href={showEmailForm ? '#sendemail' : '#contact'}>
            <i
              style={{
                fontSize: '4.5rem',
              }}
              className={`${
                showEmailForm ? 'ri-mail-open-line' : 'ri-mail-line'
              }`}
              onClick={() => setShowEmailForm(!showEmailForm)}
            ></i>
          </a>

          <a
            href='https://wa.me/5218683845391?text=Me%20gustaría%20ponerme%20en%20contacto%20contigo'
            rel='noreferrer'
            target='_blank'
          >
            <i
              style={{
                fontSize: '4.5rem',
                color: '#31da45',
              }}
              className={`ri-whatsapp-line`}
            ></i>
          </a>
        </div>
        {showEmailForm && <EmailForm showEmailForm={showEmailForm} />}
      </Footer>
    </FooterContainer>
  )
}
