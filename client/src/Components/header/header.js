import React from 'react';
import {HeaderContainer, HeaderNav,HeaderNavList, HeaderNavListElement,NavLinkStyled, Logo, Figure,Slogan} from '../Styled/header.styled.js';

const Header = () => {
    return(
        <HeaderContainer data-test="header">
            <Slogan>Creating a culture of community</Slogan>
            <HeaderNav id="nav">
                <Figure>
                    <NavLinkStyled
                        exact to='/'>
                        <Logo src={'/assets/header/logo.png'} aria-label="Allie 's Art Club Logo"/>
                    </NavLinkStyled>
                    
                </Figure>
                <HeaderNavList>
                    <HeaderNavListElement>
                        <NavLinkStyled 
                            exact to='/about'
                            >About</NavLinkStyled>
                    </HeaderNavListElement>
                    <HeaderNavListElement>
                        <NavLinkStyled 
                            exact to='/allies-thoughts'
                            >Thoughts</NavLinkStyled>
                    </HeaderNavListElement>
                    <HeaderNavListElement>
                        <NavLinkStyled 
                            exact to='/allies-clubs-and-projects'
                            >Projects</NavLinkStyled>
                    </HeaderNavListElement>
                    <HeaderNavListElement>
                        <NavLinkStyled 
                            exact to='/how-to-be-an-allie'
                            >Be an Allie</NavLinkStyled>
                    </HeaderNavListElement>
                </HeaderNavList>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header;