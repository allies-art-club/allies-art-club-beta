import styled, {keyframes} from 'styled-components';
import {NavLink} from 'react-router-dom'
//Header
const boxGlowNav = keyframes`
    from {
        box-shadow: 3px 0px 0px #FF66C4;
    }
    to {
        box-shadow:  4px 0px 1px #FF66C4, 6px 0px 2px #FF66C4, 8px 0px 3px #FF66C4, 9px 0 5px #FF66C4;
    }
`
const activeClassName = 'nav-active-item';

const textGlow = keyframes`
    from {
        text-shadow: 1px 1px 5px #38B6FF,1px -1px 5px #38B6FF,-1px 1px 5px #38B6FF,-1px -1px 5px #38B6FF;
    }
    to {
        text-shadow:  0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF;
    }
`
const donateGlow = keyframes`
from {
    text-shadow: 1px 1px 5px #FFF859,1px -1px 5px #FFF859,-1px 1px 5px #FFF859,-1px -1px 5px #FFF859;
}
to {
    text-shadow:  0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF;
}
`
const boxGlowClosed = keyframes`
    from {
        box-shadow: 1px 1px 5px #38B6FF,1px -1px 5px #38B6FF,-1px 1px 5px #38B6FF,-1px -1px 5px #38B6FF;
    }
    to {
        box-shadow:  0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF;
    }
`
const boxGlowOpened = keyframes`
    from {
        box-shadow: 1px 1px 5px #FF66C4,1px -1px 5px #FF66C4,-1px 1px 5px #FF66C4,-1px -1px 5px #FF66C4;
    }
    to {
        box-shadow:  0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF66C4, 0 0 35px #FF66C4
    }
`
const HeaderContainer = styled.header`
`
const HeaderNav = styled.nav`
    position:relative;
`
const HeaderNavListWrap= styled.div`
@media(max-width:767px){
    display: ${props=>props.open?'block':'none'};
    position:fixed;
    top:0;
    left:0px;
    background-color: rgba(0,0,0,0.5); 
    width: 100vw;
    height:100vh;
    overflow:hidden;
    z-index:1000;
}
 

`
const Cross = styled.button`
height: 2.2rem;
width: 2.2rem;
position: absolute;
top:  115px;
left:200px;
padding:0px;
background:none;
border: none;
@media(min-width:768px){
    display: none;
}
&:after,&:before {
    content: '';
    position:absolute;
    background-color: white;
    width:2.2rem;
    height:3px;
    transform ;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-animation:${props=>props.open?boxGlowOpened:boxGlowClosed} 1.5s ease-in-out infinite alternate;
    -moz-animation: ${props=>props.open?boxGlowOpened:boxGlowClosed} 1.5s ease-in-out infinite alternate;
    animation: ${props=>props.open?boxGlowOpened:boxGlowClosed} 1.5s ease-in-out infinite alternate;

}
&:after {
    transform: translate(-1.1rem,-0.1rem) rotate(-45deg);
}
&:before {
    transform: translate(-1.1rem,-0.1rem) rotate(45deg);
}

`

const CrossSpan = styled.span
const HeaderNavList = styled.ul`
    list-style:none;
    @media(max-width:767px){
        position: absolute;
        padding: 25px;
        background-color:white;
        top: 100px;
        display:${props=>props.open?'flex':'none'};
        flex-direction: column;
        z-index:101;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        transition: all 0.5s;
        -webkit-animation:${boxGlowNav} 1.5s ease-in-out infinite alternate;
        -moz-animation: ${boxGlowNav} 1.5s ease-in-out infinite alternate;
        animation: ${boxGlowNav} 1.5s ease-in-out infinite alternate;
    }
    @media(min-width:768px){
        display:flex;
        justify-content:space-around;
        padding-top: 25px;
    }
`
const HeaderNavListElement = styled.li`
    text-decoration: none;

`
const BurgerMenu = styled.button`
    position:absolute;
    margin: 10px;
    width: 2.2rem;
    height: 2.2rem;
    border: 1px solid white;
    padding:0;
    @media(min-width: 768px){
        display: none;
    }
`


const BurgerLayers = styled.span`
    display: block;
    margin: auto;
    width: 1.6rem;
    height: 4px;
    background-color:white;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-animation:${props=>props.open?boxGlowOpened:boxGlowClosed} 1.5s ease-in-out infinite alternate;
    -moz-animation: ${props=>props.open?boxGlowOpened:boxGlowClosed} 1.5s ease-in-out infinite alternate;
    animation: ${props=>props.open?boxGlowOpened:boxGlowClosed} 1.5s ease-in-out infinite alternate;
    &:after,&:before {
        position: absolute;
        content:'';
        display: block;
        width: 1.6rem;
        height: 4px;
        background-color:white;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        transition: all 0.5s;
        -webkit-animation:${props=>props.open?boxGlowOpened:boxGlowClosed} 1.5s ease-in-out infinite alternate;
        -moz-animation: ${props=>props.open?boxGlowOpened:boxGlowClosed} 1.5s ease-in-out infinite alternate;
        animation: ${props=>props.open?boxGlowOpened:boxGlowClosed} 1.5s ease-in-out infinite alternate;
    }
    &:after {

        transform: translateY(0.7rem);
    }
    &:before {
        transform: translateY(-0.7rem);
    }
`
const DonateLinkWrapper = styled.div`
    position: relative;

`
const NavLinkStyled = styled(NavLink).attrs({activeClassName})`
    text-decoration: none;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-animation:${props=>props.nav?textGlow:donateGlow} 1.5s ease-in-out infinite alternate;
    -moz-animation: ${props=>props.nav?textGlow:donateGlow} 1.5s ease-in-out infinite alternate;
    animation: ${props=>props.nav?textGlow:donateGlow} 1.5s ease-in-out infinite alternate;
    &.${activeClassName}{
        color: red;
    }
    font-size: 2rem;
    text-decoration:none;
    color:white;
    line-height: 3rem;
    font-family: 'Big Shoulders Text', cursive;
    text-transform: uppercase;
    position: ${props=>props.nav?'static':'absolute'};
    top: ${props=>props.nav?'auto':'50%'};
    right: ${props=>props.nav?'auto':'0'};
    transform: ${props=>props.nav?'auto':'translateY(-50%)'};
    @media(max-width:480px){
        font-size ${props=>props.nav?'2rem':'1.5rem'};
    }
`
const NavLinkLogo = styled(NavLink)`
    height:0px;
`

const Logo = styled.img`
    width:50%;
    @media(min-width:768px){
        width:364px;
    }
`
const Figure = styled.figure`
    width:100%;
    text-align:center;
    margin:0;
`
const Slogan = styled.p`
    width: 100%;
    background-color: #FF66C4;
    text-align: center;
    color: white;
    height: 2rem;
    line-height:2rem;
    margin:0px;
`
export {HeaderContainer, HeaderNav,BurgerMenu,BurgerLayers,HeaderNavListWrap, Cross,HeaderNavList, HeaderNavListElement, DonateLinkWrapper,NavLinkStyled,NavLinkLogo,Logo, Figure,Slogan};