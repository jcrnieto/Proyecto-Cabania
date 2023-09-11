import { ContainerHousing, TitleHousing, TextHousing, ImgContainerHousing, ImgHousing } from "./housingStyle";
import imgHousing from "../../../image/housing.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Housing = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    return (
        <ContainerHousing id="intro" data-aos="fade-up">
            <TitleHousing>El Complejo</TitleHousing>
            <ImgContainerHousing>
                <ImgHousing src={imgHousing}/>
            </ImgContainerHousing>
            <TextHousing>
                Tranquilidad y relax total, con el sonido del canto de los pájaros, cálidos atardeceres y un cielo… con todas las estrellas.
                El escenario perfecto para descubrir una forma diferente de disfrutar de la naturaleza y la tranquilidad
                El complejo está ubicado en una zona privilegiada del valle de Paravachasca, La Bolsa.
                Con un amplio parque y bajada al rio. La cabaña cuenta con capacidad para seis personas, con dos habitaciones, con dos baños (uno en suite), 
                cocina equipada con vajilla completa, todos los accesorios para poder cocinar: bajo mesada,
                termo tanque, heladera con freezer y cocina con horno a gas, living, wi-fi, tv por cable, asador, pileta y cochera.
                También brindamos el servicio de ropa blanca. 
                
            </TextHousing>
        </ContainerHousing>
    )
}

export default Housing