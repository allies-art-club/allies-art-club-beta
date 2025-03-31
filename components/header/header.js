"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderNav,
  BurgerMenu,
  BurgerLayers,
  HeaderNavListWrap,
  HeaderNavList,
  HeaderNavListElement,
  Cross,
  NavMainCategory,
  Logo,
  Figure,
  NavLinkLogo,
} from "../Styled/header.styled.js";
import { Section } from "../Styled/styled.js";
import SubMenu from "../subMenu.js";
import { toggleMenu, toggleSubMenu } from "../../utils/Actions/appActions.js";
import "../../app/fonts/Balloon_Extra_Bold/stylesheet.css";
import FrontPageTitle from "../newHomepage/frontPageTitle";
import Badge from "../newHomepage/badge";
import { connect } from "react-redux";
const Header = (props) => {
  return (
    <HeaderContainer id="header" data-test="header">
      <HeaderNav id="nav" data-test="nav">
        <BurgerMenu
          onClick={(e) => {
            props.toggleMenu(e);
          }}
          id="burgerMenu"
          aria-label="open menu"
          tabIndex={0}
          data-test="burgerMenu"
        >
          <BurgerLayers $open={props.open} />
        </BurgerMenu>
        <HeaderNavListWrap
          id="pageNavWrap"
          onClick={(e) => {
            if (
              e.target === document.getElementById("pageNavWrap") ||
              e.target === document.getElementById("closeNav")
            ) {
              props.toggleMenu(e);
            }
          }}
          $open={props.open}
        >
          <Cross id="closeNav" />
          <HeaderNavList
            id="pageNavList"
            data-test="navList"
            $open={props.open}
          >
            <HeaderLogo>
              {" "}
              <Logo>
                <a href="/">
                  <Image
                    src="/assets/aacLogo.png"
                    alt="Logo"
                    width={200}
                    height={162}
                    layout="responsive"
                  />
                </a>
              </Logo>
            </HeaderLogo>

            <HeaderNavListElement>
              <NavMainCategory
                onClick={(e) => {
                  if (window.innerWidth < 768) {
                    e.preventDefault();
                    props.toggleSubMenu("about");
                  }
                }}
                href={"/about/about-us"}
                $nav={"nav" ? 1 : 0}
                data-test="aboutLink"
              >
                About
              </NavMainCategory>
              <SubMenu
                subMenu={"about"}
                toggleSubMenu={props.toggleSubMenu}
                toggleMenu={props.toggleMenu}
                visible={props.app.subMenu.about}
                mainCategory={"about"}
                navLinks={[
                  "About Us",
                  "Allie's Impact",
                  "Allie's Story",
                  "Allie's Partners",
                ]}
              ></SubMenu>
            </HeaderNavListElement>
            <HeaderNavListElement>
              <NavMainCategory
                onClick={(e) => {
                  if (window.innerWidth < 768) {
                    e.preventDefault();
                    props.toggleSubMenu("discussions");
                  }
                }}
                href={"/discussions"}
                $nav={"nav" ? 1 : 0}
                data-test="discussionsLink"
              >
                Discussions
              </NavMainCategory>
              <SubMenu
                subMenu={"discussions"}
                toggleSubMenu={props.toggleSubMenu}
                toggleMenu={props.toggleMenu}
                visible={props.app.subMenu.discussions}
                mainCategory={"discussions"}
                navLinks={[
                  "All Discussions",
                  "Club Articles",
                  "Project News",
                  "Artist Conversations",
                  "Personal Stories",
                ]}
              ></SubMenu>
            </HeaderNavListElement>
            <HeaderNavListElement>
              <NavMainCategory
                onClick={(e) => {
                  if (window.innerWidth < 768) {
                    e.preventDefault();
                    props.toggleSubMenu("activities");
                  }
                }}
                href={"/activities"}
                $nav={"nav" ? 1 : 0}
                data-test="activitiesLink"
              >
                Activities
              </NavMainCategory>
              <SubMenu
                subMenu={"activities"}
                toggleSubMenu={props.toggleSubMenu}
                toggleMenu={props.toggleMenu}
                visible={props.app.subMenu.activities}
                mainCategory={"activities"}
                navLinks={[
                  "All Activities",
                  "Projects",
                  "Events",
                  "Services",
                  "Membership",
                ]}
              ></SubMenu>
            </HeaderNavListElement>
            <HeaderNavListElement id="contact">
              <NavMainCategory
                onClick={(e) => {
                  if (window.innerWidth < 768) {
                    e.preventDefault();
                    props.toggleSubMenu("contactUs");
                  }
                }}
                href={"/contactUs"}
                $nav={"nav" ? 1 : 0}
                data-test="contactLink"
              >
                Contact
              </NavMainCategory>
            </HeaderNavListElement>
            {/* <HeaderNavListElement>
              <NavMainCategory
                onClick={(e) => {
                  if (window.innerWidth < 768) {
                    e.preventDefault();
                    props.toggleSubMenu("donate");
                  }
                }}
                href={"/be-an-allie/donate"}
                $nav={"nav" ? 1 : 0}
                data-test="donate"
                // data-test="donateLink"
              >
                Donate
              </NavMainCategory>
              <SubMenu
                subMenu={"donate"}
                toggleSubMenu={props.toggleSubMenu}
                toggleMenu={props.toggleMenu}
                visible={props.app.subMenu.donate}
                mainCategory={"donate"}
                navLinks={["Donations", "The DIY fund"]}
              ></SubMenu>
            </HeaderNavListElement> */}
            {/* <HeaderNavListElement>
                            <NavMainCategory
                                onClick={(e)=>{
                                    if(window.innerWidth<768){
                                        e.preventDefault();
                                        props.toggleSubMenu('be-an-allie');
                                    }
                                    
                                }}
                                href={"/be-an-allie/donate"}
                                nav={'nav'?1:0}
                                data-test="beAnAllieLink"
                                
                                >Contact us</NavMainCategory>
                                <SubMenu subMenu={'be-an-allie'}toggleSubMenu={props.toggleSubMenu}toggleMenu={props.toggleMenu} visible={props.subMenu["be-an-allie"]} mainCategory={'be-an-allie'} navLinks={["Contact Us"]}></SubMenu>
                        </HeaderNavListElement> */}
          </HeaderNavList>
          <FrontPageTitle />
          <Badge />
        </HeaderNavListWrap>
      </HeaderNav>
    </HeaderContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    app: state.app,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: (event) => {
      toggleMenu(event, dispatch);
    },
    toggleSubMenu: (subMenu) => {
      toggleSubMenu(subMenu, dispatch);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
