import React, { Component } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

class Modal extends Component {
  intervalID = null
  timeoutId = null
  componentDidMount() {
    // console.log('Modal is mount');
    document.addEventListener('keydown', this.handleKeydown)
    this.timeoutId = this.intervalID = setInterval(() => {
   console.log(new Date().toLocaleTimeString());
    }, 1000)
  }
componentWillUnmount(){
  document.removeEventListener('keydown', this.handleKeydown)
  // console.log('Unmount');
  clearInterval(this.intervalID)
  clearTimeout(this.timeoutId)
}
handleKeydown = e => {
 if (e.key === 'Escape') {
  this.props.onClose()
 }
}                                                                             

handleOutsideClick = (e) => {
  if (e.target === e.currentTarget){
    this.props.onClose()
  }
  // console.log('target ====>', e.target)
  // console.log('currentTarget ====>', e.currentTarget)
  
}

render() {
  const {onClose, children} = this.props
  return (
    <ModalWrapper onClick={this.handleOutsideClick}>
    <ModalContent>
      <>
     <h1>Modal</h1>
    <hr />
    </>
    <CloseButton onClick={onClose}>x</CloseButton>
     {children}
     </ModalContent>
    </ModalWrapper>
  )
}
}

export default Modal