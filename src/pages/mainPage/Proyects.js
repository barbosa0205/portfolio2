import React from 'react'
import styled from 'styled-components'
import { Card } from '../../components/Card'
import { Title } from '../../components/Title'

import { proyectsData } from '../../helpers/proyectsData'
import { Link } from 'react-router-dom'

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

// const proyectsData = [
//     {
//         id: 1,
//         title: 'Portafolio',
//         desc: 'Mi portafolio, donde estas leyendo esto tambien es un proyecto! 🎉',
//         img: portfolioImg,
//         skills: ['react', 'js', 'css', 'html', 'npm'],
//         repo: 'https://github.com/barbosa0205/Minimalist-Calculator',
//         web: 'https://barbosa0205.github.io/Minimalist-Calculator/',
//     },
//     {
//         id: 2,
//         title: 'Minimalist Calc',
//         desc: 'Una calculadora con un diseño moderno y minimalista 📱',
//         img: calcImg,
//         skills: ['html', 'css', 'js'],
//         repo: 'https://github.com/barbosa0205/Minimalist-Calculator',
//         web: 'https://barbosa0205.github.io/Minimalist-Calculator/',
//     },
//     {
//         id: 3,
//         title: 'Pokedex',
//         desc: 'Una pequeña pero grandiosa pokedex que te dara un vistazo a las caracteristicas de algunos de los pokemon que habitan los valles, Atrapalos a todos🚀',
//         img: pokedexImg,
//         skills: ['html', 'css', 'js'],
//         repo: 'https://github.com/barbosa0205/Pokedex',
//         web: 'https://barbosa0205.github.io/Pokedex/',
//     },
//     {
//         id: 4,
//         title: 'Piedra Papel & Tijeras',
//         desc: 'El clasico juego de Piedra Papel Y Tijeras con un diseño retro! 👾',
//         img: rpsImg,
//         skills: ['html', 'css', 'js'],
//         repo: 'https://github.com/barbosa0205/Paper-Rock-Scsissors',
//         web: 'https://barbosa0205.github.io/Paper-Rock-Scsissors/',
//     },
// ]

export const Proyects = () => {
  return (
    <ProyectsContainer id='proyects' className='container'>
      <Title text='PROYECTOS' center />

      <ProyectGridCards>
        {proyectsData.map((proyect, index) => {
          if (index <= 3) {
            return (
              <Card
                key={index}
                title={proyect.title}
                img={proyect.img}
                desc={proyect.desc}
                skills={proyect.skills}
                repo={proyect.repo}
                web={proyect.web}
              />
            )
          } else {
            return null
          }
        })}
      </ProyectGridCards>
      <div className='button-container'>
        <Link to='/all-proyects'>Ver más</Link>
      </div>
    </ProyectsContainer>
  )
}
