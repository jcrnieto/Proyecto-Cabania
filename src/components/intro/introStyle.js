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
  
`

export const Title = styled.p`
   color:orange;
   text-align: center;
   margin:0;
   padding: 0;
`