import { ContainerNavbar, UlListNavbar, LiListNavbar, LogoNavbar } from "./navbarStyle";

const Navbar = () => {
  return (
     <ContainerNavbar>
          <LogoNavbar>Logo</LogoNavbar>
          <UlListNavbar>
            <LiListNavbar>Intro</LiListNavbar>
            <LiListNavbar>Galeria</LiListNavbar>
            <LiListNavbar>Alojamiento</LiListNavbar>
            <LiListNavbar>Contacto</LiListNavbar>
          </UlListNavbar>
     </ContainerNavbar>
  )
}

export default Navbar