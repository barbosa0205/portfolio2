import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import loadingImage from '../../assets/gifs/Blocks-1s-200px.gif'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const ProyectPage = () => {
  let params = useParams()
  let history = useHistory()
  const [proyect, setProyect] = useState(null)

  const getProyectById = async (id) => {
    try {
      // const resp = await fetch(
      //   `https://portfolio-backend-qaq3.onrender.com/api/proyect?id=${id}`
      // )
      const resp = await fetch(
        `https://portfolio-backend-qaq3.onrender.com/api/proyect?id=${id}`
      )
      if (resp.status === 404) {
        history.push('/404')
      }
      const { data } = await resp.json()
      setProyect(data)
    } catch (err) {
      history.push('/server-error')
    }
  }

  useEffect(() => {
    if (params.id) {
      getProyectById(params.id)
    }

    return () => {
      setProyect(null)
    }
  }, [params])

  const BackContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 1rem;
    margin-top: 1rem;

    & > i {
      font-size: 1.6rem;
      padding: 0 1.2rem;
      background: #232323;
      color: #ffff;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  `

  const TecnologiesContainer = styled.div`
    width: 80%;
    max-width: 43rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background: #d1d1d170;
    border-radius: 0.5rem;

    & > p {
      font-size: 1.5rem;
      margin: 0;
      margin-top: 1rem;
    }
  `
  const TechnologiesBox = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `

  const MarkDown = styled.div`
    width: 100%;
    & img {
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  `

  const MainContainer = styled.div`
    width: 100%;
    height: 100%;

    @media (min-width: 1280px) {
      margin-top: 3rem;
    }
  `
  const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #fdfdfd;

    & > p {
      font-size: 3.5rem;
      font-weight: 600;
      margin: 2rem 0;
      padding: 0;
      margin: 0;
      text-align: center;
    }

    & > img {
      width: 100%;
      object-fit: contain;
    }

    @media (min-width: 1280px) {
      width: 80%;
      margin: 0 auto;
    }
  `
  const ContainerLoading = styled.div`
    width: 100%;
    height: 100%;
    background: #fdfdfd;
    margin-bottom: 5rem;
    & > p {
      font-size: 3.5rem;
      font-weight: 600;
      margin: 2rem 0;
      padding: 0;
      margin: 0;
      text-align: center;
    }

    & > img {
      width: 100%;
      object-fit: contain;
    }

    @media (min-width: 1280px) {
      width: 80%;
      margin: 0 auto;
    }
  `

  return (
    <>
      {proyect && (
        <>
          <BackContainer>
            <i
              onClick={() => history.push('/')}
              className='ri-arrow-left-line'
            ></i>
          </BackContainer>
          <MainContainer>
            <Container>
              <p>{proyect.title}</p>

              <TecnologiesContainer>
                <p>Tecnologias</p>
                <TechnologiesBox>
                  {proyect.technologies.map((tech) => (
                    <i
                      key={tech._id}
                      className={`${tech.icon}`}
                      title={tech.name}
                      style={{
                        fontSize: '3rem',
                        color: tech.color,
                      }}
                    ></i>
                  ))}
                </TechnologiesBox>
              </TecnologiesContainer>
              {proyect.longDesc && (
                <MarkDown
                  dangerouslySetInnerHTML={{ __html: proyect.longDesc }}
                ></MarkDown>
              )}
            </Container>
          </MainContainer>
        </>
      )}

      {!proyect && (
        <>
          <Skeleton
            width={'8rem'}
            height={'5rem'}
            baseColor='#dcdcdc'
            borderRadius={'1.5rem'}
            inline
            style={{
              margin: '3rem 0 0 1rem',
            }}
          />
          <ContainerLoading>
            <Skeleton
              width={'60%'}
              height={'5rem'}
              baseColor='#dcdcdc'
              borderRadius={'1.5rem'}
              inline
              style={{
                margin: '4rem 0 0 0',
              }}
              containerClassName={'skeletonWrap'}
            />
            <Skeleton
              width={'70%'}
              height={'20rem'}
              baseColor='#dcdcdc'
              borderRadius={'1.5rem'}
              inline
              style={{
                margin: '2rem 0 0 0',
              }}
              containerClassName={'skeletonWrap'}
            />
            <Skeleton
              width={'70%'}
              height={'50rem'}
              baseColor='#dcdcdc'
              borderRadius={'1.5rem'}
              inline
              containerClassName={'skeletonWrap'}
            />
            <Skeleton
              width={'70%'}
              height={'3rem'}
              count={3}
              baseColor='#dcdcdc'
              borderRadius={'1.5rem'}
              inline
              style={{
                margin: '.5rem 0',
              }}
              containerClassName={'skeletonWrap2'}
            />
          </ContainerLoading>
        </>
      )}
    </>
  )
}
