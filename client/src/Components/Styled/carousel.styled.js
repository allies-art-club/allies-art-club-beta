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
const CarouselImage = styled.img`
    position: absolute;
    border-radius: 50%;
    z-index: 10;
    width:180px;
    height:180px;
    top:50px;
    left: ${props=>{
        return props.index*100+18;
    }
    }%;
    box-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 10px #FF66C4, 0 0 12px #FF66C4, 0 0 32px #FF66C4;

    transition-duration: ${props=>{
        if((props.direction==='left'&& props.index===-1)||(props.direction==='right'&&props.index===props.length)){
            return 'none';
        }
        else{
            return '0.5s'
        }
    }};
    @media(min-width:480px){
        top:70px;
        width:260px;
        height:260px;
        left: ${props=>{
            return props.index*100+18;
        }
        }%;
    }
    @media(min-width:768px){
        top: 50px;
        width: 400px;
        height: 400px;
        box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF66C4, 0 0 30px #FF66C4, 0 0 40px #FF66C4;
        left: ${props=>{
            return props.index*100+10.5;
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
    z-index:19;
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