import React,{Fragment} from 'react';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import SideNav from '../Components/sideNav/sideNav.js';
import Article from '../Components/article.js';
import {Paragraph,PageDescription} from '../Components/Styled/styled.js'
import activities from './activities/landingPage.js';
const eventsArr = activities.filter(el=>el.category==='Events')
const Events=()=>{
    return(
        <Fragment>

            <SideNav mainCategory={'activities'}navLinks={["Projects","Events"]}/>
            <TitleBanner
                shootingStar={true}
                sideSrc1={'/assets/general/starL.png'}
                sideSrc2={'/assets/general/starR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Events"}
            ></TitleBanner>
            <PageDescription>Information on Allie's upcoming, ongoing and completed events, classes and workshops.</PageDescription>
            {
                eventsArr&&eventsArr.length?
                eventsArr.map((el,i)=>{
                    return(

                        <Article key={i} 
                        src={el.src}
                        title={el.title}
                        title2={el.title2}
                        right={i%2===1} 
                        date={el.date}
                        landingPage={"activities"}
                        category={el.category}
                        subcategory={el.subcategory}>
                        {el.description}</Article>
                    )
                }):
                <Fragment>
                <br/>
                <br/>
                <Paragraph>We're sorry to say that we have no planned events to list at the moment. Please check back on our site at a later date or follow us on social media to hear when we have upcoming events.</Paragraph>
                </Fragment>
            }
           
        </Fragment>
    )
}

export default Events;