import React,{Fragment} from 'react';
import TitleBanner from '../../components/titleBanner/titleBanner.js';
import SideNav from '../../components/sideNav/sideNav.js';
import Article from '../../components/article.js';
import {PageDescription} from '../../components/Styled/styled.js'
import activities from '../../utils/landingPages/activities.js';
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
            <PageDescription>Information on Allie&apos;s projects and events and how you can get involved or support us.</PageDescription>
            {
                activities.map((el,i)=>{
                    return(

            <Article 
                key={i}
                src={el.src}
                title={el.title}
                title2={el.title2}
                right={i%2===1} 
                date={el.date}
                landingPage={"activities"}
                category={el.category}
                subcategory={el.subcategory}
                file_type={el.file_type}>
                {el.description}
            </Article>
                    )
                })

            }
           
        </Fragment>
    )
}

export default Activities;