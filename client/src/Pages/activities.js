import React,{Fragment} from 'react';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import SideNav from '../Components/sideNav/sideNav.js';
import Article from '../Components/article.js';
import {PageDescription} from '../Components/Styled/styled.js'
import activities from './activities/landingPage.js';
const Activities=()=>{
    return(
        <Fragment>

            <SideNav mainCategory={'activities'}navLinks={["Projects","Events"]}/>
            <TitleBanner
                shootingStar={true}
                sideSrc1={'/assets/general/starL.png'}
                sideSrc2={'/assets/general/starR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Activities"}
            ></TitleBanner>
            <PageDescription>Information on Allie's projects and events and how you can get involved or support us.</PageDescription>
            {
                activities.map((el,i)=>{
                    return(

            <Article 
                key={i}
                src={el.src}
                title={el.title}
                right={i%2===1} 
                date={el.date}
                landingPage={"activities"}
                category={el.category}
                subcategory={el.subcategory}>
                {el.description}
            </Article>
                    )
                })

            }
           
        </Fragment>
    )
}

export default Activities;