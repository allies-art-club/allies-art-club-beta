import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {textGlow} from './theme/theme.js';
import {HeaderNavListElement}from '../Styled/header.styled.js';
const SideNavWrapper = styled.div`
    display:${props=>props.visible?"block":"none"};
    width:${props=>props.menu?"auto":"15%"};
    position:relative;
    @media(min-width:768px){
        display:${props=>props.menu?"none":"block"};
        position:absolute;
        left:${props=>props.menu?'0':'-19%'};
        top:${props=>props.menu?'50px':'0'};

        ${HeaderNavListElement}:hover & {
            display: block;
        }
    }
    z-index: 10;
`

const SideNavList = styled.ul`
    padding:0;
`


const SideNavListElement=styled.li`
    list-style-type: none;
    width:100%;
    margin-bottom:1rem;
`
const activeClassName = 'nav-active-item';
const NavLinkSide = styled(NavLink).attrs({activeClassName})`
    display:block;
    width:100%;
    text-decoration: none;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-animation:${textGlow} 1.5s ease-in-out infinite alternate;
    -moz-animation: ${textGlow} 1.5s ease-in-out infinite alternate;
    animation: ${textGlow} 1.5s ease-in-out infinite alternate;
    &.${activeClassName}{
        color: red;
    }
    color:white;
    
    line-height: 1.5rem;
    font-family: 'Big Shoulders Text', cursive;
    text-transform: uppercase;
    position: static;
    font-size: 1.2rem;
    text-decoration:none;
    @media(min-width:1025px){
        font-size:1.5rem;
        line-height:2rem;
    }

`
export {SideNavWrapper,SideNavList,SideNavListElement,NavLinkSide}