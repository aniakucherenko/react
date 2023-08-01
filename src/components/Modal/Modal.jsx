import React from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'


const Modal = ({children, onClose}) => {
  return (
     <ModalWrapper>
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
// class Modal extends Component {
//  render() {
//  const {children, onClose} = this.props 
//   return (
//     <ModalWrapper>
//     <ModalContent>
//       <>
//      <h1>Modal</h1>
//     <hr />
//     </>
//     <CloseButton onClick={onClose}>x</CloseButton>
//      {children}
//      </ModalContent>
//     </ModalWrapper>
//   )
// }
// }
  

export default Modal