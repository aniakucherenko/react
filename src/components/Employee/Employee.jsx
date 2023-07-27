import { Component } from 'react'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import { EmployeeFilter } from './EmployeeFilter'

export class Employees extends Component {
 state= {
  users: userData,
  filterStr: '',
  openToWork: false,
  activeSkill: 'all',
 } 

 componentDidMount() {
  console.log('Component was mount');
  let users = window.localStorage.getItem('users')
  if(users){
    this.setState({users:JSON.parse(users)})
  }
  if(!users.length) {
    this.setState({users: userData})
  }

 }
 componentDidUpdate(prevProps, prevState) {
  // console.log('Component did update')
  if(prevState.users.length !== this.state.users.length) {
    console.log('You changed amount of users');
    window.localStorage.setItem('users',JSON.stringify(this.state.users))
  } else {
    console.log('update');
  }

 }

 handleChangeFilter = e => {
  this.setState({filterStr: e.target.value})
 }

 handleDelete = id => {
  this.setState({
    users: this.state.users.filter(user => user.id !== id)
  })
 }

 handleChangeSkill = skill => {
 console.log(skill)
 this.setState({activeSkill: skill})
 }

 handleChangeAvailableUsers = () => {
  this.setState(prevState => ({openToWork: !prevState.openToWork}))
 }

 getFilteredData = () => {
  const { users, filterStr, openToWork, activeSkill } = this.state
return users.filter(user => user.name.toUpperCase().includes(filterStr.toUpperCase().trim())
)
.filter(user => (!openToWork ? user : user.isOpenToWork))
.filter(user => activeSkill === 'all' ? user : user.skills.includes(activeSkill))
 }

  render() {
    const {filterStr, openToWork, activeSkill} = this.state
    const filteredData = this.getFilteredData()
    console.log(filteredData);
  return (
    <> 
    <EmployeeFilter 
    activeSkill= {activeSkill}
    openToWork={openToWork}
    filterStr={filterStr} 
    onChangeSkill={this.handleChangeSkill}
    onFilterChange={this.handleChangeFilter} 
    onChangeCheckboxFilter = {this.handleChangeAvailableUsers}
  
    />
    <EmployeeList deleteUser={this.handleDelete} users={filteredData}/> 
    </>
  )
}

}