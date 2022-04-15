import styled from 'styled-components';

const FooterElementWrapper=styled.div`
  width: 50%;
  @media(min-width:768px){
    width:${props=>props.size}%;
  }
  border-right: 3px solid white;
`

const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background-color: rgba(255,102,196,0.65);
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
const Caption = styled.figcaption`
  display:inline-block;
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
    display: inline-block;
    float: left;
  }
`
const Icon =styled.img`
  display:inline-block;
  line-height:120px;
  width: ${props=>props.left?"50":"25"}px;
  @media(min-width:320px){
    width: ${props=>props.left?"60":"25"}px;
  }
  @media(min-width: 481px){
    
    width: ${props=>props.left?"100":"30"}px;
  }
  @media(min-width:1025px){
    width: ${props=>props.left?"140":"35"}px;
  }
  
`
const Figure =styled.div`
  margin: 0px;
  padding:auto;
  display:flex;
  justify-content:flex-start;
  @media(min-width:768px){
    justify-content:space-around;

  }
  align-items:center;
  ${Icon}{
    margin-left: 0.5rem;
  }
`

const AwtfLogo= styled.img`
  border-radius: 50%;
`

const CenterParagraph= styled.p`
    position:absolute;
    width:26%;
    top:50%;
    right:0px;
    left:0px;
    color: white;
    font-size: 20px;
    margin: auto;
    text-align: center;
    display: block;
    transform: translateY(-50%);
    font-size:0.8rem;
    @media(min-width:1025px){
      font-size:1rem;
    }
`
const IconWrapper=styled.div`
  display:flex;
  justify-content:space-evenly;
  align-items: center;
`
const FooterParagraph=styled.p`
  color:white;
  text-align:center;
  font-size: 0.5rem;
  margin: 5px 0;
  transform:${props=>props.right?"translateY(-5px)":"none"};
  @media(min-width:421px){
    transform:${props=>props.right?"translateY(-10px)":"none"};
  }
  @media(max-width:767px){
    word-break: break-word;
  }
  @media(min-width:360px){
    font-size:0.8rem;
  }
  @media(min-width:768px){
    display:${props=>props.mobile?"none":"block"};
  }
  @media(min-width:1025px){
    font-size:1rem;
  }
`
const FooterLink = styled.a`
  text-decoration:none;
  color:white;
`

export {FooterContainer,AwtfLogo,FooterElementWrapper,Figure,Caption,CenterParagraph,IconWrapper,Icon,FooterParagraph,FooterLink};