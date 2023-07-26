import styled from 'styled-components'
import { EmployeeCard } from './EmployeeCard'

export const EmployeeList = ({users = [], deleteUser }) => {
  if (!users.length) {
  return <h1>There are no users</h1>
  }
   
  return (
    <UserList>
{users.map(user => (
  <EmployeeCard deleteUser = {deleteUser} key={user.id} {...user}/>
))}
    </UserList>
  )
}
const UserList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
`


// import React from 'react'
// import styled from 'styled-components'
// import { EmployeeCard } from './EmployeeCard'
 
// export const EmployeeList = ({ users = [], deleteUser }) => {
//     if (!users.length) {
//         return <h1>No users for work</h1>
//     }
//   return (
//     <UserList>
//         {users.map(user => (
//             <EmployeeCard deleteUser = {deleteUser} key={user.id}  {...user}/>
//         ))}
//     </UserList>
//   )
// }
// const UserList = styled.ul`
// display: flex;
// flex-wrap: wrap;
// justify-content: center;
// gap: 20px;
// `



