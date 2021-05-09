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
    padding:20px 40px;
    width: 80%;
    margin:40px auto;
    background-color: white;
    min-height: calc(100vh - 120px - 0.5*100vw*0.5627329192546584 - 57px);
    -webkit-animation: ${boxGlowMob} 1.5s ease-in-out infinite alternate;
    -moz-animation: ${boxGlowMob} 1.5s ease-in-out infinite alternate;
    animation: ${boxGlowMob} 1.5s ease-in-out infinite alternate;
    border-radius: 50px;

    @media(min-width:768px){
        -webkit-animation: ${boxGlow768} 1.5s ease-in-out infinite alternate;
        -moz-animation: ${boxGlow768} 1.5s ease-in-out infinite alternate;
        animation: ${boxGlow768} 1.5s ease-in-out infinite alternate;
    }
`
const ClipboardIcon = styled.img`
    position:absolute;
    top:0px;
    left: -5px;
    width: 50px;
    height: 50px;
    @media(min-width:768px){
        left:-20px;
        width:100px;
        height:100px;
    }
`

export {ClipboardContainer,ClipboardIcon}