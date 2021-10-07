import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Card } from '../../components/Card'
import { Title } from '../../components/Title'

import { proyectsData } from '../../helpers/proyectsData'

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
        width: 100%;
        height: 5rem;
        position: fixed;
        top: 0;
        left: 0;
        margin-top: 2rem;
        & > a {
            padding: 1rem 1.5rem;
            margin: 0 1rem 1rem 1rem;
            background: var(--main-dark);
            border-radius: 0.4rem;
            & > i {
                color: var(--main-white);
            }

            &:hover {
                background: var(--high-dark);
            }
        }
    }

    @media (min-width: 1280px) {
        margin-top: 0;
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

export const ProyectsPage = () => {
    return (
        <AppContainer>
            <Main>
                <Title text="Todos los proyectos" center />
                <GridContainer>
                    {proyectsData.map(proyect => (
                        <Card
                            key={proyect.id}
                            title={proyect.title}
                            img={proyect.img}
                            desc={proyect.desc}
                            skills={proyect.skills}
                            repo={proyect.repo}
                            web={proyect.web}
                        />
                    ))}
                </GridContainer>
                <div className="back-container">
                    <Link to="/">
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                </div>
            </Main>
        </AppContainer>
    )
}
