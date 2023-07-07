import React from 'react'
import { UserComponent } from 'components/UserComponent/UserComponent';
import PropTypes from 'prop-types'; 
import { styled } from 'styled-components';

export const Users = ({users}) => {
  return (
    <>
        <h1>Users</h1>
        <Wrapper>
          {users.map( user => 
            
            (
                <UserComponent {...user}/>


            )
            )}
        </Wrapper>
        </>
  )
}

const Wrapper = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap:20px;
padding: 20px 40px;
`


Users.propTypes = {
users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    bio: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    isOpenToWork: PropTypes.bool,

}))
}