import { Component } from 'react'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import { EmployeeFilter } from './EmployeeFilter'

export class Employees extends Component {
 state= {
  users: userData,
  filterStr: 'React',
 } 

 handleChangeFilter = e => {
  console.log(e.target.value)
  this.setState({filterStr: e.target.value})
 }

 handleDelete = id => {
  this.setState({
    users: this.state.users.filter(user => user.id !== id)
  })
 }

 

  render() {
    const {filterStr} = this.state
  return (
    <> 
    <EmployeeFilter 
    filterValue={filterStr}
    onFilterChange={this.handleChangeFilter} 
    />
    <EmployeeList deleteUser={this.handleDelete} users={this.state.users}/> 
    </>
  )
}

}