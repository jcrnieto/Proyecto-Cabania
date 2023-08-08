//import React, { useState } from 'react';
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
  // MenuHamburguerNavbar,
  // MenuItemsNavbar,
  ContainerGeneralNavbar,
  ContainerHamburguerNavbar
}
  from "./navbarStyle";
import { LuInstagram } from 'react-icons/lu';
import { BsWhatsapp } from 'react-icons/bs';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { BsImages } from 'react-icons/bs';
import { FaBed } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
// import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import logo from '../../../image/logo-blanco.png';
import MenuHamburguer from "../menuHamburguer/MenuHamburguer";




const Navbar = () => {

   // const [isMobile, setIsMobile] = useState(true);

  //  const toggleMenu = () => {
  //    setVisibleMenu(!visibleMenu);
  //  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
     < ContainerGeneralNavbar>
    
        <ContainerNavbar>
         <ContainerLogoNavbar>
           <LogoNavbar src={logo} />
         </ContainerLogoNavbar>
         <UlListNavbar>
           <LiListNavbar>
             <HouseIconNavbar>
               <BsFillHouseDoorFill />
             </HouseIconNavbar>
             <EnlaceListNavbar href="#intro" onClick={(e) => handleScroll(e, 'intro')}>Intro </EnlaceListNavbar>
           </LiListNavbar>
   
           <LiListNavbar>
             <ImageIconNavbar>
               <BsImages />
             </ImageIconNavbar>
             <EnlaceListNavbar href="#galeria" onClick={(e) => handleScroll(e, 'galeria')}>Galeria</EnlaceListNavbar>
           </LiListNavbar>
   
           <LiListNavbar>
             <BedIconNavbar>
               <FaBed />
             </BedIconNavbar>
             <EnlaceListNavbar href="#servicios" onClick={(e) => handleScroll(e, 'servicios')}>Servicios</EnlaceListNavbar>
           </LiListNavbar>
   
           <LiListNavbar>
             <MessageIconNavbar>
               <BiMessageDetail />
             </MessageIconNavbar>
             <EnlaceListNavbar href="#contacto" onClick={(e) => handleScroll(e, 'contacto')}>Contacto</EnlaceListNavbar>
           </LiListNavbar>
   
         </UlListNavbar>
         <RedesContainerNavbar>
           <WattsapIconNavbar>
             <BsWhatsapp />
           </WattsapIconNavbar>
           <InstagramIconNavbar>
             <LuInstagram />
           </InstagramIconNavbar>
         </RedesContainerNavbar>
       {/* <MenuHamburguerNavbar >
        <HiOutlineMenuAlt1/>
        </MenuHamburguerNavbar>  */}
        </ContainerNavbar>

        <ContainerHamburguerNavbar>
        <MenuHamburguer/>
        </ContainerHamburguerNavbar>

      </ContainerGeneralNavbar>
  )
}

export default Navbar



{/* <MenuItemsNavbar>
</MenuItemsNavbar> */}