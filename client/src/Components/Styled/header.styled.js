import styled, {keyframes} from 'styled-components';
import {NavLink} from 'react-router-dom'
//Header

const HeaderContainer = styled.header`
    width:100%;
`
const HeaderNav = styled.nav`
`
const HeaderNavList = styled.ul`
    display:flex;
    justify-content:space-around;
    list-style:none;
`
const HeaderNavListElement = styled.li`
    text-decoration: none;
    font-size: 20px;
`

const activeClassName = 'nav-active-item'
const textGlow = keyframes`
    from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF;
    }
    to {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF;
    }
`
const NavLinkStyled = styled(NavLink).attrs({activeClassName})`
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
    font-size: 30px;
    text-decoration:none;
    color:white;
    font-family: Iceland;
`

const Logo = styled.img`
    height:200px;
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
    height: 40px;
    line-height:40px;
    margin:0px;
`
export {HeaderContainer, HeaderNav,HeaderNavList, HeaderNavListElement, NavLinkStyled,Logo, Figure,Slogan};