import React from 'react';
import {PageNavWrap,PageNavList,PageNavItem} from './Styled/styled.js'
const PageNav = (props) => {
    return(
        <PageNavWrap>
            <PageNavList id="pageNav">
                {
                    props.pageSections.map((item,i)=>{
                        return (
                            !(typeof item === 'object'&& item !== null)?<PageNavItem  key={i}><a href={'#'+item.replace(/[^A-Z^a-z^0-9]/g,'')}>{item}</a></PageNavItem>
                            :
                            <>
                                <PageNavItem href={'#'+item.section.replace(/[^A-Z^a-z^0-9]/g,'')}>{item.section}</PageNavItem>
                                <PageNavList>
                                    {
                                        item.subSectionArray.map((subItem,j)=>{
                                            return (
                                                <PageNavItem key={j}><a href={"#"+subItem.replace(/[^A-Z^a-z^0-9]/g,'')} >{subItem}</a></PageNavItem>
                                            )
                                        })
                                    }
                                </PageNavList>
                            </>
                            )
                    })
                }
            </PageNavList>
        </PageNavWrap>
    )
}

export default PageNav