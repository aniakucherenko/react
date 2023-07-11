import React, {Component} from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'



export class Counter extends Component {
    state = {
      counter: 10
  }
increment = () => {
  this.setState({counter: this.state.counter +1})
}
decrement = () => {
  this.setState({counter: this.state.counter -1})
}

reset = () => {
  this.setState({counter:0})
}
 
  render() {
    return (
      <FlexContainer>
        <StyledCounter>
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
