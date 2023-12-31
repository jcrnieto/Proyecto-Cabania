import styled from 'styled-components';

export const LocationContainer = styled.section`
   height: 100vh;
   width: 85%;
   background-color: whitesmoke;
   margin-left: 200px;
   padding-top:20px;
   padding-bottom: 20px;

   @media (max-width: 767px) {
      margin-left: 0;
      width:auto; 
      height: 80%;
   }

   @media (max-width: 1120px) {
      width: auto;
  }
   
`

export const TitleLocation = styled.h1`
  color: black;
  text-align: center;
  font-size: 40px;
`

export const DescriptionLocation = styled.h4`
  color: black;
  text-align: center;
  font-size: 20px;

  @media (max-width: 767px) {
     margin: 20px;
   }
`

export const ContainerMapLocation = styled.div`
    height:400px;
    width: 70%;
    margin-left: 170px;
    margin-top: 40px;

    @media (max-width: 767px) {
      width:300px;
      margin-left: auto;
      margin-right: auto;
   }

   @media (max-width: 1120px) {
      width: auto;
      margin-left: 20px;
      margin-right: 20px;
  }
`
