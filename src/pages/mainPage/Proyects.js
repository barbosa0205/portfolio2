import React from 'react'
import styled from 'styled-components'
import { Card } from '../../components/Card'
import { Title } from '../../components/Title'
import { Link } from 'react-router-dom'
import { About } from './About'
import loadingImage from '../../assets/gifs/Blocks-1s-200px.gif'
const ProyectsContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  min-height: 100vh;
  margin: 0 auto;
  grid-area: proyects;
  & > div h2 {
    max-width: 100%;
  }

  &.title-container {
    width: 90%;
    margin: 0 auto;
  }

  .button-container {
    width: 60%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 5rem;
    font-size: 2rem;
    & > a {
      text-align: center;
      width: 100%;
      max-width: 25rem;
      padding: 1.5rem 0;
      background: var(--main-dark);
      border-radius: 0.4rem;
      color: var(--main-white);
      text-decoration: none;

      &:hover {
        background: var(--high-dark);
      }

      @media (min-width: 600px) {
        & > a {
          padding: 2rem 0;
        }
      }
      @media (min-width: 1024px) {
        & > a {
          padding: 3rem 0;
        }
      }
    }
  }
`

const ProyectGridCards = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 480px));
  justify-content: center;
  align-items: center;
`

export const Proyects = () => {
  const [proyects, setProyects] = React.useState(null)

  React.useEffect(() => {
    ;(async () => {
      try {
        const resp = await fetch(
          'https://portfolio-backend-qaq3.onrender.com/api/proyects'
        )
        const { data } = await resp.json()
        data.sort((a, b) => a.pos.localeCompare(b.pos))
        setProyects(data)
      } catch (error) {
        console.error(error)
      }
      return () => {
        setProyects(null)
      }
    })()
  }, [])

  return (
    <ProyectsContainer id='proyects' className='container'>
      <Title text='PROYECTOS' center />

      <ProyectGridCards>
        {proyects &&
          proyects.map((proyect, index) => {
            if (index <= 3) {
              return (
                <Card
                  key={proyect._id}
                  id={proyect._id}
                  title={proyect.title}
                  img={proyect.cover}
                  desc={proyect.shortDesc}
                  skills={proyect.technologies}
                  repo={proyect.repo}
                  web={proyect.web}
                />
              )
            } else {
              return null
            }
          })}

        {!proyects && (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: ' center',
            }}
          >
            <img
              src={loadingImage}
              alt='loading'
              style={{
                maxWidth: '15rem',
              }}
            />
          </div>
        )}
      </ProyectGridCards>
      <div className='button-container'>
        <Link to='/all-proyects'>Ver más</Link>
      </div>
    </ProyectsContainer>
  )
}
