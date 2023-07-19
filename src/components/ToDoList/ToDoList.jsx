import React, { Component } from 'react'
import { StyledInput, StyledTodo, StyledTodoList } from './ToDoList.styled'
import { StyledButton } from 'components/Counter/Counter.styled'

import todoData from './../../assets/todos.json'

export class ToDoList extends Component {
state = {
 tasks: todoData,
 inputValue: '',
}

handleToggleToDo = id => {
console.log(id)
this.setState(prevState => ({
    tasks: prevState.tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task)
}))
}

handleDelete = (id) => {
 console.log(id)
 const newArray = this.state.tasks.filter(el => el.id !== id)
 this.setState({tasks:newArray})
}

handleAddToDo = () => {
    console.log('add')
    this.setState({tasks: [
        ...this.state.tasks,
        {
            id:crypto.randomUUID(),
            todo: this.state.inputValue,
            completed:false,
        }
    ]})
}

handleResetToDo = () => {
this.setState({tasks: []})
}


    render(){
        const {tasks, inputValue} = this.state
        return (
<div>
      <StyledTodoList>
        <StyledInput type ='text' value={inputValue} onChange = { e=> this.setState({inputValue: e.target.value})}/>
        <StyledButton onClick = {this.handleAddToDo}>Add
        </StyledButton>
        {tasks.map(item => (<StyledTodo key= {item.id}>
            <input type='checkbox' checked={item.completed} onChange={() =>this.handleToggleToDo(item.id)}/>
            <span>{item.todo}</span>
            <StyledButton size = '18px' onClick={()=> this.handleDelete(item.id)}>Delete</StyledButton>
        </StyledTodo>))}
        <button onClick={this.handleResetToDo}>Clear</button>
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
