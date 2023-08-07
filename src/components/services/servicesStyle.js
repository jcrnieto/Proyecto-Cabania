import styled from 'styled-components';

export const ContainerService = styled.section`
   height: 90vh;
   width: 85%;
   background-color: #e8e8e8;
   margin-left: 200px;
   padding: 0;
   padding-top:1px;

    @media (max-width: 767px) {
      margin-left: 0;
      width:auto;
      height: auto;
   }
`

export const TitleService = styled.h1`
   color:#a4aba8;
   text-align: center;
   /* margin-top: 40px; */
   margin-bottom: 40px;
   padding-top: 20px;
   font-size: 35px
`
export const ContainerCard = styled.div`
   display: flex;
   
   @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      
   }
`

export const ServiceCard = styled.div`
   border: 2px solid #a4aba8;;
   padding: 10px;
   width: 180px;
   height: 280px;
   margin-left: 70px;
   border-radius: 40px;

   @media (max-width: 767px) {
      margin-top: 15px;
      margin-bottom: 15px;
     margin-left: auto;
     margin-right: auto;
   }
   
`

export const ServiceIcon = styled.div`
   color: #e36da4;
   text-align: center;
   margin-top: 40px;
   font-size: 32px;
`

export const ServiceDescription = styled.h3`
   color:#a4aba8;
   text-align: center;
   margin-top: 40px;
`