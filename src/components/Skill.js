import React from 'react'
import styled from 'styled-components'

const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
  width: fit-content;
  height: auto;
  padding: 1rem;
  & .icon-name-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    font-weight: bold;
    font-size: 1.4rem;
    & > i {
      font-weight: 500;
      font-size: 3.5rem;

      &.htmlColor {
        color: #ff8a3c;
      }
      &.cssColor {
        color: #1aaeff;
      }
      &.jsColor {
        color: #ffd52d;
      }
      &.reactColor {
        color: #0d59a6;
      }
      &.gitColor {
        color: #ff8055;
      }
      &.githubColor {
        color: #242424;
      }
      &.npmColor {
        color: #94cd1d;
      }
      &.firebaseColor {
        color: #ffa714;
      }
      &.fa-bootstrap {
        color: #ff79de;
      }

      &.sassColor {
        color: #fe3896;
      }
      &.mongoColor {
        color: #00853c;
      }
      &.tailwindColor {
        color: #3bd59c;
      }
    }
  }

  .styled-components {
    ::before {
      content: '💅🏼';
      font-size: 2.6rem;
    }
  }
`

export const Skill = ({ iconClass, name, color }) => {
  return (
    <SkillContainer>
      <div className='icon-name-container'>
        <i className={`${iconClass} ${color}`}></i>
        <p>{name}</p>
      </div>
    </SkillContainer>
  )
}
