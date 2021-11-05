import styled from 'styled-components';
import {boxGlow,theme} from './theme/theme.js'
import {NavLink} from 'react-router-dom'

//Carousel elements
const CarouselContainer =styled.div`
    position:relative;
    width: 100%;
    height:inherit;
    margin:auto;
    top:50%;
    margin-top:${props=>props.home?"4rem":"1rem"};
`
const Slide = styled.div`
    position: relative;
    width:${props=>props.square?"100%":"280px"};
    height:${props=>props.square?"200px":"280px"};
    @media(min-width: 481px){
        width:${props=>props.square?"100%":"400px"};
        height:${props=>props.square?"300px":"400px"};;
    }
    @media(min-width: 768px){
        width: ${props=>props.square?"100%":"500px"};
        height: ${props=>props.square?"350px":"500px"};
    }
    border-radius:${props=>props.square?"0%":"50%"};
    margin: auto;
    overflow: hidden;
`
const CarouselImage = styled.img`
    position:relative;
    object-fit:${props=>props.square?"cover":"auto"};
    height:${props=>props.square?"100%":"auto"};
    width:${props=>props.square?"auto":"100%"};
    border-radius:${props=>props.square?"0%":"50%"};
    margin:auto;
    left:50%;
    transform:translateX(-50%);
`
const ChevronWrapper = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    margin:auto;
    display: flex;
    height:0px;
    justify-content: space-between;
    width: 280px;

    transform: translate(-50%,-18.5px);
    @media(min-width:320px){
        width: ${props=>props.square?"310px":"280px"};
    }
    @media(min-width:481px){
        width: ${props=>props.square?"450":"400"}px;
        transform: translate(-50%,-26.5px);
    }
    @media(min-width:768px){
        width: ${props=>props.square?"540px":"600px"};
        transform: translate(-50%,-40px);
    }
    @media(min-width:1024px){
        width: ${props=>props.square?"700px":"600px"};
    }

`
const Arrow= styled.img`
    transform: rotate(${props=>props.direction==='right'?'180deg': 'none'});
    width:35px;
    height:37px;
    cursor: pointer;
    z-index:10;
    @media(min-width:481px){
        width:50px;
        height:53px;
    }
    @media(min-width:768px){
        width: 75px;
        height:80px;
    }

`
const NavClick = styled(NavLink)`
    pointer-events:${props=>props.square?"none":"auto"};
    position: absolute;
    display:block;
    border-radius: ${props=>props.square?"0%":"50%"};
    width:${props=>props.square?"100%":"180px"};
    height:${props=>props.square?"130px":"180px"};
    left: ${props=>{
        if(props.square){
            return props.index*100;
        }
        return props.index*100+18;
    }
    }%;
    box-shadow: ${props=>props.square?"none":boxGlow};
    &:hover {
        div {
            background: ${theme.pink};
        }
    }
    transition-duration: ${props=>{
        if((props.direction==='left'&& props.index===-1)||(props.direction==='right'&&props.index===props.length)){
            return 'none';
        }
        else{
            return '0.5s'
        }
    }};
    @media(min-width:320px){
        height:${props=>props.square?"160px":"180px"};
    }
    @media(min-width:481px){
        width:${props=>props.square?"100%":"260px"};
        height:${props=>props.square?"200px":"260px"};
        left: ${props=>{
            if(props.square){
                return props.index*100;
            }
            return props.index*100+18;
        }
        }%;
    }
    @media(min-width:768px){
        width: ${props=>props.square?"100%":"400px"};
        height: ${props=>props.square?"250px":"400px"};
        
        box-shadow: ${props=>props.square?"none":"0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF66C4, 0 0 30px #FF66C4, 0 0 40px #FF66C4"};
        left: ${props=>{
            if(props.square){
                return props.index*100;
            }
            return props.index*100+10.5;
        }
        }%;
    }
    @media(min-width:1024px){
        height: ${props=>props.square?"360px":"400px"};
    }

    top: 50%;
    transform:translateY(-50%);
`
const Figure = styled.figure`
    width:100%;
    height:100%;
    border-radius:${props=>props.square?"0%":"50%"};
    position:relative;
    margin:0;
    &:hover {
        figcaption {
            display:block
        }
    }
`
const FigCaption = styled.figcaption`
    display:none;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:100%;
    height:100%;
    background:rgba(255,255,255,0.80);
    z-index:9;
    border-radius:${props=>props.square?"0%":"50%"};
    color: ${theme.pink};
`
const CaptionContent = styled.span`
    font-family:nickainley;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    display:block;
    width:100%;
    transform: translate(-50%,-50%);
    text-align:center;
`


export {CarouselContainer,Slide,CarouselImage,ChevronWrapper,Arrow,NavClick,Figure,FigCaption,CaptionContent};