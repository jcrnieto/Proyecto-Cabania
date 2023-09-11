import { LocationContainer, TitleLocation, DescriptionLocation, ContainerMapLocation } from "./locationStyle";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Location = () => {

    const location = [-31.721238416452046, -64.4173033335611];

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    return (
        <LocationContainer data-aos="fade-up">
            <TitleLocation> Ubicación</TitleLocation>
            <DescriptionLocation>
            Estamos ubicados en el valle de Paravachasca, a 46 km al sur-oeste de la ciudad de Córdoba.
            Balcón del Río, Avenida del Sol 2123, La Bolsa, Córdoba.
            </DescriptionLocation>
            <ContainerMapLocation>
            <MapContainer center={location} zoom={13} style={{ height: '400px'}}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={location}>
                    <Popup>La Bolsa</Popup>
                </Marker>
            </MapContainer>
            </ContainerMapLocation>
        </LocationContainer>
    )
}

export default Location