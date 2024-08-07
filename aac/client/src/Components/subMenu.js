import React from 'react';
import {SideNavWrapper,SideNavList, SideNavListElement,NavLinkSide} from './Styled/sideNav.styled.js';
const SubMenu = (props) => {
    const pageNavigate=(el)=>{
        const strippedStr = el.replace(/[']/g,'').replace(/\s/g,'-').toLowerCase();
        return strippedStr
    }
    return(
        <SideNavWrapper $submenu={"true"} $visible={props.visible}$menu={"true"}>
            <SideNavList>
                    {
                        props.navLinks.map((el,i)=>
                            <SideNavListElement 
                                key={i}
                                $allcategory={el.match(/All /)?true:false}
                            >
                                <NavLinkSide onClick={(e)=>{
                                    if(window.innerWidth<768){
                                        props.toggleMenu(e);
                                        props.toggleSubMenu(props.subMenu);
                                    }
                                    }}
                                    exact href={el.match(/All /)?`/${props.mainCategory}`:`/${props.mainCategory}/${pageNavigate(el)}`}>{el}</NavLinkSide>
                            </SideNavListElement>
                        )
                    }
            </SideNavList>
        </SideNavWrapper>
    ) 
}

export default SubMenu;