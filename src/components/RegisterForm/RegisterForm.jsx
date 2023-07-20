import { FlexContainer, StyledButton } from 'components/Counter/Counter.styled'
import React, { Component } from 'react'
import { StyledInput, StyledLabel, StyledLoginForm, StyledTitle } from './RegisterForm.styled'

export const RegisterForm = () => {
  
const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const name = e.target.name.value
    const email = e.target.email.value
    console.log({name, email})
    form.reset()
}

    return (
   <FlexContainer>
    <StyledLoginForm onSubmit={handleSubmit}>
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

