import React, { Component } from 'react'
import { StyledHeader } from './GitRepos.styled'

export class GitHeader extends Component {
    state={ 
        value: '',
    }
handleChangeValue = e => {
    this.setState({value: e.target.value})
}
handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleChangeQuery(this.state.value)
    this.setState ({ value: ''})  
} 
    render () {
          return (
    <StyledHeader>
    <h1>Welcome to GitRepos</h1>
    <form
    onSubmit ={this.handleSubmit}>
        <input 
        type="text"
        value={this.state.value}
        onChange={this.handleChangeValue}
        placeholder='Enter repo name...'
        />
        <button>Search</button>
    </form>
    </StyledHeader>
  )
 }
}