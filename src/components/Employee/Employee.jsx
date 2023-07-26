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
  this.setState({filterStr: e.target.value})
 }

 handleDelete = id => {
  this.setState({
    users: this.state.users.filter(user => user.id !== id)
  })
 }

 getFilteredData = () => {
  const { users, filterStr } = this.state
return users.filter(el => el.name.includes(filterStr))
 }

  render() {
    const {filterStr} = this.state
    const filteredData = this.getFilteredData()
    console.log(filteredData);
  return (
    <> 
    <EmployeeFilter 
    filterValue={filterStr}
    onFilterChange={this.handleChangeFilter} 
    />
    <EmployeeList deleteUser={this.handleDelete} users={filteredData}/> 
    </>
  )
}

}