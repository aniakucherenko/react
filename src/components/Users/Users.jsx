import { UserComponent } from 'components/UserComponent/UserComponent';
import PropTypes from 'prop-types'; 

import React from 'react'

export const Users = ({users}) => {
  return (
    <div>
        <h1>Users</h1>
        <ul>
          {users.map( user => 
            
            (
                <UserComponent {...user}/>


            )
            )}
        </ul>
        </div>
  )
}


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