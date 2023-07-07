import {styled} from 'styled-components'

export const Card = styled.li`
 background-color: #f4f5ff;
 list-style: none;
 width: 30%;
 padding: 20px 10px
`
export const Name = styled.h1`
font-size: 1 rem;
color: ${props => (props.isopen === 'true' ? 'green' : 'red')}
`
export const Bio = styled.p`
font-style: italic;
`
export const SkillItem = styled.li`
padding: 4px 4px;
border: 1px solid black;
margin-bottom: 10px;
border-radius: 8px;
list-style: none;
width: 100%
`