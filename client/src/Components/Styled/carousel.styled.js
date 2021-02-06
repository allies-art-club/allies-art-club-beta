import styled, {keyframes} from 'styled-components';

//Carousel elements
const CarouselContainer =styled.div`
    position:relative;
    width: 100%;
    height:inherit;
    margin:auto;
    top:50%;
`
const Slide = styled.div`
    position: relative;
    width:280px;
    height:280px;
    @media(min-width: 481px){
        width:400px;
        height:400px;
    }
    @media(min-width: 768px){
        width: 500px;
        height: 500px;
    }
    border-radius:50%;
    margin: auto;
    overflow: hidden;
`
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
const CarouselImage = styled.img`
    position: absolute;
    border-radius: 50%;
    z-index: 10;
    width:200px;
    height:200px;
    top:40px;
    left: ${props=>{
        return props.index*100+14;
    }
    }%;
    -webkit-animation: ${boxGlowMob} 1.5s ease-in-out infinite alternate;
    -moz-animation: ${boxGlowMob} 1.5s ease-in-out infinite alternate;
    animation: ${boxGlowMob} 1.5s ease-in-out infinite alternate;

    transition-duration: ${props=>{
        if((props.direction==='left'&& props.index===-1)||(props.direction==='right'&&props.index===2)){
            return 'none';
        }
        else{
            return '0.5s'
        }
    }};
    @media(min-width:480px){
        top:50px;
        left:50px;
        width:300px;
        height:300px;
        left: ${props=>{
            return props.index*100+12;
        }
        }%;
    }
    @media(min-width:768px){
        top: 25px;
        width: 450px;
        height: 450px;
        -webkit-animation: ${boxGlow768} 1.5s ease-in-out infinite alternate;
        -moz-animation: ${boxGlow768} 1.5s ease-in-out infinite alternate;
        animation: ${boxGlow768} 1.5s ease-in-out infinite alternate;
        left: ${props=>{
            return props.index*100+5;
        }
        }%;
    }
`
const ChevronWrapper = styled.div`
    position:absolute;
    transform: translate(-50%,-50%);
    top:50%;
    left:50%;
    margin:auto;
    display: flex;
    justify-content: space-between;
    z-index:100;
    width: 280px;
    @media(min-width:480px){
        width: 400px;
    }
    @media(min-width:768px){
        width: 600px;
    }

`
const Arrow= styled.img`
    transform: rotate(${props=>props.direction==='right'?'180deg': 'none'});
    width:35px;
    @media(min-width:481px){
        width:50px;
    }
    @media(min-width:768px){
        width: 75px;
    }
`


export {CarouselContainer,Slide,CarouselImage,ChevronWrapper,Arrow};