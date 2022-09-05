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
    }
  }
`

export const Skill = ({ iconClass, name, color }) => {
  return (
    <SkillContainer>
      <div className='icon-name-container'>
        <i
          className={`${iconClass}`}
          style={{
            color,
          }}
        ></i>
        <p>{name}</p>
      </div>
    </SkillContainer>
  )
}
