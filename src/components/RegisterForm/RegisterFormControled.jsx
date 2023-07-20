import { FlexContainer, StyledButton } from 'components/Counter/Counter.styled'
import React, { Component } from 'react'
import { StyledInput, StyledLabel, StyledLoginForm, StyledTitle } from './RegisterForm.styled'

export class RegisterForm extends Component {
    state = {
        name: '',
        password: '',
        email: '',
        age: 1,
        agree: false,
        gender: 'female',
    }

handleSubmit = e => {
    e.preventDefault()
    console.log (this.state)
}
// handleChangeName = e => {
//     this.setState({ name: e.target.value })
//  }
//  handleChangePassword = e => {
//     this.setState({ password: e.target.value })
//  }
// handleChangeEmail = e => {
//    this.setState({ email: e.target.value })
//  }
handleChangeInput = ({target}) => {
    // console.log(e.target.value, e.target.name)
    const {name, value} = target
    this.setState({[name]: value})
}
handleChangeCheckboxCheckbox = e => {
    this.setState({ agree: !this.state.agree })
}
handleChangeGender = e => {
    this.setState({gender: e.target.value})
}

render() {
    const {age, name, email, password, agree, gender } = this.state
    return (
   <FlexContainer>
    <StyledLoginForm onSubmit={this.handleSubmit}>
        <StyledTitle>Register</StyledTitle>
        <StyledLabel>
            Name:
            <StyledInput 
            type='text' 
            name='name' 
            value={name} 
            onChange={this.handleChangeInput}/>
        </StyledLabel>
        <br />
        <StyledLabel>
            Email:
            <StyledInput 
            type='text' 
            name='email' 
            value={email}
            onChange={this.handleChangeInput}
            />
        </StyledLabel>
        <br />
        <StyledLabel>
            Password:
            <StyledInput type='text' name='password' value={password}
            onChange={this.handleChangeInput}
            />
        </StyledLabel>
        <br/>
        <StyledLabel>
            Age:
            <StyledInput type='number' name='age' value={age}
            onChange={this.handleChangeInput}
            />
        </StyledLabel>
        <br/>
        <StyledLabel>
            Agreed:
        <StyledInput
        type= 'checkbox'
        name= 'checkbox'
        checked = {agree}
        onChange={this.handleChangeCheckboxCheckbox }
        />
        </StyledLabel>
        <br/>
        <div>
        <input type="radio" name="radioButton"  value="male"
        checked={'male' === gender}
        onChange={this.handleChangeGender}
        /> <span>Male</span>
        <input type="radio" name="radioButton"  value="female"
        checked={'female' === gender}
        onChange={this.handleChangeGender}
        /> <span>Female</span>
       
        </div>
        <br /> 
        <StyledButton disabled= {!agree}>Register</StyledButton>
    </StyledLoginForm>
   </FlexContainer>
    )
  }
}

