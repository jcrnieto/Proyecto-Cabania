import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center; 
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  padding-left: 130px;
  padding-top: 60px;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5); 
  display: ${({ open }) => ( open ? 'block' : 'none')};
  
  @media (max-width: 767px) {
    
      height: 100vh;
      width: 100%;
      padding: 40px;
     
      padding-top: 80px;
      margin-left: 0;
      margin-right: 0;
      
    }  
`;

export const ModalContainer = styled.div`
  background-color: white;
  max-width: 80%;
  height: 500px ;
  border-radius: 20px;
  position: relative;
`;

 export const CloseButton = styled.span`
   position: absolute;
   color: black;
   top: 20px;
   right: 20px;
   cursor: pointer;
   font-size: 40px;
   transition: .3sg ease all;
   border-radius: 5px;
   color: #1766dc;

   &:hover{
     background: #f2f2f2;
   }
 `;

 export const ImgModal = styled.img`
    width: 1100px;
    height: 500px;
    border-radius: 20px;
    object-fit: cover;

    @media (max-width: 767px) {
      
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
      padding-left: auto;
      padding-right: auto;
   }  
 `