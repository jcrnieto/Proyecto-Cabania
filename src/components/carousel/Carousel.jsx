import { useState } from 'react';
import {
   ContainerCarousel,
   TitleCarousel,
   ContainerSliders,
   SlideContainer,
   ImgSlide, 
   ContainerImg,
  //  ModalOverlay,
  //  ModalContainer,
  //  CloseButton
   } from "./carouselStyle.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import ModalImage from '../modalImage/ModalImage.jsx';



const carouselStyle = ({slidesInfo}) => {
    // console.log(slidesInfo)
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
    
  return (
     <ContainerCarousel id="galeria">
        <TitleCarousel> Galeria de Foros</TitleCarousel>
        <ContainerSliders>
        <Swiper
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          slidesPerView={2}
          spaceBetween={10}
          navigation
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          delay={3000}
          breakpoints={{
            960: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            720: {
              slidesPerView: 1,
              spaceBetween: 6,
            },
          }}
          >
            {
               slidesInfo.map(slide =>(
                <SwiperSlide key={slide.id}>
                   <SlideContainer onClick={() => openModal(slide.src)}>
                       <ContainerImg>
                          <ImgSlide src={slide.src}/>
                        </ContainerImg>
                      </SlideContainer>
                    </SwiperSlide> 
                )) 
            }
        </Swiper>
        </ContainerSliders>
        <ModalImage open={modalOpen} onClose={closeModal} imageSrc={selectedImage}/>
     </ContainerCarousel>
  )
}

export default carouselStyle