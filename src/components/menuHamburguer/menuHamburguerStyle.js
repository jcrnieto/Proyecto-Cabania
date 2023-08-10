import styled from 'styled-components';

export const ContainerMenuHamburguer = styled.div`
   display: flex;
   flex-direction: column;
   font-size: 34px;
   color: black;
   

    width: ${({ expanded }) => (expanded ? '50%' : '0px')}; 
    height: 100vh; 
    background-color: #a1031d; 
    transition: width 0.3s ease; 
    

   @media (max-width: 768px){
      display: block;
      position: fixed;
      z-index: 999;
   }
  `

   export const ButtonMenuHamburguer = styled.button`
     margin-left: 100%;
   `


