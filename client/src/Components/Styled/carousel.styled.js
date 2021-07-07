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
    margin-top:4rem;
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
    width:100%;
    border-radius:50%;
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
    @media(min-width:480px){
        width: 400px;
        transform: translate(-50%,-26.5px);
    }
    @media(min-width:768px){
        width: 600px;
        transform: translate(-50%,-40px);
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
position: absolute;
display:block;
border-radius: 50%;
width:180px;
height:180px;
top:50px;
left: ${props=>{
    return props.index*100+18;
}
}%;
box-shadow: ${boxGlow};
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
const Figure = styled.figure`
    width:100%;
    height:100%;
    border-radius:50%;
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
    border-radius:50%;
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