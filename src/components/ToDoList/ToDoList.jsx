import React from 'react'
import { StyledInput, StyledTodo, StyledTodoList } from './ToDoList.styled'
import { StyledButton } from 'components/Counter/Counter.styled'

export const ToDoList = () => {
  return (
    <div>
      <StyledTodoList>
        <StyledInput type ='text'/>
        <StyledButton>Add
        </StyledButton>
        {[].map(item => (<StyledTodo>
            <input type='checkbox'/>
            <span>todo</span>
            <StyledButton size = '18px'>Delete</StyledButton>
        </StyledTodo>))}
        <button>Clear</button>
      </StyledTodoList>



    </div>



  
  )
}
