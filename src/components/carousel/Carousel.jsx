import { ContainerCarousel, TitleCarousel, ContainerSliders, SlideContainer, ImgSlide, ContainerImg } from "./carouselStyle.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Autoplay} from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';



const carouselStyle = ({slidesInfo}) => {
    console.log(slidesInfo)
    
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
                    <SlideContainer>
                       <ContainerImg>
                          <ImgSlide src={slide.src}/>
                        </ContainerImg>
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