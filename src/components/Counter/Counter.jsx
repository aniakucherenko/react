import React, {Component} from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'



export class Counter extends Component {
    state = {
      counter: 0,
      step:10,
      inputValue: 1, 
  }

  handleChangeStep = stepValue => {
    this.setState({ step: +stepValue })
  }
increment = () => {
  // this.setState({counter: this.state.counter +1})
this.setState(prevState => ({counter: prevState.counter +prevState.step}))

}  
decrement = () => {
  // this.setState({counter: this.state.counter -1})
  this.setState(prevState => ({counter: prevState.counter -prevState.step}))
}

reset = () => {
  this.setState({counter:0, step:1})
}
 
  render() {
    return (
      <FlexContainer>
        <StyledCounter>
          <div>
            <input type="text" name='step'onChange={e => this.handleChangeStep(e.target.value)} />
            <button>Change step</button>
          </div>
          <h1>{this.state.counter}</h1>
          <Flex>
            <StyledButton onClick={this.decrement}>minus</StyledButton>
            <StyledButton onClick={this.reset}>reset</StyledButton>
            <StyledButton onClick={this.increment}>plus</StyledButton>
          </Flex>
        </StyledCounter>
      </FlexContainer>  
        )
  }
}



// export const Counter = () => {
// const handleClick = e => {
//   console.log(e)
// }

//   return (
// <FlexContainer>
//   <StyledCounter>
//     <h1>{0}</h1>
//     <Flex>
//       <StyledButton onClick={handleClick} >minus</StyledButton>
//       <StyledButton>reset</StyledButton>
//       <StyledButton>plus</StyledButton>
//     </Flex>
//   </StyledCounter>
// </FlexContainer>  
//   )
// }
