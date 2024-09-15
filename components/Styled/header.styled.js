"use client";
import styled from "styled-components";
import Link from "next/link";
import { theme } from "./theme/theme.js";
//Header
const HeaderContainer = styled.header``;
const HeaderNav = styled.nav`
  position: relative;
`;
const HeaderNavListWrap = styled.div`
  @media (max-width: 767px) {
    display: ${(props) => (props.$open ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 20;
  }
`;
const Cross = styled.button`
  height: 2.2rem;
  width: 2.2rem;
  position: absolute;
  top: 115px;
  left: 200px;
  padding: 0px;
  background: none;
  border: none;
  @media (min-width: 768px) {
    display: none;
  }
  &:after,
  &:before {
    content: "";
    position: absolute;
    background-color: white;
    width: 2.2rem;
    height: 3px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;

    box-shadow: ${(props) =>
      props.$open
        ? `0px 0px 6px 2px ${theme.blue}`
        : `0px 0px 6px 2px ${theme.blue}`};
  }
  &:after {
    transform: translate(-1.1rem, -0.1rem) rotate(-45deg);
  }
  &:before {
    transform: translate(-1.1rem, -0.1rem) rotate(45deg);
  }
`;

const HeaderNavList = styled.ul`
  list-style: none;
  margin-bottom: -15rem;

  @media (max-width: 767px) {
    position: absolute;
    padding: 25px;
    background-color: white;
    top: 100px;
    display: ${(props) => (props.$open ? "flex" : "none")};
    flex-direction: column;
    box-shadow: 7px 0 7px ${theme.pink};
    max-height: calc(100vh - 100px);
    overflow-y: scroll;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`;
const HeaderNavListElement = styled.li`
  text-decoration: none;
  position: relative;
  display: flex;

  margin-top: 5rem; // targets elements of the nav bar besides logo
`;
const BurgerMenu = styled.button`
  position: absolute;
  top: 8%;
  left: 8%;
  transform: translateY(-50%);
  width: 2.2rem;
  height: 2.2rem;
  border: none;
  padding: 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

//boxGlowClosed
const BurgerLayers = styled.span`
  display: block;
  margin: auto;
  width: 1.6rem;
  height: 4px;
  background-color: white;
  box-shadow: ${(props) =>
    props.$open
      ? `0px 0px 6px 2px ${theme.blue}`
      : `0px 0px 6px 2px ${theme.blue}`};
  &:after,
  &:before {
    position: absolute;
    content: "";
    display: block;
    width: 1.6rem;
    height: 4px;
    background-color: white;
    box-shadow: ${(props) =>
      props.$open
        ? `0px 0px 6px 2px ${theme.blue}`
        : `0px 0px 6px 2px ${theme.blue}`};
  }
  &:after {
    transform: translateY(0.7rem);
  }
  &:before {
    transform: translateY(-0.7rem);
  }
`;
const DonateLinkWrapper = styled.div`
  position: relative;
`;

//START HERE TOMORROW TEXT SHADOW ALL SIDES
const activeClassName = "nav-active-item";

const NavMainCategory = styled(Link).attrs(
  ({ className }) => className === activeClassName
)`
    text-decoration: none;
    text-shadow:${(props) =>
      props.$nav
        ? `1px 1px 0 ${theme.blue}, -1px -1px 0 ${theme.blue},1px -1px 0 ${theme.blue}, -1px 1px 0 ${theme.blue}, 0px 0px 1rem ${theme.blue}`
        : `1px 1px 0 ${theme.yellow},1px -1px 0 ${theme.yellow}, -1px 1px 0 ${theme.yellow}, -1px -1px 0 ${theme.yellow}, 0px 0px 1rem ${theme.yellow}`};

    text-decoration:none;
    &.${activeClassName},&:hover{
        text-shadow: 0px 0px 1rem ${theme.pink};
    }
    color:white;
    line-height: 2rem;
    font-size: 2rem;
  font-family: "Balloon Extra Bold", sans-serif;
    text-transform: uppercase;
    position: ${(props) => (props.$nav ? "static" : "absolute")};
    top: ${(props) => (props.$nav ? "auto" : "40%")};
    right: ${(props) => (props.$nav ? "auto" : "8.25%")};
    transform: ${(props) => (props.$nav ? "auto" : "translateY(-50%)")};
    @media(max-width:480px){
        font-size ${(props) => (props.$nav ? "2rem" : "1.5rem")};
    }
    @media(min-width:768px){
        top: ${(props) => (props.$nav ? "auto" : "35%")};
        font-size: 1rem;
        padding-bottom: 5px;
    }

        @media(min-width:1024px){
        top: ${(props) => (props.$nav ? "auto" : "35%")};
        font-size: 1.3rem;
        padding-bottom: 5px;
    }

            @media(min-width:1280px){
        top: ${(props) => (props.$nav ? "auto" : "35%")};
        font-size: 1.5rem;
        padding-bottom: 5px;
    }

                @media(min-width:1300px){
        top: ${(props) => (props.$nav ? "auto" : "35%")};
        font-size: 1rem;
        padding-bottom: 5px;
    }
`;
const NavLinkLogo = styled(Link)`
  text-decoration: none;
  &:-webkit-any-link {
    text-decoration: none;
  }
`;

const Figure = styled.div`
  width: 100%;
  text-align: center;
`;
const HeaderLogo = styled.div`
  width: 100%;
  margin-left: -2rem;
  @media (min-width: 768px) {
    max-width: 15rem;
    margin-right: -2rem;
  }
  @media (min-width: 1024px) {
    max-width: 18rem;
  }

  @media (min-width: 1280px) {
    max-width: 23rem;
  }

  @media (min-width: 1300px) {
    max-width: 18rem;
  }
  @media (min-width: 1880px) {
  }

  @media (min-width: 1920px) {
    max-width: 35rem;
    margin-right: -12rem;
  }
`;

const Logo = styled.div`
  width: 100%;
  max-width: 27rem;
`;
export {
  HeaderContainer,
  HeaderNav,
  BurgerMenu,
  BurgerLayers,
  HeaderNavListWrap,
  Cross,
  HeaderNavList,
  HeaderNavListElement,
  DonateLinkWrapper,
  NavMainCategory,
  NavLinkLogo,
  HeaderLogo,
  Logo,
  Figure,
};
