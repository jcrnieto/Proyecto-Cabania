import styled from 'styled-components';

export const ContainerHousing = styled.section`
   height: 100vh;
   width: 85%;
   background-color: #edcae8;
   margin-left: 200px;
   margin-top:0;
   padding-top:1px ;

   @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      margin-left: 0; 
      width:auto;
      height: auto;
   }

   @media (max-width: 1120px) {
      width: auto;
      display: flex;
      flex-direction: column;
      height: auto;
  }
`

export const TitleHousing = styled.h1`
   color: black;
   text-align: center;
   margin-top: 20px;
   margin-bottom: 40px;
   padding-top: 20px;
   font-size: 35px
`

export const TextHousing = styled.p`
   color: black;
   text-align: center;
   font-size: 25px;

   @media (max-width: 1024px) {
    width:auto;
    margin: 20px;
  }
`

export const ImgContainerHousing = styled.div`
   @media (max-width: 767px) {
     margin-right: auto; 
     margin-left: auto;
   }

   @media (max-width: 1120px) {
      width: auto;
   }

   @media (max-width: 1024px) {
     margin-right: auto;
     margin-left: auto;
      
   }
`

export const ImgHousing = styled.img`
  width: 300px; 
  height: 300px; 
  object-fit: cover;
  shape-margin: 0rem;
  shape-image-threshold: 70%;
  float: right;
  border-radius: 20px;
  margin-right: 10px;
  
  @media (max-width: 1120px) {
      width: 700px;
      margin-right: 100px;
   }

   @media (max-width: 1024px) {
      width: 300px;
      margin-right: 0;
   }
  
`