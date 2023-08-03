import React from 'react'

import colorsData from './../../assets/colors.json'
import { StyledBackgroundTheme, StyledColor, StyledColorPalette, StyledColorsList } from './ColorPicker.styled'
import { Component } from 'react'

export class ColorPicker extends Component {
  state = {
    colors: colorsData,
    currentColor: 'white'
  }
 componentDidMount(){
  console.log('Color picker is ready');
 } 
 componentDidUpdate(){
  console.log('UPDATE');
 }
shouldComponentUpdate(nextProps, nextState) {
  return nextState.currentColor !== this.state.currentColor
}

handleClick = color => {
  this.setState({currentColor: color})
}



    render () {
        const {colors} = this.state
        const {currentColor } = this.state
        return (
            <StyledBackgroundTheme bgColor={currentColor} >
                <h1>{this.props.message}</h1>
                <h1>Current color: {currentColor}</h1>
                <StyledColorPalette>
                    <StyledColorsList>
        {colors.map(item => 
            <StyledColor key = {item.id} onClick={()=> this.setState({currentColor:item.color})} >{item.color} 
            </StyledColor>
            )}
                    </StyledColorsList>
                </StyledColorPalette>
            </StyledBackgroundTheme>
          )
    }
}

// export const ColorPicker = ({ colors = [] }) => {
//   return (
//     <StyledBackgroundTheme>
//         <StyledColorPalette>
//             <StyledColorsList>
// {colorsData.map(item => 
//     <StyledColor key = {item.id}>{item.color}
//     </StyledColor>
//     )}

//             </StyledColorsList>
//         </StyledColorPalette>
//     </StyledBackgroundTheme>
//   )
// }
