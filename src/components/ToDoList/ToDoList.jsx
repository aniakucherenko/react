import React, { Component } from 'react'
import { StyledInput, StyledTodo, StyledTodoList } from './ToDoList.styled'
import { StyledButton } from 'components/Counter/Counter.styled'

import todoData from './../../assets/todos.json'

export class ToDoList extends Component {
state = {
 tasks: todoData
}

handleDelete = (id) => {
 console.log(id)
 const newArray = this.state.tasks.filter(el => el.id !== id)
 this.setState({tasks:newArray})
}


    render(){
        const {tasks} = this.state
        return (
<div>
      <StyledTodoList>
        <StyledInput type ='text'/>
        <StyledButton>Add
        </StyledButton>
        {tasks.map(item => (<StyledTodo key= {item.id}>
            <input type='checkbox'/>
            <span>{item.todo}</span>
            <StyledButton size = '18px' onClick={()=> this.handleDelete(item.id)}>Delete</StyledButton>
        </StyledTodo>))}
        <button>Clear</button>
      </StyledTodoList>
    </div>
        )
    }
}

// export const ToDoList = () => {
//   return (
    // <div>
    //   <StyledTodoList>
    //     <StyledInput type ='text'/>
    //     <StyledButton>Add
    //     </StyledButton>
    //     {[].map(item => (<StyledTodo>
    //         <input type='checkbox'/>
    //         <span>todo</span>
    //         <StyledButton size = '18px'>Delete</StyledButton>
    //     </StyledTodo>))}
    //     <button>Clear</button>
    //   </StyledTodoList>
    // </div>
//   )
// }
