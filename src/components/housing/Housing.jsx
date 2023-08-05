import { ContainerHousing, TitleHousing, TextHousing, ImgContainerHousing, ImgHousing } from "./housingStyle";
import imgHousing from "../../../image/housing.jpeg";

const Housing = () => {
    return (
        <ContainerHousing id="intro">
            <TitleHousing>El Complejo</TitleHousing>
            <ImgContainerHousing>
                <ImgHousing src={imgHousing}/>
            </ImgContainerHousing>
            <TextHousing>
                El complejo está ubicado en una zona privilegiada de la precordillera mendocina, Potrerillos, desde la cual se admira el macizo montañoso Cordón del Plata en toda su magnitud, con una vista panorámica del hermoso Valle del Sol.
                Se encuentra en un predio parquizado y forestado de 4.000 m2, a sólo 100 metros de un apacible arroyo, importante afluente del Río Blanco. Cuenta con seis cabañas de 70 m2 cubiertos cada una, una recepción buffet y la residencia del Administrador.
                El área de recreación contiene un juego combinado para niños, piscina y pequeña cancha de futbol, todo rodeado de zona parquizada.
                Se puede alternar el descanso y relax que brinda el complejo y su entorno con una variada gama de actividades recreativas que garantizan la diversión, disfrutando del sol, del río tumultuoso y especialmente de la montaña, con amigos o en familia.
            </TextHousing>
        </ContainerHousing>
    )
}

export default Housing