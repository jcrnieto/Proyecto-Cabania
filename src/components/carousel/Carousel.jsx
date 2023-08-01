import { ContainerCarousel, TitleCarousel, ContainerSliders, SlideContainer, ImgSlide } from "./carouselStyle.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const carouselStyle = ({slidesInfo}) => {
    console.log(slidesInfo)
  return (
     <ContainerCarousel>
        <TitleCarousel> Galeria de Foros</TitleCarousel>
        <ContainerSliders>
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={1}
          slidesPerView={2}
          navigation
          scrollbar={{ draggable: true }}
          >
            {
               slidesInfo.map(slide =>(
                <SwiperSlide key={slide.id} >
                      <SlideContainer>
                           <ImgSlide src={slide.src}/>
                      </SlideContainer>
                </SwiperSlide>
               )) 
            }
        </Swiper>
        </ContainerSliders>
     </ContainerCarousel>
  )
}

export default carouselStyle