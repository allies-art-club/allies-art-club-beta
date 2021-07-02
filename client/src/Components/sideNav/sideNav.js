import React from 'react';
import {SideNavWrapper,SideNavList, SideNavListElement,NavLinkSide} from '../Styled/sideNav.styled.js';
const SideNav = (props) => {
    const pageNavigate=(el)=>{
        const strippedStr = el.replace(/[']/g,'').replace(/\s/g,'-').toLowerCase();
        return strippedStr
    }
    return(
        <SideNavWrapper sidenav={"true"}>
            <SideNavList>
                    {
                        props.navLinks.map((el,i)=>
                            <SideNavListElement key={i}>
                                <NavLinkSide sidenav={"true"} exact to={`/${props.mainCategory}/${pageNavigate(el)}`}>{el}</NavLinkSide>
                            </SideNavListElement>
                        )
                    }
            </SideNavList>
        </SideNavWrapper>
    )
}

export default SideNav;