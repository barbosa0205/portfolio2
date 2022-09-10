import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import loadingImage from '../../assets/gifs/Blocks-1s-200px.gif'
export const ProyectPage = () => {
  const params = useParams()

  const [proyect, setProyect] = useState(null)

  const getProyectById = async (id) => {
    try {
      const resp = await fetch(
        `https://portfolio-backend-qaq3.onrender.com/api/proyect?id=${id}`
      )
      const { data } = await resp.json()
      setProyect(data)
    } catch (err) {
      console.log(err)
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

  return (
    <>
      {proyect && (
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
      )}

      {!proyect && (
        <div
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: ' center',
            alignItems: 'center',
          }}
        >
          <img
            src={loadingImage}
            alt='loading'
            style={{
              maxWidth: '15rem',
              maxHeight: '15rem',
            }}
          />
        </div>
      )}
    </>
  )
}
