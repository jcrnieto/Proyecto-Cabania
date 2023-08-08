import {
   ContainerIntro,
   LogoContainerIntro, 
   LogoImageIntro, 
   DescriptionIntro, 
   ButtonIntro,
   ContainerButtonIntro,
   EnlaceButtonIntro,
   ContainerOpacityIntro
  } from "./introStyle";
import logo from '../../../image/logo-negro.png';

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
      <ContainerOpacityIntro>
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
      </ContainerOpacityIntro>
      
    </ContainerIntro>   
  )
}

export default Intro