import React from 'react'
import styled from 'styled-components'

const ProyectCard = styled.article`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 85%;
    max-width: 460px;
    min-height: 100px;
    margin: 1.5rem;
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

    & .fa-html5 {
        color: #ff8a3c;
    }

    & .fa-css3-alt {
        color: #1aaeff;
    }

    & .fa-js {
        color: #ffd52d;
    }
    & .ri-reactjs-fill {
        color: #0d59a6;
        font-weight: 500;
    }

    & .ri-npmjs-line {
        color: #94cd1d;
    }

    & .fa-git-alt {
        color: #ff8048;
    }
    & .fa-sass {
        color: #fe3896;
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
    }
`

export const Card = ({ title, img, desc, skills, repo, web }) => {
    const compareSkills = skill => {
        if (skill === 'html') {
            return 'fab fa-html5'
        } else if (skill === 'css') {
            return 'fab fa-css3-alt'
        } else if (skill === 'js') {
            return 'fab fa-js'
        } else if (skill === 'react') {
            return 'ri-reactjs-fill'
        } else if (skill === 'npm') {
            return 'ri-npmjs-line'
        } else if (skill === 'git') {
            return 'fab fa-git-alt'
        } else if (skill === 'github') {
            return 'ri-github-fill'
        } else if (skill === 'sass') {
            return 'fab fa-sass'
        } else {
            return null
        }
    }

    return (
        <ProyectCard>
            <Info>
                <div className="image-container">
                    <img src={img} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </Info>
            <Footer>
                <Skills>
                    {skills.map(skill => {
                        const skillFiltered = compareSkills(skill)
                        return (
                            <i
                                key={skill}
                                className={
                                    skill === 'styled-components'
                                        ? 'styled'
                                        : skillFiltered
                                }
                                title={skill}
                            >
                                {skill === 'styled-components' && '💅🏼'}
                            </i>
                        )
                    })}
                </Skills>
                <Links>
                    <a
                        href={`${repo}`}
                        rel="noopener noreferrer"
                        target="_blank"
                        title={`Repositorio en github de ${title}`}
                    >
                        Repo
                    </a>
                    <a
                        href={`${web}`}
                        rel="noopener noreferrer"
                        target="_blank"
                        title={`Pagina web de ${title}`}
                    >
                        Web
                    </a>
                </Links>
            </Footer>
        </ProyectCard>
    )
}
