import {
   ContainerIntro,
   LogoContainerIntro, 
   LogoImageIntro, 
   DescriptionIntro, 
   ButtonIntro,
   ContainerButtonIntro,
   EnlaceButtonIntro
  } from "./introStyle";
import logo from '../../../image/logo-fundacion.png';

const Intro = () => {

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ContainerIntro>
         <LogoContainerIntro>
              <LogoImageIntro src={logo}/>
         </LogoContainerIntro>
         <DescriptionIntro>
             Estratégicamente ubicadas en la precordillera medocina de Potrerillos.
             Relájese con comodidad y disfrute de nuestros hermosos paisajes.
         </DescriptionIntro>
        <ContainerButtonIntro>
          <EnlaceButtonIntro  href="#intro" onClick={(e) => handleScroll(e, 'intro')}>
         <ButtonIntro >
              Ver Alojamiento
         </ButtonIntro>
         </EnlaceButtonIntro>
         </ContainerButtonIntro>

    </ContainerIntro>   
  )
}

export default Intro