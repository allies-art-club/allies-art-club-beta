"use client"
import styled from 'styled-components';

const FooterElementWrapper=styled.div`
  width: 50%;
  @media(min-width:768px){
    width:${props=>props.$size}%;
  }
  border-right: 3px solid white;
`

const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background-color: rgba(255,102,196,0.65);
  height: 150px;
  @media(min-width:768px){
    height: 170px;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow:hidden;
  ${FooterElementWrapper}:nth-child(2){
    display: none;
    @media(min-width:768px){
      display:block;
    }
    height:100px;
    @media(min-width:1025px){

      height: 140px;
    }
  }
  ${FooterElementWrapper}:nth-child(3){
      border:none;
  }
`
const TextContainer=styled.div`
  display:flex;
  align-items:space-around;
  flex-direction:column;
  height:100%;

`
const Caption = styled.figcaption`
  display:block;
  padding: 0px 5px;
  font-size: 0.75rem;
  max-width: 70%;
  margin:auto;
  @media(min-width:768px){
    padding: 0px 10px;
    font-size: 1rem;
    display:none;
  }
  color: white;
  span {
    display: block;
  }
`
const Icon =styled.img`
  display:inline-block;
  line-height:120px;
  width: ${props=>props.$left?"50":"25"}px;
  @media(min-width:320px){
    width: ${props=>props.$left?"60":"25"}px;
  }
  @media(min-width: 481px){
    
    width: ${props=>props.$left?"75":"30"}px;
  }
  @media(min-width: 768px){
    
    width: ${props=>props.$left?"100":"30"}px;
  }
  @media(min-width:1025px){
    width: ${props=>props.$left?"140":"35"}px;
  }
  
`
const Figure =styled.div`
  margin: 0px;
  padding:auto;

  ${Icon}{
    margin-left: 0.5rem;
  }
`

const AwtfLogo= styled.img`
  border-radius: 50%;
`

const CenterParagraph= styled.p`
    color: white;
    font-size: 20px;
    margin: auto;
    text-align: center;
    display: block;
    font-size:0.7rem;
`
const IconWrapper=styled.div`
  display:flex;
  justify-content:space-evenly;
  align-items: center;
`
const FooterParagraph=styled.p`
  color:white;
  text-align:${props=>props.$bottom?"left":"center"};
  font-size: 0.5rem;
  margin: 5px 0;
  transform:${props=>props.$right?"translateY(-5px)":"none"};
  @media(min-width:421px){
    transform:${props=>props.$right?"translateY(-10px)":"none"};
  }
  @media(max-width:767px){
    word-break: break-word;
  }
  @media(min-width:360px){
    font-size:0.8rem;
  }
  @media(min-width:768px){
    display:${props=>props.$mobile?"none":"block"};
  }
`
const FooterLink = styled.a`
  text-decoration:none;
  color:white;

  `
const ImageContainer=styled.div`
  display: flex;
  justify-content:space-around;
`
export {FooterContainer,AwtfLogo,FooterElementWrapper,Figure,Caption,CenterParagraph,IconWrapper,Icon,FooterParagraph,FooterLink,ImageContainer,TextContainer};