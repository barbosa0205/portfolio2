import React from 'react'

import styled from 'styled-components'
import { Card } from 'src/components/Card'
import { Title } from 'src/components/Title'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Link from 'next/link'

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

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background: #fdfdfd;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  & > .back-container {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #fdfdfd;
    padding: 0.3rem;
    & > i {
      padding: 1rem 1.5rem;
      margin: 0 1rem 1rem 1rem;
      background: var(--main-dark);
      border-radius: 0.4rem;
      color: var(--main-white);
      cursor: pointer;
      &:hover {
        background: var(--high-dark);
      }
    }
  }
  @media (min-width: 1280px) {
    width: 80%;
  }
`

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 480px));
  grid-template-rows: auto;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`

const ProyectsPage = () => {
  const [proyects, setProyects] = React.useState(null)

  React.useEffect(() => {
    ;(async () => {
      try {
        const resp = await fetch('/api/proyects')
        const { data } = await resp.json()

        setProyects(data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <AppContainer>
      <Main>
        <Title text='Todos los proyectos' center />
        <GridContainer>
          {proyects &&
            proyects.map((proyect) => (
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
            ))}
        </GridContainer>
        {!proyects && (
          <Skeleton
            className='skeletonProyect'
            count={6}
            height={'30rem'}
            baseColor='#dcdcdc'
            borderRadius={'1.5rem'}
            inline
            style={{
              margin: '1rem',
            }}
            containerClassName={'skeletonWrap'}
          />
        )}
        <div className='back-container'>
          <Link href='/'>
            <i aria-hidden className='fas fa-arrow-left'></i>
          </Link>
        </div>
      </Main>
    </AppContainer>
  )
}

export default ProyectsPage
