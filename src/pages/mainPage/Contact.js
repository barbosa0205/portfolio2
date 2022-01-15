import React, { useState } from 'react'
import styled from 'styled-components'
import wave from '../../assets/svg/wave.svg'
// import { EmailForm } from '../../components/EmailForm'
// import { Modal } from '../../components/Modal'

const FooterContainer = styled.section`
    grid-area: contact;
`

const Wave = styled.img`
    width: 100%;
    position: relative;
    top: 10px;
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
            & > i {
                color: #31ba45;
            }
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
            <Wave src={wave} alt="" />
            <Footer id="contact">
                <p>CONTACTAME</p>
                <div className="footer-icons">
                    <a
                        href="https://wa.me/5218681011782?text=Me%20gustaría%20ponerme%20en%20contacto%20contigo"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <i className={`ri-whatsapp-line`}></i>
                    </a>

                    {/* <i
                        className={`${
                            showEmailForm ? 'ri-mail-open-line' : 'ri-mail-line'
                        }`}
                        onClick={() => setShowEmailForm(!showEmailForm)}
                    ></i> */}
                </div>
            </Footer>

            {/* {showEmailForm && (
                <Modal
                    showEmailForm={showEmailForm}
                    setShowEmailForm={setShowEmailForm}
                >
                    {<EmailForm showEmailForm={showEmailForm} />}
                </Modal>
            )} */}
        </FooterContainer>
    )
}
