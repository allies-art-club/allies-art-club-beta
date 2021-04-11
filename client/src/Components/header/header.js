import React from 'react';
import {HeaderContainer, HeaderNav,BurgerMenu,BurgerLayers,HeaderNavListWrap,HeaderNavList, HeaderNavListElement,Cross,NavLinkStyled,NavLinkLogo, Logo, Figure,Slogan} from '../Styled/header.styled.js';

const Header = (props) => {
    return(
        <HeaderContainer id="header" data-test="header">
            <Slogan>Creating a culture of community</Slogan>
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
                <NavLinkStyled 
                                nav={false}
                                data-test="donate"
                                exact to='/donate'
                                >Donate</NavLinkStyled>
                <HeaderNavListWrap onClick={(e)=>{
                    if(e.target!==document.getElementById("pageNavList")){
                        props.toggleMenu(e)
                    }
                }}
                open={props.open}>
                    <Cross/>
                    <HeaderNavList id="pageNavList" data-test="navList" open={props.open} >
                        <HeaderNavListElement>
                            <NavLinkStyled 
                                nav={true}
                                data-test="aboutLink"
                                exact to='/about'
                                >About</NavLinkStyled>
                        </HeaderNavListElement>
                        <HeaderNavListElement>
                            <NavLinkStyled 
                                nav={true}
                                data-test="thoughtsLink"
                                exact to='/allies-thoughts'
                                >Thoughts</NavLinkStyled>
                        </HeaderNavListElement>
                        <HeaderNavListElement>
                            <NavLinkStyled 
                                nav={true}
                                data-test="clubsAndProjectsLink"
                                exact to='/allies-clubs-and-projects'
                                >Projects</NavLinkStyled>
                        </HeaderNavListElement>
                        <HeaderNavListElement>
                            <NavLinkStyled 
                                nav={true}
                                data-test="beAnAllieLink"
                                exact to='/how-to-be-an-allie'
                                >Be an Allie</NavLinkStyled>
                        </HeaderNavListElement>
                    </HeaderNavList>
                </HeaderNavListWrap>
                
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header;