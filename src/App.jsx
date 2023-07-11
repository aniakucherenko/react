import React from 'react'
import { Modal } from "./components/Modal/Modal";
import { Users } from "./components/Users/Users";
import usersData from "./assets/users.json"
import { Counter } from 'components/Counter/Counter';

export const App = () => {
  return (
    <>
      <Counter />
      <Modal>
        <h1>Hello</h1>
        <button>OK</button>
      </Modal>
      
      <Users users={usersData} />
    </>
  );
};
 