import { FlexContainer, StyledButton } from 'components/Counter/Counter.styled'
import React, { Component } from 'react'
import { StyledInput, StyledLabel, StyledLoginForm, StyledTitle } from './RegisterForm.styled'

export class RegisterForm extends Component {
  state= {
  }

handleSubmit = (e) => {
    e.preventDefault()
    console.log('send form')
}

  render () {
    return (
   <FlexContainer>
    <StyledLoginForm onSubmit={this.handleSubmit}>
        <StyledTitle>Register</StyledTitle>
        <StyledLabel>
            Name:
            <StyledInput type='text' name='name'/>
        </StyledLabel>
        <br />
        <StyledLabel>
            Email:
            <StyledInput type='text' name='email'/>
        </StyledLabel>
        <br />
        <StyledLabel>
            Password:
            <StyledInput type='text' name='password'/>
        </StyledLabel>
        <br/>
        <StyledButton>Register</StyledButton>
    </StyledLoginForm>
   </FlexContainer>
    )
  }
}
