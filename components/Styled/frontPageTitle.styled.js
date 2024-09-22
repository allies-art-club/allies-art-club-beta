import styled from "styled-components";
import Image from 'next/image'
export const Container = styled.div`
@media(max-width:767px){
  display:${(props)=>props.$mobile?"block":"none"}
}
@media(min-width:768px){
  display:${(props)=>props.$mobile?"none":"block"}
}
  width: 100%;
  margin-top:1rem;
  flex: 2.5 0 0%;
}

`;

export const BackgroundContainer = styled.figure`
@media(max-width:480px){
  margin:0;

}
@media(min-width:768px){
  margin:0;
  position:relative;
  top:-5rem;
}

  

`;

export const Culture = styled(Image)`
  aspect-ratio:3.724 / 1;
  width:1780px;
  height:478px;
  text-align: center;
  line-height: 1.2;
  display:block;
  margin:0;
  color: #2f60de;
  height:100%;
  width:100%;
    margin:auto;
  z-index: 1; /* Ensure text is above the background */
  @media (min-width:480px){
    width:80%;
    height:80%;
  }
    @media(min-width:768px){
      width:100%;
      height:100%;
    }
  
`;
