import React, { useState } from 'react';
import {
  ContainerNavbar,
  UlListNavbar,
  LiListNavbar,
  ContainerLogoNavbar,
  RedesContainerNavbar,
  WattsapIconNavbar,
  InstagramIconNavbar,
  HouseIconNavbar,
  ImageIconNavbar,
  BedIconNavbar,
  MessageIconNavbar,
  EnlaceListNavbar,
  LogoNavbar,
  ContainerGeneralNavbar,
  ContainerHamburguerNavbar,
  ButtonMenuHamburguer
}
  from "./navbarStyle";
import { LuInstagram } from 'react-icons/lu';
import { BsWhatsapp } from 'react-icons/bs';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { BsImages } from 'react-icons/bs';
import { FaBed } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import logo from '../../../image/logo-blanco.png';


const Navbar = () => {

 const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  const handleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  } 

 const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth',  block: 'center', inline: 'nearest' });
      setMobileMenuOpen(false);
    }
  };
  
  return (
     < ContainerGeneralNavbar>
        
        <ContainerNavbar mobileMenuOpen={mobileMenuOpen}>
         <ContainerLogoNavbar>
           <LogoNavbar src={logo} />
         </ContainerLogoNavbar>
         <UlListNavbar>

           <LiListNavbar>
             <HouseIconNavbar>
               <BsFillHouseDoorFill />
             </HouseIconNavbar>
             <EnlaceListNavbar href="#intro" onClick={(e) => {handleScroll(e, 'intro');setMobileMenuOpen(!mobileMenuOpen)}}>Intro </EnlaceListNavbar>
           </LiListNavbar>
   
           <LiListNavbar>
             <ImageIconNavbar>
               <BsImages/>
             </ImageIconNavbar>
             <EnlaceListNavbar href="#galeria" onClick={(e) => {handleScroll(e, 'galeria');setMobileMenuOpen(!mobileMenuOpen)}}>Galeria</EnlaceListNavbar>
           </LiListNavbar>
   
           <LiListNavbar>
             <BedIconNavbar>
               <FaBed />
             </BedIconNavbar>
             <EnlaceListNavbar href="#servicios" onClick={(e) => {handleScroll(e, 'servicios');setMobileMenuOpen(!mobileMenuOpen)}}>Servicios</EnlaceListNavbar>
           </LiListNavbar>
   
           <LiListNavbar>
             <MessageIconNavbar>
               <BiMessageDetail />
             </MessageIconNavbar>
             <EnlaceListNavbar href="#contacto" onClick={(e) => {handleScroll(e, 'contacto');setMobileMenuOpen(!mobileMenuOpen)}}>Contacto</EnlaceListNavbar>
           </LiListNavbar>
   
         </UlListNavbar>

         <RedesContainerNavbar>
           <WattsapIconNavbar href="https://wa.me/+543516468746" target="_blank">
             <BsWhatsapp />
           </WattsapIconNavbar>
           <InstagramIconNavbar href="https://instagram.com/balcon_del_rio_cabana?igshid=MzRlODBiNWFlZA==" target="_blank">
             <LuInstagram />
           </InstagramIconNavbar>
         </RedesContainerNavbar>
        </ContainerNavbar>
       

         <ContainerHamburguerNavbar>
           <ButtonMenuHamburguer  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <HiOutlineMenuAlt1/>
           </ButtonMenuHamburguer>
         </ContainerHamburguerNavbar> 

      </ContainerGeneralNavbar>
  )
}

export default Navbar

