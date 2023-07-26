import React from 'react'
import { Modal } from "./components/Modal/Modal";
import { Users } from "./components/Users/Users";
import usersData from "./assets/users.json"
import { Counter } from 'components/Counter/Counter';
import { ColorPicker } from 'components/ColorPicker/ColorPicker';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { RegisterForm } from 'components/RegisterForm/RegisterFormControled';
import { Employees } from 'components/Employee/Employee';
  

export const App = () => {
  return (
    <> 
    <Employees/>
   <RegisterForm/>
    <ToDoList />
      <ColorPicker message = 'Color picker'/>
      <Counter />
      <Modal>
        <h1>Hello</h1>
        <button>OK</button>
      </Modal>
      
      <Users users={usersData} />
    </>
  );
};
 