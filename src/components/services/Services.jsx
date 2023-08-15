import { ContainerService, TitleService, ServiceCard,ServiceIcon, ServiceDescription, ContainerCard } from "./servicesStyle";
import {PiGarageBold} from 'react-icons/pi';
import {PiTelevisionFill} from 'react-icons/pi';
import {FaUtensils} from 'react-icons/fa';
import {BiBath} from 'react-icons/bi';

const infoService = [
    {
        id:1,
        description:"baño completo con ducha",
        icon: <BiBath/>
    },
    {
        id:2,
        description:"living comedor con cocina totalmente equipada",
        icon: <FaUtensils/>
    },
    {
        id:3,
        description:"cochera cubierta con asador incluido",
        icon: <PiGarageBold/>
    },
    {
        id:4,
        description:"tv satelital y wifi",
        icon: <PiTelevisionFill/>
    }
]

const Services = () => {
    
   return (
     <ContainerService id='servicios' >
         <TitleService>Contamos con todos los servicios</TitleService>
         <ContainerCard>
         {
            infoService.map(service =>(
                <ServiceCard key={service.id}>
                    <ServiceIcon >
                        {service.icon}
                    </ServiceIcon> 
                    <ServiceDescription>
                        {service.description}
                    </ServiceDescription>
                </ServiceCard>
            ))
         }
         </ContainerCard>
     </ContainerService>
  )
}

export default Services