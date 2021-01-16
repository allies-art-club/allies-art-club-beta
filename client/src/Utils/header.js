import React from 'react';
import {NavLink} from 'react-router-dom';
import AllieLogo from "../assets/header/logo.png"
import {HeaderContainer, HeaderNav,HeaderNavList, HeaderNavListElement, Logo, Figure} from './Components/Styled/header.styled.js';

const Header = () => {
    return(
        <HeaderContainer>
            <HeaderNav>
                <Figure>
                    <NavLink
                        exact to='/'>
                        <Logo src={AllieLogo} aria-label="Allie 's Art Club Logo"/>
                    </NavLink>
                    
                </Figure>
                <HeaderNavList>
                    <HeaderNavListElement>
                        <NavLink 
                            exact to='/about'
                            activeStyle={{color:'red'}}
                            >About</NavLink>
                    </HeaderNavListElement>
                    <HeaderNavListElement>
                        <NavLink 
                            exact to='/allies-thoughts'
                            activeStyle={{color:'red'}}
                            >Thoughts</NavLink>
                    </HeaderNavListElement>
                    <HeaderNavListElement>
                        <NavLink 
                            exact to='/allies-clubs-and-projects'
                            activeStyle={{color:'red'}}
                            >Projects</NavLink>
                    </HeaderNavListElement>
                    <HeaderNavListElement>
                        <NavLink 
                            exact to='/how-to-be-an-allie'
                            activeStyle={{color:'red'}}
                            >Be an Allie</NavLink>
                    </HeaderNavListElement>
                </HeaderNavList>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header;