import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Card } from '../../components/Card'
import { useRouter } from 'next/router'

const TechnologyPage = () => {
  const router = useRouter()

  const [technology, setTechnology] = useState(null)
  const [proyects, setProyects] = useState([])

  const getTechnologyData = async (id) => {
    try {
      const resp = await fetch(`/api/technology?technology=${id}`)
      const { data } = await resp.json()
      setTechnology(data)
    } catch (error) {
      console.log('error', error)
    }
  }
  const getProyectsData = async (id) => {
    try {
      const resp = await fetch(`/api/proyect?searchBySkill=${id}`)
      const { data } = await resp.json()
      setProyects(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    if (router.query.id) {
      getTechnologyData(router.query.id)
      getProyectsData(router.query.id)
    }

    return () => {}
  }, [router])

  const MainContainer = styled.div`
    width: 100%;
    min-height: 100vh;

    & > i {
      font-size: 2.5rem;
      padding: 0.2rem 1.3rem;
      background: #232323;
      color: #ffff;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  `
  const BackContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 1rem;
    margin-top: 1rem;

    & > i {
      font-size: 2.5rem;
      padding: 0.2rem 1.3rem;
      background: #232323;
      color: #ffff;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  `

  const Header = styled.div`
    width: 100%;
    max-width: 90rem;
    display: flex;
    margin: 0 auto;
    margin-top: 5rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    background: #333333;

    & > p {
      font-size: 2.8rem;
      color: #fdfdfd;
    }
  `
  const ProyectsSection = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 480px));
    justify-content: center;
    align-items: center;
    max-width: 130rem;
    min-height: 30rem;
    margin: 0 auto;
    margin-top: 5rem;
    padding: 1rem;
    align-items: center;
    box-shadow: inset 0px 2px 40px 3px #dedede;

    & > p {
      font-size: 2.8rem;
      color: #fdfdfd;
    }
  `

  return (
    <MainContainer>
      <BackContainer>
        <i onClick={() => router.push('/')} className='ri-arrow-left-line'></i>
      </BackContainer>
      {technology && (
        <Header>
          <p>Proyectos que utilizan </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: ' center',
              alignItems: 'center',
              marginLeft: '1rem',
              padding: '.5rem 1rem',
              background: '#efefef',
              borderRadius: '.3rem',
            }}
          >
            <i
              style={{
                color: technology.color,
                fontSize: '4rem',
                padding: '0 .5rem',
              }}
              className={technology.icon}
            ></i>
            <p
              style={{
                fontWeight: '600',
              }}
            >
              {technology.name}
            </p>
          </div>
        </Header>
      )}
      {proyects.length ? (
        <ProyectsSection>
          {proyects.map((proyect) => (
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
        </ProyectsSection>
      ) : (
        <>
          <Skeleton
            height={'10rem'}
            width={'80%'}
            baseColor='#dcdcdc'
            borderRadius={'1.5rem'}
            inline
            style={{
              margin: '1rem',
            }}
            containerClassName={'skeletonWrap'}
          />
          <Skeleton
            count={2}
            height={'30rem'}
            width={'40rem'}
            baseColor='#dcdcdc'
            borderRadius={'1.5rem'}
            inline
            style={{
              margin: '1rem',
            }}
            containerClassName={'skeletonWrap'}
          />
          <Skeleton
            count={3}
            height={'5rem'}
            width={'5rem'}
            baseColor='#dcdcdc'
            borderRadius={'1.5rem'}
            inline
            style={{
              margin: '1rem',
            }}
            containerClassName={'skeletonWrap'}
          />
        </>
      )}
    </MainContainer>
  )
}
// : (
//   <Skeleton
//     count={4}
//     height={'30rem'}
//     width={'40rem'}
//     baseColor='#dcdcdc'
//     borderRadius={'1.5rem'}
//     inline
//     style={{
//       margin: '1rem',
//     }}
//     containerClassName={'skeletonWrap'}
//   />
// )}

export default TechnologyPage
