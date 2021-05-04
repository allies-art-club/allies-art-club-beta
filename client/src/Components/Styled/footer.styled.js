import styled from 'styled-components';

const FooterElementWrapper=styled.div`
  width: 50%;
  @media(min-width:768px){
    width:${props=>props.size}%;
  }
  border-right: 3px solid white;
`
const Caption = styled.figcaption`
  display:inline-block;
  padding: 0px 5px;
  font-size: 0.75rem;
  max-width: 60%;
  @media(min-width:768px){
    padding: 0px 10px;
    font-size: 1rem;
  }
  color: white;
  p {
    margin:0px;
  }
  span {
    display: inline-block;
    float: left;
  }
`
const Figure =styled.figure`
  display: flex;
  justify-content:space-around;
  align-items: center;
  margin: 0px;
`
const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background-color: #FF66C4;
    height: 120px;
  @media(min-width:768px){
    height: 170px;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow:hidden;

  ${FooterElementWrapper}:nth-child(2){
    display: none;
    height: 140px;
    @media(min-width:768px){
      display:block;
    }
  }
  ${FooterElementWrapper}:nth-child(3){
      border:none;
  }
`
const AwtfLogo= styled.img`
  border-radius: 50%;
`


const CenterParagraph= styled.p`
    position:absolute;
    top:50%;
    right:0px;
    left:0px;
    color: white;
    font-size: 20px;
    margin: auto;
    text-align: center;
    display: block;
    transform: translateY(-50%);
`

const Icon =styled.img`
  display:inline-block;
  line-height:120px;
  
  width: ${props=>props.left?"80":"40"}px;
  @media(min-width: 481px){
    
    width: ${props=>props.left?"120":"50"}px;
  }
  @media(min-width:768px){
    width: ${props=>props.left?"140":"50"}px;
  }
`
export {FooterContainer,AwtfLogo,FooterElementWrapper,Figure,Caption,CenterParagraph,Icon};
