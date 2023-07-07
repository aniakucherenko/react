import React from 'react'
import { Bio, Card,  Name,  SkillItem } from './UserComponent.styled'


export const UserComponent = ({id, name, email, bio, skills, isOpenToWork}) => {
  return (
    <Card>
        <Name isopen={isOpenToWork.toString()} >{name}</Name>
        <h2>{email}</h2>
        <Bio>{bio}</Bio>
        <ul>
            {skills.map(skill => <SkillItem key={skill}>{skill}</SkillItem>)}
        </ul>
        </Card>
  )
}

