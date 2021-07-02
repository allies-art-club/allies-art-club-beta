import styled from 'styled-components';

const ClipboardContainer = styled.div`
    position:relative;
    width: 95%;
    min-height: calc(100vh - 0.5*100vw*0.5627329192546584 - 148px);
  @media(min-width:421px){
    min-height: calc(100vh - 0.5*100vw*0.5627329192546584 - 148px);
  }
  @media(min-width:768px){
    min-height: calc(100vh  - 464.83px);
    width:70%;
  }
  @media(min-width:1300px){
    min-height: calc(100vh  - 494.83px);
  }
    @media(max-width:767px){
        left: 2.5%;
    }
    margin:0px auto;
    #clipboardWrap {
        min-height: calc(100vh - 0.5*100vw*0.5627329192546584 - 148px);
        @media(min-width:421px){
            min-height: calc(100vh - 0.5*100vw*0.5627329192546584 - 148px);
        }
        @media(min-width:768px){
            min-height: calc(100vh  - 464.83px);
        }
        @media(min-width:1300px){
            min-height: calc(100vh  - 494.83px);
        }
    }
`
const ClipboardWrapper=styled.div`
    width:100%;
    background-color: white;
    padding: 20px 10px;
    border-radius:0;
    box-shadow:0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 10px #FF66C4, 0 0 12px #FF66C4, 0 0 32px #FF66C4;

    @media(min-width:768px){
        border-radius: 50px 0 0 0 ;
        padding: 30px 40px;
    }
    z-index:3;
`

const ClipboardIcon = styled.img`
    position:absolute;
    top:0px;
    left:-10px;
    width:30px;
    height:30px;
    @media(min-width:421px){
        left:-10px;
        width:40px;
        height:40px;
    }
    @media(min-width:768px){
        left: -15px;
        width: 50px;
        height: 50px;

    }
    @media(min-width:1025px){
        left:-35px;
        width:90px;
        height:90px;
    }
`
const Content = styled.div`
    margin:0;
    padding:0;
    width:100%;
`

export {ClipboardContainer,ClipboardWrapper,ClipboardIcon,Content}