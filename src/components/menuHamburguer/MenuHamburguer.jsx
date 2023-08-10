//import NavbarMenuHamburguesa from './NavbarMenuHamburguesa.jsx';
//import Navbar from '../navbar/Navbar';
import {
    ContainerMenuHamburguer,
    ButtonMenuHamburguer,
   // ContainerLogoNavbarHamburguer,
    //LogoNavbarHamburguer,
    //UlListNavbarHamburger,
    //LiListNavbarHamburguer,
    //EnlaceListNavbarHamburguer,
    //BedIconNavbarHamburguer 
} from './menuHamburguerStyle';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';


const MenuHamburguer = ({menuClosed, setMenuClosed}) => {

  const toggleMenu = () => {
    setMenuClosed(!menuClosed);
  };

 
  return (
    <ContainerMenuHamburguer expanded={menuClosed}>
      <ButtonMenuHamburguer onClick={toggleMenu}>
          <HiOutlineMenuAlt1/>
      </ButtonMenuHamburguer>

      {/* <NavbarMenuHamburguesa/> */}
       {/* <Navbar/> */}
      
    </ContainerMenuHamburguer>
  )
}

export default MenuHamburguer