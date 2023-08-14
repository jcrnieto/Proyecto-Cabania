import { ModalOverlay,  ModalContainer, CloseButton, ImgModal } from './modalImageStyle';
import {AiOutlineClose} from 'react-icons/ai'

const ModalImage = ({ open, onClose, imageSrc }) => {
  return (
     <ModalOverlay open={open}>
        < ModalContainer>
        <CloseButton onClick={onClose}><AiOutlineClose/></CloseButton>
           <ImgModal src={imageSrc} alt="Ampliada" /> 
        </ModalContainer>
     </ModalOverlay>
  )
}

export default ModalImage