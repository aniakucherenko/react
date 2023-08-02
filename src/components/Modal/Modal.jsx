import React, { Component } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

class Modal extends Component {
  componentDidMount() {
    console.log('Modal is mount');

    document.addEventListener('keydown', this.handleKeydown)
  }
componentWillUnmount(){
  console.log('Unmount');
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
  console.log('target ====>', e.target)
  console.log('currentTarget ====>', e.currentTarget)
  
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