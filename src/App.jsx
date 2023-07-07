import React from 'react'
import { Modal } from "./components/Modal/Modal";
import { Users } from "./components/Users/Users";
import usersData from "./assets/users.json"

export const App = () => {
  return (
    <>
      <Modal>
        <h1>Hello</h1>
        <button>OK</button>
      </Modal>
      
      <Users users={usersData} />
    </>
  );
};
 