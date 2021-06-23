import styled, {keyframes} from 'styled-components';

const boxGlowMob=  keyframes`
    from {
        box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 5px #FF66C4, 0 0 10px #FF66C4, 0 0 12px #FF66C4,0 0 16px #FF66C4;
    }
    to {
        box-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 10px #FF66C4, 0 0 12px #FF66C4, 0 0 16px #FF66C4,  0 0 32px #FF66C4;
    }
`
const boxGlow768 =  keyframes`
    from {
        box-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 8px #FF66C4, 0 0 14px #FF66C4, 0 0 16px #FF66C4,0 0 50px #FF66C4;
    }
    to {
        box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF66C4, 0 0 30px #FF66C4, 0 0 40px #FF66C4,  0 0 100px #FF66C4;
    }
`
const ClipboardContainer = styled.div`
    position:relative;
    width: 95%;
    @media(max-width:767px){
        min-height: calc(100vh - 120px - 0.5*100vw*0.5627329192546584 - 57px);
        left: 2.5%;
    }
    @media(min-width:768px){
        width:70%;
    }
    margin:40px auto;
    @media(min-width:768px){
        min-height: calc(100vh - 342.828px - 170px - 40px);


    }
`
const ClipboardWrapper=styled.div`
    width:100%;
    background-color: white;
    padding: 20px 10px;
    border-radius:0;
    @media(min-width:768px){
        border-radius: 50px;
        padding: 20px 60px;
    }
    z-index:3;
`
const GlowingColumn = styled.div`
    height:100%;
    width: 100%;
    @media(min-width:768px){
        border-radius: 50px;
        width:100px;
    }
    -webkit-animation: ${boxGlowMob} 1.5s ease-in-out infinite alternate;
    -moz-animation: ${boxGlowMob} 1.5s ease-in-out infinite alternate;
    animation: ${boxGlowMob} 1.5s ease-in-out infinite alternate;
    @media(min-width:768px){
        -webkit-animation: ${boxGlow768} 1.5s ease-in-out infinite alternate;
        -moz-animation: ${boxGlow768} 1.5s ease-in-out infinite alternate;
        animation: ${boxGlow768} 1.5s ease-in-out infinite alternate;
    }
`
const GlowingColumnContainer=styled.div`
    position:absolute;
    display:flex;
    left:0;
    top:0;
    z-index:-1;
    justify-content:space-between;
    height:100%;
    width:100%;
    @media(max-width:767px){
        ${GlowingColumn}:nth-child(2){
            display:none;
        }

    }
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
        left:-20px;
        width:100px;
        height:100px;
    }
`
const Content = styled.div`
    margin:0;
    padding:0;
    width:100%;
`

export {ClipboardContainer,ClipboardWrapper,ClipboardIcon,GlowingColumn,GlowingColumnContainer,Content}