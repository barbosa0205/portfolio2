import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProyectCard = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2rem;
  border-radius: 8px;
  transition: transform 0.2s;
  background: var(--main-white);
  box-shadow: -5px 3px 1px var(--ultralight-gray),
    -5px -1px 1px var(--ultralight-gray), 1px 3px 1px var(--ultralight-gray),
    1px -1px 1px var(--ultralight-gray);

  &:hover {
    transform: scale(1.06);
  }
`

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;

  & > h3 {
    margin-top: 1rem;
    text-align: center;
    font-size: 2.7rem;
    font-weight: bold;
    font-family: var(--main-font);
  }
  & > p {
    width: 80%;
    margin: 0 auto;
    margin: 0 0.5rem;
    text-align: center;
    font-size: 1.6rem;
    color: var(--high-dark);
  }

  .image-container {
    width: 100%;
    height: 100%;
    & > img {
      width: 100%;
      max-height: 15rem;
      object-fit: cover;
      object-position: center;
    }
  }

  @media (min-width: 600px) {
    & > p {
      font-size: 1.6rem;
      padding: 0 1.5rem;
    }
  }
`

const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`

const Skills = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 1rem 0;
  & > i {
    font-size: 3rem;
    padding: 0.5rem;
  }

  & > .styled {
    font-size: 2.3rem;
    padding: 0 0.3rem;
  }
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > a {
    padding: 0.4rem 1rem;
    margin: 0 0.5rem;
    margin-right: 1rem;
    background: var(--main-dark);
    text-align: center;
    text-decoration: none;
    border-radius: 3px;
    color: var(--main-white);
    font-size: 1.7rem;
  }

  & > button {
    cursor: pointer;
    border: none;
    padding: 0.4rem 1.1rem;
    margin: 0 0.5rem;
    margin-right: 1rem;
    background: var(--main-dark);
    text-align: center;
    text-decoration: none;
    border-radius: 3px;
    color: var(--main-white);
    font-size: 1.7rem;
  }
`

export const Card = ({ id, title, img, desc, skills, repo, web }) => {
  return (
    <ProyectCard>
      <Info>
        <div className='image-container'>
          <img src={img} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </Info>
      <Footer>
        <Skills>
          {skills.map((skill) => {
            return (
              <i
                className={`${skill.icon} `}
                style={{
                  color: `${skill.color}`,
                }}
                key={skill._id}
                title={skill.name}
              ></i>
            )
          })}
        </Skills>
        <Links>
          <a
            href={`${repo}`}
            rel='noopener noreferrer'
            target='_blank'
            title={`Repositorio en github de ${title}`}
          >
            Repo
          </a>
          <a
            href={`${web}`}
            rel='noopener noreferrer'
            target='_blank'
            title={`Pagina web de ${title}`}
          >
            Web
          </a>
          <Link title={`ver más sobre el proyecto`} to={`/proyect/${id}`}>
            Más
          </Link>
        </Links>
      </Footer>
    </ProyectCard>
  )
}
