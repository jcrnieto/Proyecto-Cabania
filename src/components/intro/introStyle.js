import styled from 'styled-components';
import imageIntro from '../../../image/portada.jpeg'

export const ContainerIntro = styled.section`
   background-image: url(${imageIntro});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   width: 85%;
   height: 100vh;
   margin-left: 200px;
   padding-top: 30px;
  
   @media (max-width: 767px) {
      margin-left:0;
      width:auto;
   }
 `

export const LogoContainerIntro = styled.div`
  text-align: center;

@media (max-width: 767px) {
    width: 3x;
    height: 3px;
   }
`

export const LogoImageIntro = styled.img`
  width: 300px;
  height: 300px;
  

  @media (max-width: 767px) {
   
  }
`

export const DescriptionIntro = styled.h3`
  text-align: center;
  width: 800px;
  font-size: 25px;
  margin-left: auto;
  margin-right: auto;
  color:#111212;
  

  @media (max-width: 767px) {
    margin-top: 350px;
    margin-left: 20px;
    font-size: 20px;
    width: auto;
  }
`

export const ContainerButtonIntro = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-top: 0;

  @media (max-width: 767px) {
    text-align: center;
    margin-top: 80px;
  }
`

export const ButtonIntro = styled.button`
  outline: none;
  cursor: pointer;
  width: 150px;
  height: 50px;
  background-image: linear-gradient(to top, #D8D9DB 0%, #fff 80%, #FDFDFD 100%);
  border-radius: 30px;
  border: 1px solid #8F9092;
  transition: all 0.2s ease;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #606060;
  text-shadow: 0 1px #fff;

  &:hover {
  box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 3px 3px #CECFD1;
  }

  &:active {
  box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
  }

  &:focus {
  box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
  }

  
`

export const EnlaceButtonIntro = styled.a`

`

export const ContainerOpacityIntro = styled.div`
  width: 900px;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.2);;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  padding-bottom: 40px;
  
  @media (max-width: 767px) {
     width: auto;
  }
`
