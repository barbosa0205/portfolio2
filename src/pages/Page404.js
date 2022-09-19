import React from 'react'
import { Link } from 'react-router-dom'
export const Page404 = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: ' center',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '6rem',
        }}
      >
        404
      </h1>
      <Link
        style={{
          textDecoration: 'none',
        }}
        to='/'
      >
        <i
          style={{
            fontSize: '4rem',
            color: '#626262',
            background: '#232323',
            padding: '.5rem .8rem',
            borderRadius: '.4rem',
          }}
          className='ri-home-4-fill'
        ></i>
      </Link>
    </div>
  )
}
