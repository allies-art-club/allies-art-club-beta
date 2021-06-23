import React from 'react';
import {SideNavWrapper,SideNavList, SideNavListElement,NavLinkSide} from '../Styled/sideNav.styled.js';
const SideNav = (props) => {
    const pageNavigate=(el)=>{
        const strippedStr = el.replace(/[']/g,'').replace(/\s/g,'-').toLowerCase();
        return strippedStr
    }
    return(
        <SideNavWrapper sideNav={true}>
            <SideNavList>
                    {
                        props.navLinks.map((el,i)=>
                            <SideNavListElement key={i}>
                                <NavLinkSide exact to={`/${props.mainCategory}/${pageNavigate(el)}`}>{el}</NavLinkSide>
                            </SideNavListElement>
                        )
                    }
            </SideNavList>
        </SideNavWrapper>
    )
}

export default SideNav;