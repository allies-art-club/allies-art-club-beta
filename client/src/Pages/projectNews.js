import React,{Fragment} from 'react';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import SideNav from '../Components/sideNav/sideNav.js';
import Article from '../Components/article.js';
import {PageDescription} from '../Components/Styled/styled.js'
import articles from './articles/landingPage.js';
const ProjectNews=()=>{
    return(
        <Fragment>

            <SideNav mainCategory={'discussions'}navLinks={["Club Articles","Project News","Artist Conversations","Personal Stories"]}/>
            <TitleBanner
                shootingStar={true}
                sideSrc1={'/assets/general/starL.png'}
                sideSrc2={'/assets/general/starR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Project News"}
            ></TitleBanner>
            <PageDescription>Information, news and updates about Allie's projects, campaigns, workshops and events.</PageDescription>
            {
                articles.filter(el=>el.category==="Project news").map((el,i)=>{
                    return(

            <Article key={i} 
            src={el.src}
            title={el.title}
            title2={el.title2}
            right={i%2===0} 
            date={el.date}
            landingPage={"discussions"}
            category={el.category}
            subcategory={el.subcategory}
            file_type={el.file_type}>
            {el.description}</Article>
                    )
                })

            }
           
        </Fragment>
    )
}

export default ProjectNews;