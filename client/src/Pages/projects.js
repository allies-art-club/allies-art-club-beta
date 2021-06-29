import React,{Fragment} from 'react';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import SideNav from '../Components/sideNav/sideNav.js';
import Article from '../Components/article.js';
import {Paragraph} from '../Components/Styled/styled.js'
import activities from './activities/landingPage.js';
const Projects=()=>{
    return(
        <Fragment>

            <SideNav mainCategory={'activities'}navLinks={["Projects","Events"]}/>
            <TitleBanner
                sideSrc1={'/assets/general/starL.png'}
                sideSrc2={'/assets/general/starR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Projects"}
            ></TitleBanner>
            <Paragraph>Information on Allie's upcoming, ongoing and completed projects.</Paragraph>
            {
                activities.filter(el=>el.category==='Projects').map((el,i)=>{
                    return(

            <Article key={i} 
            src={el.src}
            title={el.title}
            right={i%2===1} 
            date={el.date}
            landingPage={"activities"}
            category={el.category}
            subcategory={el.subcategory}>
            {el.description}</Article>
                    )
                })

            }
           
        </Fragment>
    )
}

export default Projects;