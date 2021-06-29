import React,{Fragment} from 'react';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import SideNav from '../Components/sideNav/sideNav.js';
import Article from '../Components/article.js';
import {Paragraph} from '../Components/Styled/styled.js'
import articles from './articles/landingPage.js';
const PersonalStories=()=>{
    return(
        <Fragment>

            <SideNav mainCategory={'discussions'}navLinks={["Club Articles","Project News","Artist Conversations","Personal Stories"]}/>
            <TitleBanner
                sideSrc1={'/assets/general/starL.png'}
                sideSrc2={'/assets/general/starR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Personal Stories"}
            ></TitleBanner>
            <Paragraph>Personal experiences related to art, creativity, culture and community by our club members.</Paragraph>
            {
                articles.filter(el=>el.category==="Personal stories").map((el,i)=>{
                    return(

            <Article key={i} 
            src={el.src}
            title={el.title}
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

export default PersonalStories;