import Link from 'next/link'
import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function ServerErrorPage() {
  return (
    <Container>
      <h1>500</h1>
      <p>Error interno del servidor</p>
      <Link
        style={{
          textDecoration: 'none',
          background: '#232323',
          color: 'white',
          margin: '2rem 0 0 0',
          padding: '.5rem 1.5rem',
          borderRadius: '.5rem',
        }}
        href={'/'}
      >
        Ir a Inicio
      </Link>
    </Container>
  )
}
