import { LocationContainer, TitleLocation, DescriptionLocation } from "./locationStyle";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Location = () => {

    const location = [-31.721238416452046, -64.4173033335611];

    return (
        <LocationContainer>
            <TitleLocation> Ubicación</TitleLocation>
            <DescriptionLocation>
            Estamos ubicados en el valle de precordillera Potrerillos, a 70 km al sur-oeste de la ciudad de Mendoza.
            Complejo El Plata, Avenida del Sol 2123, Piedras Blancas, Potrerillos, Mendoza.
            </DescriptionLocation>
            <MapContainer center={location} zoom={13} style={{ height: '400px', width: '70%', marginTop:"40px", marginLeft:"170px" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={location}>
                    <Popup>La Bolsa</Popup>
                </Marker>
            </MapContainer>
        </LocationContainer>
    )
}

export default Location