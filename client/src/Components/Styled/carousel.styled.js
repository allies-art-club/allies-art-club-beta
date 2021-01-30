import styled, {keyframes} from 'styled-components';

//Carousel elements
const CarouselContainer =styled.div`
    position:relative;
    width: 80%;
    margin:auto;
`
const Slide = styled.div`
    position: relative;
    width: 700px;
    height: 700px;
    border-radius:50%;
    margin: auto;
    overflow: hidden;
`
const boxGlow =  keyframes`
    from {
        box-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 8px #FF66C4, 0 0 14px #FF66C4, 0 0 16px #FF66C4,0 0 50px #FF66C4;
    }
    to {
        box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF66C4, 0 0 30px #FF66C4, 0 0 40px #FF66C4,  0 0 100px #FF66C4;
    }
`
const CarouselImage = styled.img`
    position: absolute;
    top: 75px;
    width: 550px;
    height: 550px;
    border-radius: 50%;
    z-index: 10;

    -webkit-animation: ${boxGlow} 1.5s ease-in-out infinite alternate;
    -moz-animation: ${boxGlow} 1.5s ease-in-out infinite alternate;
    animation: ${boxGlow} 1.5s ease-in-out infinite alternate;
    left: ${props=>{
        return props.index*100+11;
    }
    }%;
    transition-duration: ${props=>{
        if((props.direction==='left'&& props.index===-1)||(props.direction==='right'&&props.index===2)){
            return 'none';
        }
        else{
            return '0.5s'
        }
    }};
`
const ChevronWrapper = styled.div`
    top:-400px;
    position:relative;
    margin:auto;
    display: flex;
    width: 900px;
    justify-content: space-between;
    z-index:100;
`
const Arrow= styled.img`
    transform: rotate(${props=>props.direction==='right'?'180deg': 'none'});
    width: 150px;
`


export {CarouselContainer,Slide,CarouselImage,ChevronWrapper,Arrow};