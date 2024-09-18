import styled from "styled-components";
import Link from 'next/link'
import Image from 'next/image'
export const Container = styled.div`

@media(max-width:767px){
  display:${(props)=>props.$mobile?"flex":"none"};
  align-items:center;
  justify-content:flex-end;
}
@media(min-width:768px){
  display:${(props)=>props.$mobile?"none":"flex"};
  width: 100%;
  flex:1 0 0;
  z-index:20000;
}
`;
export const BadgeLink = styled(Link)`
display:block;
margin:auto auto;
width:5rem;
height:5rem;
@media(min-width:768px){
  position:relative;
  display:block;
  width:7.5rem;
  height:7.5rem;
  right:-2rem;
}
@media(min-width:1025px){
  right:-4rem;
}
`
export const BadgeImage = styled(Image)`
    width:5rem;
    height:5rem;
    aspect-ratio:1 / 1;
  @media(min-width:768px){
    width:7.5rem;
    height:7.5rem;
    aspect-ratio:1 / 1
  }
`
export const BadgeBackground = styled.div`
  background-repeat: no-repeat;
  background-size: contain; /* ensure that the entire background image is visible within the container, without any part of it being clipped */
  display: flex;
  width:5rem;
  position:relative;
  left:2.5rem;
  transform: rotate(+5deg);

  @media (min-width: 480px) {
    padding: 5px 10px; /* Further adjust padding for small screens */
  }
  @media (min-width: 768px) {
    padding: 10px 20px; /* Further adjust padding for tablets */
  }
  @media (min-width: 1024px) {
    padding: 15px 30px; /* Adjust padding for medium-sized screens */
    max-width: 15rem;
    margin-left: -5rem;
  }
  @media (min-width: 1300px) {
    margin-top: -16rem;
    margin-bottom: 8rem;
    margin-left: 12rem;
  }
`;
