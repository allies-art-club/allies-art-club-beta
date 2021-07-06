import React,{Fragment} from 'react';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import SideNav from '../Components/sideNav/sideNav.js';
import Article from '../Components/article.js';
import {PageDescription} from '../Components/Styled/styled.js'
import articles from './articles/landingPage.js';
const Discussions=()=>{
    return(
        <Fragment>

            <SideNav mainCategory={'discussions'}navLinks={["Club Articles","Project News","Artist Conversations","Personal Stories"]}/>
            <TitleBanner
                shootingStar={true}
                sideSrc1={'/assets/general/starL.png'}
                sideSrc2={'/assets/general/starR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Discussions"}
            ></TitleBanner>
            <PageDescription>Information, news, conversations and stories on art, creativity, culture and community.</PageDescription>
            {
                articles.map((el,i)=>{
                    return(

            <Article key={i} 
            src={el.src}
            title={el.title}
            largeHeading={el.largeHeading}
            right={i%2===0} 
            date={el.date}
            landingPage={"discussions"}
            category={el.category}
            subcategory={el.subcategory}>
            {el.description}</Article>
                    )
                })

            }
           
        </Fragment>
    )
}

export default Discussions;