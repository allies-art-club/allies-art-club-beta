import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {theme,boxGlow} from './theme/theme.js';
import {HeaderNavListElement}from '../Styled/header.styled.js';
const SideNavWrapper = styled.div`
    display:${props=>props.visible?"block":"none"};
    width:${props=>props.menu?"150px":"15%"};
    @media(min-width:768px){
        padding: ${props=>props.subMenu?"20px 20px 0px 20px":"5px"};

    }
    
    position:relative;
    @media(min-width:768px){
        display:${props=>props.menu?"none":"block"};
        position:absolute;
        padding:0px 20px;
        box-shadow: ${props=>props.menu?boxGlow:"auto"};
        background:${props=>props.menu?"rgba(255,255,255,0.65)":"unset"};
        left:${props=>props.menu?'50%':'-19%'};
        transform:${props=>props.menu?'translateX(-50%)':'auto'};

        top:${props=>props.menu?'55px':'0'};

        ${HeaderNavListElement}:hover & {
            display: block;
        }
    }
    @media(min-width:1025px){
        width:${props=>props.menu?"200px":"15%"};

    }
    @media(min-width:1300px){
        width:${props=>props.menu?"250px":"15%"};

    }
    z-index: ${props=>props.sidenav?"20":"30"};
`

const SideNavList = styled.ul`
    padding:0;
    margin:auto;
`


const SideNavListElement=styled.li`
    list-style-type: none;
    width:100%;
    margin:1rem 0;
    @media(min-width:768px){
        display:${props=>props.allCategory?"none":"block"};
    }
`
const activeClassName = 'nav-active-item';
const NavLinkSide = styled(NavLink).attrs({activeClassName})`
    display:block;
    width:100%;
    text-decoration: none;
    text-shadow:1px 1px 0 ${theme.blue}, -1px -1px 0 ${theme.blue},1px -1px 0 ${theme.blue}, -1px 1px ${theme.blue}, 0px 0px 1rem ${theme.blue};

    &.${activeClassName}, &:hover{
        text-shadow: 0px 0px 1rem ${theme.pink};
    }
    color:white;
    
    font-family: Teko, cursive;
    text-transform: uppercase;
    position: static;
    font-size: ${props=>props.sidenav?"1rem":"1.2rem"};
    line-height: ${props=>props.sidenav?"1rem":"1.2rem"};
    text-decoration:none;
    @media(min-width:1025px){
        font-size:${props=>props.sidenav?"1.5rem":"1.8rem"};
        line-height: 1.5rem;
    }
    font-stretch:condensed;

`
export {SideNavWrapper,SideNavList,SideNavListElement,NavLinkSide}