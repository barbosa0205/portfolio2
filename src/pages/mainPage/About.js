import React from 'react'
import styled from 'styled-components'
import { Title } from '../../components/Title'

import profileImg from '../../assets/images/profile.png'
import { Skill } from '../../components/Skill'

import skills from '../../helpers/skills.json'

const AboutContainer = styled.div`
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: about;
    @media (min-height: 1200px) {
        min-height: 0;
    }
`
const Container = styled.div`
    width: 95%;
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    padding: 3rem;
    border-radius: 0.8rem;
    background: var(--ultralight-gray);

    & > img {
        width: 150px;
        border-radius: 50%;
    }

    & > p,
    b,
    li {
        margin-top: 2rem;
        font-family: var(--main-font);
        font-size: 2rem;
    }

    & > ul > li {
        margin-top: 0.5rem;
    }

    & > p:first-child::first-letter {
        font-size: 8rem;
        font-weight: bold;
        line-height: 0.1;
    }

    & > ul > li {
        list-style: square;
    }
`
const TecSkills = styled.div`
    width: 100%;
    padding: 2rem 0;
    margin-top: 2rem;
    background: var(--main-white);
    border-radius: 8px;

    & > h3 {
        text-align: center;
    }
    .skill-container {
        //With GRID
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, 10rem);
        justify-content: center;

        //With FLEX
        /* display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 95%;
        padding-top: 1.5rem; */
    }

    .buttons-container {
        width: 100%;
        height: 4rem;
        display: flex;
        justify-content: space-around;
        align-items: center;

        & > a {
            font-size: 1.4rem;
            padding: 1rem 3.2rem;
            border-radius: 4px;
            background: var(--main-dark);
            color: var(--main-white);
            text-decoration: none;
            cursor: pointer;
        }

        & > a > i {
            padding-left: 1rem;
        }
    }

    @media (min-width: 600px) {
        .buttons-container {
            justify-content: space-evenly;
        }
    }
`

export const About = () => {
    return (
        <AboutContainer id="about" className="container">
            <Title text="Sobre Mi" center />
            <Container>
                <img src={profileImg} alt="" />
                <p>
                    Programador Web Frontend desde el 2020, Soy nacido en
                    Tamaulipas MX, Estudiante autodidacta apasionado por la
                    tecnologia.
                    <br />
                    <br />
                </p>
                <b>utilizo de manera profesional las siguientes tecnologias:</b>
                <ul>
                    <li>html5, css3, js como tecnologia base</li>
                    <li> ReactJS como libreria para la creacion de UI</li>
                    <li> SCSS como preprocesador</li>
                    <li>npm/yarn para la gestion de paquetes</li>
                    <li>Git como control de versiones </li>
                    <li>GitHub para alojar mis proyectos</li>
                </ul>
                <br />
                <TecSkills>
                    <h3>Habilidades Tecnicas</h3>
                    <div className="skill-container">
                        {skills.map(skill => (
                            <Skill
                                key={skill.name}
                                iconClass={skill.iconClass}
                                name={skill.name}
                                color={skill?.color}
                            />
                        ))}
                    </div>
                    <div className="buttons-container">
                        <a href="/CV-esp.pdf" download>
                            Descargar CV
                        </a>
                    </div>
                </TecSkills>
            </Container>
        </AboutContainer>
    )
}
