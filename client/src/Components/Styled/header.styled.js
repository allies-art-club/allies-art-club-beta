import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {theme} from './theme/theme.js';
//Header
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
        z-index:20;
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
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    
    box-shadow:${props=>props.open?`0px 0px 6px 2px ${theme.blue}`:`0px 0px 6px 2px ${theme.blue}`};

}
&:after {
    transform: translate(-1.1rem,-0.1rem) rotate(-45deg);
}
&:before {
    transform: translate(-1.1rem,-0.1rem) rotate(45deg);
}

`
//box glow nav
const HeaderNavList = styled.ul`
    list-style:none;
    margin:0;
    @media(max-width:767px){
        position: absolute;
        padding: 25px;
        background-color:white;
        top: 100px;
        display:${props=>props.open?'flex':'none'};
        flex-direction: column;
        box-shadow:7px 0 7px ${theme.pink};
    }
    @media(min-width:768px){
        display:flex;
        justify-content:space-around;
    }
`
const HeaderNavListElement = styled.li`
    text-decoration: none;
    position:relative;

`
const BurgerMenu = styled.button`
    position:absolute;
    top: 38%;
    left: 8%;
    transform: translateY(-50%);
    width: 2.2rem;
    height: 2.2rem;
    border: none;
    padding:0;
    @media(min-width: 768px){
        display: none;
    }
`

//boxGlowClosed
const BurgerLayers = styled.span`
    display: block;
    margin: auto;
    width: 1.6rem;
    height: 4px;
    background-color:white;
    box-shadow:${props=>props.open?`0px 0px 6px 2px ${theme.blue}`:`0px 0px 6px 2px ${theme.blue}`};
    &:after,&:before {
        position: absolute;
        content:'';
        display: block;
        width: 1.6rem;
        height: 4px;
        background-color:white;
        box-shadow:${props=>props.open?`0px 0px 6px 2px ${theme.blue}`:`0px 0px 6px 2px ${theme.blue}`};
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

//START HERE TOMORROW TEXT SHADOW ALL SIDES
const activeClassName = 'nav-active-item';

const NavMainCategory = styled(NavLink).attrs({activeClassName})`
    text-decoration: none;
    text-shadow:${props=>props.nav?`1px 1px 0 ${theme.blue}, -1px -1px 0 ${theme.blue},1px -1px 0 ${theme.blue}, -1px 1px 0 ${theme.blue}, 0px 0px 1rem ${theme.blue}`:`1px 1px 0 ${theme.yellow},1px -1px 0 ${theme.yellow}, -1px 1px 0 ${theme.yellow}, -1px -1px 0 ${theme.yellow}, 0px 0px 1rem ${theme.yellow}`};

    text-decoration:none;
    @media(min-width:768px){
        padding-bottom: 20px;
    }
    &.${activeClassName},&:hover{
        text-shadow: 0px 0px 1rem ${theme.pink};
    }
    color:white;
    line-height: 2.2rem;
    font-size: 2.2rem;
    font-family: Teko, cursive;
    text-transform: uppercase;
    position: ${props=>props.nav?'static':'absolute'};
    top: ${props=>props.nav?'auto':'38%'};
    right: ${props=>props.nav?'auto':'8.25%'};
    transform: ${props=>props.nav?'auto':'translateY(-50%)'};
    @media(max-width:480px){
        font-size ${props=>props.nav?'2rem':'1.5rem'};
    }
    @media(min-width:768px){
        font-size: 2.2rem;
    }
`
const NavLinkLogo = styled(NavLink)`
&:-webkit-any-link {
    
    text-decoration:none;

}
`

const Figure = styled.div`
    width:100%;
    text-align:center;
    margin:5px 0px 30px;
`
const Slogan = styled.p`
    width: 100%;
    background-color: rgba(255,102,196,0.65);
    text-align: center;
    color: white;
    height: 2rem;
    line-height:2rem;
    margin:0px;
`
const HeaderLogo = styled.h1`
    font-weight: 100;
    display:block;
    margin:auto;
    text-decoration:none;
    font-family: nickainley;
    color: white;
    font-size: 58.8px;
    line-height:49px;
    width: 200px;
    text-shadow: 0.5px 0.5px 0px ${theme.pink}, -0.5px -0.5px 0px ${theme.pink},0.5px -0.5px 0px ${theme.pink}, -0.5px 0.5px 0px ${theme.pink}, 0px 0px 1.5rem ${theme.pink}, 0px 0px 2.5rem ${theme.pink},  0px 0px 0.2rem ${theme.pink};

    @media(min-width:421px){
        font-size: 4.2rem;
        line-height:3.5rem;
        width: 200px;
        text-shadow: 0.5px 0.5px 0px ${theme.pink}, -0.5px -0.5px 0px ${theme.pink},0.5px -0.5px 0px ${theme.pink}, -0.5px 0.5px 0px ${theme.pink}, 0px 0px 1.5rem ${theme.pink}, 0px 0px 2.5rem ${theme.pink},  0px 0px 0.2rem ${theme.pink};
    }
    @media(min-width:768px){
        width:364px;
        font-size: 107px;
        text-shadow: 1px 1px 0px ${theme.pink}, -1px -1px 0px ${theme.pink},1px -1px 0px ${theme.pink}, -1px 1px 0px ${theme.pink}, 0px 0px 2rem ${theme.pink}, 0px 0px 5rem ${theme.pink},  0px 0px 0.2rem ${theme.pink};
        line-height:84px;
    }
`
export {HeaderContainer, HeaderNav,BurgerMenu,BurgerLayers,HeaderNavListWrap, Cross,HeaderNavList, HeaderNavListElement, DonateLinkWrapper,NavMainCategory,NavLinkLogo,HeaderLogo,Figure,Slogan};