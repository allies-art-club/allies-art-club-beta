import React from 'react';
import {HeaderContainer, HeaderNav,BurgerMenu,BurgerLayers,HeaderNavListWrap,HeaderNavList, HeaderNavListElement,Cross,NavMainCategory,NavLinkLogo, Logo, Figure,Slogan} from '../Styled/header.styled.js';
import SubMenu from '../subMenu.js'
const Header = (props) => {
    console.log(props.subMenu)
    return(
        <HeaderContainer id="header" data-test="header">
            <Slogan>CONNECT. CREATE. EMPOWER.</Slogan>
            <HeaderNav id="nav" data-test="nav">
                <BurgerMenu onClick={(e)=>{
                    console.log(props.open)
                        props.toggleMenu(e)
                    }} 
                    id="burgerMenu"
                    aria-label="open menu" 
                    tabIndex={0}
                    data-test="burgerMenu">
                    <BurgerLayers open={props.open}/>
                </BurgerMenu>
                <Figure>
                    <NavLinkLogo
                        exact to='/'>
                        <Logo id="aacLogo" data-test="aacLogo" src={'/assets/header/logo.png'} aria-label="Allie 's Art Club Logo" alt="Allie 's Art Club Logo"/>
                    </NavLinkLogo>
                </Figure>
                <NavMainCategory 
                                nav={'nav'?0:1}
                                data-test="donate"
                                >Donate</NavMainCategory>
                <HeaderNavListWrap
                id="pageNavWrap" 
                onClick={(e)=>{
                    if(e.target===document.getElementById("pageNavWrap")||e.target===document.getElementById("closeNav")){
                        props.toggleMenu(e)
                    }
                }}
                open={props.open}>
                    <Cross id="closeNav"/>
                    <HeaderNavList id="pageNavList" data-test="navList" open={props.open} >
                        <HeaderNavListElement>
                            <NavMainCategory
                                onClick={(e)=>{
                                    if(window.innerWidth<768){
                                        console.log('ye')
                                        props.toggleSubMenu('about')
                                    }
                                    
                                }}
                                nav={'nav'?1:0}
                                data-test="aboutLink"
                                >About</NavMainCategory>
                            <SubMenu subMenu={'about'}toggleSubMenu={props.toggleSubMenu}toggleMenu={props.toggleMenu}visible={props.subMenu.about}mainCategory={'about'} navLinks={["Allie's Art Club","Allie's Story","Allie's Foundation"]}></SubMenu>
                        </HeaderNavListElement>
                        <HeaderNavListElement>
                            <NavMainCategory
                                onClick={(e)=>{
                                    if(window.innerWidth<768){
                                        props.toggleSubMenu('updates')
                                    }
                                    
                                }} 
                                nav={'nav'?1:0}
                                data-test="updatesLink"
                                >Updates</NavMainCategory>
                                <SubMenu subMenu={'updates'}toggleSubMenu={props.toggleSubMenu}toggleMenu={props.toggleMenu} visible={props.subMenu.updates} mainCategory={'updates'} navLinks={["Club Articles","Project News","Artist Conversations","Personal Stories"]}></SubMenu>
                        </HeaderNavListElement>
                        <HeaderNavListElement>
                            <NavMainCategory
                                onClick={(e)=>{
                                    if(window.innerWidth<768){
                                        props.toggleSubMenu('projects')
                                    }
                                    
                                }} 
                                nav={'nav'?1:0}
                                data-test="clubsAndProjectsLink"
                                >Projects</NavMainCategory>
                                <SubMenu subMenu={'projects'}toggleSubMenu={props.toggleSubMenu}toggleMenu={props.toggleMenu} visible={props.subMenu.projects} mainCategory={'projects'} navLinks={["Access 2 Art"]}></SubMenu>
                        </HeaderNavListElement>
                        <HeaderNavListElement>
                            <NavMainCategory
                                onClick={(e)=>{
                                    if(window.innerWidth<768){
                                        props.toggleSubMenu('be-an-allie')
                                    }
                                    
                                }} 
                                nav={'nav'?1:0}
                                data-test="beAnAllieLink"
                                
                                >Be an Allie</NavMainCategory>
                                <SubMenu subMenu={'be-an-allie'}toggleSubMenu={props.toggleSubMenu}toggleMenu={props.toggleMenu} visible={props.subMenu["be-an-allie"]} mainCategory={'be-an-allie'} navLinks={["Membership","Donate","Volunteer","Contact Us"]}></SubMenu>
                        </HeaderNavListElement>
                    </HeaderNavList>
                </HeaderNavListWrap>
                
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header;