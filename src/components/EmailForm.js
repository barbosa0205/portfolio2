import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
import { useState } from 'react'

const EmailFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 50rem;
  min-height: 32rem;
  transition: 0.3s ease;
  border-radius: 0.5rem;
  margin-bottom: 5rem;

  background-color: #fdfdfd;

  & > h2 {
    font-weight: 500;
    margin-bottom: 2rem;
  }

  & > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    & > input {
      width: 90%;
      height: 4rem;
      padding: 1rem;
      border: none;
      border-bottom: 1px solid var(--medium-gray);
      outline: none;
      color: var(--main-dark);
      font-size: 1.4rem;
      margin: 0.5rem 0;
    }

    & > textarea {
      width: 90%;
      height: 10rem;
      resize: none;
      outline: none;
      border: 1px solid var(--medium-gray);
      padding: 1rem;
      margin-top: 2rem;
      font-size: 1.4rem;
      color: var(--main-dark);
    }

    .error {
      color: #d11214;
      font-size: 1.6rem;
    }

    .buttonSubmit {
      outline: none;
      margin: 2rem 0 1rem 0;
      border: none;
      background: var(--main-dark);
      color: var(--light-gray);
      font-size: 1.6rem;
      font-weight: 500;
      width: 20rem;
      border-radius: 0.3rem;
    }
  }
`

export const EmailForm = ({ showEmailForm }) => {
  const form = useRef()

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })

  const [error, setError] = useState('')

  const verifyForm = () => {
    const { user_name, user_email, message } = formData

    if (!user_name || !user_email || !message) {
      return 'rellena los campos correctamente'
    }
  }

  const sendEmail = (e) => {
    e.preventDefault()

    const error = verifyForm()

    if (error) {
      setError(error)
      return
    } else {
      setError('')
    }

    console.log('form.current', form.current)

    emailjs
      .sendForm(
        'service_43bbfgo',
        'template_vocu3e9',
        form.current,
        'CoHkHasEo2bqPxzpt'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <EmailFormContainer onClick={(event) => event.stopPropagation()}>
      <h2>Enviame un E-Mail</h2>
      <form id='sendemail' ref={form} onSubmit={sendEmail}>
        <input
          type='text'
          name='user_name'
          placeholder='Tu Nombre'
          value={formData.user_name}
          onChange={(e) => {
            const { name, value } = e.target
            setFormData({ ...formData, [name]: value })
          }}
        />
        <input
          type='email'
          name='user_email'
          placeholder='Tu Correo'
          value={formData.user_email}
          onChange={(e) => {
            const { name, value } = e.target
            setFormData({ ...formData, [name]: value })
          }}
        />
        <textarea
          placeholder='Mensaje'
          name='message'
          value={formData.message}
          onChange={(e) => {
            const { name, value } = e.target
            setFormData({ ...formData, [name]: value })
          }}
        />

        {error && <p className='error'>{error}</p>}

        <input className='buttonSubmit' type='submit' value='Send' />
      </form>
    </EmailFormContainer>
  )
}
