import styled from 'styled-components';

export const MenuHamburguerNavbar = styled.div`
   font-size: 34px;
   color: black;
   display: none;

   @media (max-width: 768px){
      display: block;
      position: fixed;
      z-index: 999;
   }
  `