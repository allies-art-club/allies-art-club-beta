import React,{Fragment} from 'react';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import SideNav from '../Components/sideNav/sideNav.js';
import Article from '../Components/article.js';
import {PageDescription} from '../Components/Styled/styled.js'
import resources from './resources/landingPage.js';
import { downloadHandler } from '../Actions/articleActions.js';
const Resources=()=>{
    return(
        <Fragment>

            <SideNav mainCategory={'resources'}navLinks={["Fact Sheets","Work Sheets"]}/>
            <TitleBanner
                shootingStar={true}
                sideSrc1={'/assets/general/starL.png'}
                sideSrc2={'/assets/general/starR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Resources"}
            ></TitleBanner>
            <PageDescription>Fact sheets and work sheets to learn about and engage in art, self-care and activism.</PageDescription>
            {
                resources.map((el,i)=>{
                    return(

            <Article key={i} 
                src={el.src}
                title={el.title}
                title2={el.title2}
                right={i%2===1} 
                date={el.date}
                landingPage={"resources"}
                category={el.category}
                subcategory={el.subcategory}
                file_type={el.file_type}
                downloadHandler={downloadHandler}>
                {el.description}</Article>
                    )
                })

            }
           
        </Fragment>
    )
}
export default Resources;