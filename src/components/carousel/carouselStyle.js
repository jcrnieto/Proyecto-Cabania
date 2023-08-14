import styled from 'styled-components';

export const ContainerCarousel = styled.section`
   height: 100vh;
   width: 85%;
   background-color: #bdf0dc;
   margin-left: 200px;

   @media (max-width: 767px) {
      margin-left: 0;
      width:auto;  
      height: auto;
   }

   @media (min-width: 800px) and (max-width: 1024px) {
    width:auto;
    padding-top: 0px;
    
   }
`

export const TitleCarousel = styled.h1`
   color: black;
   text-align: center;
   margin-top: 0px;
   padding-top: 20px;
   padding-bottom: 20px;
   font-size: 30px;
`

export const ContainerSliders = styled.div`
   
`

export const SlideContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`

export const ImgSlide = styled.img`
   width: 450px;
   height: 450px;
   object-fit: cover;
   border-radius: 50px; 
   display: block;
   object-fit: cover;
   cursor: pointer;

     @media (max-width: 767px) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50px;
   }  
`
export const ContainerImg = styled.div`

`

