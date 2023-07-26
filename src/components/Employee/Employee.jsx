import { Component } from 'react'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import { EmployeeFilter } from './EmployeeFilter'

export class Employees extends Component {
 state= {
  users: userData,
  filterStr: 'React',
  openToWork: false,
 } 

 handleChangeFilter = e => {
  this.setState({filterStr: e.target.value})
 }

 handleDelete = id => {
  this.setState({
    users: this.state.users.filter(user => user.id !== id)
  })
 }

 handleChangeAvailableUsers = () => {
  this.setState(prevState => ({openToWork: !prevState.openToWork}))
 }

 getFilteredData = () => {
  const { users, filterStr, openToWork } = this.state
return users.filter(el => el.name.toUpperCase().includes(filterStr.toUpperCase().trim())
)
.filter(el => (!openToWork ? el : el.isOpenToWork) )
 }

  render() {
    const {filterStr, openToWork} = this.state
    const filteredData = this.getFilteredData()
    console.log(filteredData);
  return (
    <> 
    <EmployeeFilter 
    openToWork={openToWork}
    filterValue={filterStr}
    onFilterChange={this.handleChangeFilter} 
    onChangeCheckboxFilter = {this.handleChangeAvailableUsers}
    />
    <EmployeeList deleteUser={this.handleDelete} users={filteredData}/> 
    </>
  )
}

}