import styled from 'styled-components';

const CarouselContainer =styled.div`
    width: 80%;
    border: 2px solid yellow;
    margin:auto;
`
const Slide = styled.div`
    width: 50%;
    margin: auto;
    overflow:hidden;
    height: 400px;
    position: relative;
`
const CarouselImage = styled.img`
    position: absolute;
    width: 100%;
    left: ${props=>{
        return props.index*100;
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


export {CarouselImage,CarouselContainer,Slide};