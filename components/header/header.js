"use client"
import React from 'react';
import {HeaderContainer, HeaderLogo, HeaderNav,BurgerMenu,BurgerLayers,HeaderNavListWrap,HeaderNavList, HeaderNavListElement,Cross,NavMainCategory,NavLinkLogo, Figure,Slogan} from '../Styled/header.styled.js';
import SubMenu from '../subMenu.js'
import {toggleMenu,toggleSubMenu} from '../../utils/Actions/appActions.js';
import {connect} from 'react-redux'
const Header = (props) => {
    return(
        <HeaderContainer id="header" data-test="header">
            <Slogan>Creating a culture of community</Slogan>
            <HeaderNav id="nav" data-test="nav">
                <BurgerMenu onClick={(e)=>{
                        props.toggleMenu(e)
                    }} 
                    id="burgerMenu"
                    aria-label="open menu" 
                    tabIndex={0}
                    data-test="burgerMenu">
                    <BurgerLayers $open={props.open}/>
                </BurgerMenu>
                <Figure>
                    <NavLinkLogo
                        href='/'>
                        <HeaderLogo id="aacLogo" data-test="aacLogo" aria-label="Allie 's Art Club Logo">Allie's Art Club</HeaderLogo>
                    </NavLinkLogo>
                </Figure>
                <NavMainCategory
                                href={'/be-an-allie/donate'} 
                                $nav={'nav'?0:1}
                                data-test="donate"
                                >Donate</NavMainCategory>
                <HeaderNavListWrap
                id="pageNavWrap" 
                onClick={(e)=>{
                    if(e.target===document.getElementById("pageNavWrap")||e.target===document.getElementById("closeNav")){
                        props.toggleMenu(e)
                    }
                }}
                $open={props.open}>
                    <Cross id="closeNav"/>
                    <HeaderNavList id="pageNavList" data-test="navList" $open={props.open} >
                        <HeaderNavListElement>
                            <NavMainCategory
                                onClick={(e)=>{
                                    if(window.innerWidth<768){
                                        e.preventDefault();
                                        props.toggleSubMenu('about');
                                    }
                                    
                                }}
                                href={"/about/allies-art-club"}
                                $nav={'nav'?1:0}
                                data-test="aboutLink"
                                >About</NavMainCategory>
                            <SubMenu subMenu={'about'}toggleSubMenu={props.toggleSubMenu}toggleMenu={props.toggleMenu}visible={props.app.subMenu.about}mainCategory={'about'} navLinks={["Allie's Art Club","Allie's Mission","Allie's Values","Allie's Story"]}></SubMenu>
                        </HeaderNavListElement>
                        <HeaderNavListElement>
                            <NavMainCategory
                                onClick={(e)=>{
                                    if(window.innerWidth<768){
                                        e.preventDefault();
                                        props.toggleSubMenu('discussions');
                                    }
                                    
                                }}
                                href={"/discussions"}
                                $nav={'nav'?1:0}
                                data-test="discussionsLink"
                                >Discussions</NavMainCategory>
                                <SubMenu subMenu={'discussions'}toggleSubMenu={props.toggleSubMenu}toggleMenu={props.toggleMenu} visible={props.app.subMenu.discussions} mainCategory={'discussions'} navLinks={["All Discussions","Club Articles","Project News","Artist Conversations","Personal Stories"]}></SubMenu>
                        </HeaderNavListElement>
                        <HeaderNavListElement>
                            <NavMainCategory
                                onClick={(e)=>{
                                    if(window.innerWidth<768){
                                        e.preventDefault();
                                        props.toggleSubMenu('activities');
                                    }
                                    
                                }}
                                href={"/activities"}
                                $nav={'nav'?1:0}
                                data-test="activitiesLink"
                                >Activities</NavMainCategory>
                                <SubMenu subMenu={'activities'}toggleSubMenu={props.toggleSubMenu}toggleMenu={props.toggleMenu} visible={props.app.subMenu.activities} mainCategory={'activities'} navLinks={["All Activities","Projects","Events"]}></SubMenu>
                        </HeaderNavListElement>
                        <HeaderNavListElement>
                            <NavMainCategory
                                onClick={(e)=>{
                                    if(window.innerWidth<768){
                                        e.preventDefault();
                                        props.toggleSubMenu('resources');
                                    }
                                    
                                }}
                                href={"/resources"}
                                $nav={'nav'?1:0}
                                data-test="resourcesLink"
                                >Resources</NavMainCategory>
                                <SubMenu subMenu={'resources'}toggleSubMenu={props.toggleSubMenu}toggleMenu={props.toggleMenu} visible={props.app.subMenu.resources} mainCategory={'resources'} navLinks={["All Resources","Fact Sheets","Work Sheets"]}></SubMenu>
                        </HeaderNavListElement>
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
                </HeaderNavListWrap>
                
            </HeaderNav>
        </HeaderContainer>
    )
}
const mapStateToProps=(state)=>{
  return {
      app: state.app,      
  }
  
}
const mapDispatchToProps=(dispatch)=>{
  return {
      toggleMenu: (event)=>{
        toggleMenu(event,dispatch)
      },
      toggleSubMenu: (subMenu)=>{
        toggleSubMenu(subMenu,dispatch)
      }
      
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);