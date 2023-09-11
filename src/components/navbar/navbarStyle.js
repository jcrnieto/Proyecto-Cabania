import styled from 'styled-components';

export const ContainerGeneralNavbar = styled.div`
`


export const ContainerNavbar = styled.div`

  position: fixed;
  width: 200px;
  height: 100%;
  background-color: #a1031d;
  display: block;
  

  @media (max-width: 768px){
    z-index: 999;
    transform: translateX(${({ mobileMenuOpen }) => (mobileMenuOpen ? '-200px' : '0')});
    transition: transform 0.4s ease-in-out;
    width: 170px;
   }  
`

export const UlListNavbar = styled.ul`
  list-style: none;
  text-align: center;
  margin-top: 50px;

`

export const LiListNavbar = styled.li`
  margin-top: 30px;
  display: flex;

`

export const EnlaceListNavbar= styled.a`
  text-decoration: none;
  color: white;

  @media (max-width: 768px){
    z-index: 999;
    transform: translateX(${({ mobileMenuOpen }) => (mobileMenuOpen ? '-200px' : '0')});
    transition: transform 0.4s ease-in-out;
   }  

`

export const ContainerLogoNavbar = styled.div`
   text-align: center;
   margin-top: 50px;
`

export const LogoNavbar = styled.img`
   width: 150px;
   height: 150px;
`

export const RedesContainerNavbar = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-end;
   margin-top: 100px;
`

export const WattsapIconNavbar = styled.a`
    font-size: 28px;
    margin-right:5px;
    cursor: pointer;
    color: #1dde20;
`

export const InstagramIconNavbar = styled.a`
    font-size: 28px;
    margin-left:5px;
    cursor: pointer;
    color:#de1dc4;
`

export const HouseIconNavbar = styled.div`
   margin-right: 8px;
   font-size: 18px;
`

export const ImageIconNavbar = styled.div`
  margin-right: 8px;
  font-size: 18px;
`

export const BedIconNavbar = styled.div`
  margin-right: 8px; 
  font-size: 18px;  
`

export const MessageIconNavbar = styled.div`
  margin-right: 8px;
  font-size: 18px;
`

export const ContainerHamburguerNavbar = styled.div`
  display: none;

  @media (max-width: 768px){
       display: block;
       position: fixed;
       z-index: 999;
       margin-left: 47%;
       padding-top: 30px;
       
   }
`

export const ButtonMenuHamburguer = styled.button`
     font-size: 30px;
     background-color: #6d6d70;
     border-radius: 10px;
     padding-top: 5px;

`

export const MenuItemsNavbar = styled.div`
       
`
 



