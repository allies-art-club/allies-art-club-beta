import React,{Fragment} from 'react';
import TitleBanner from '../../../components/titleBanner/titleBanner.js';
import SideNav from '../../../components/sideNav/sideNav.js';
import Article from '../../../components/article.js';
import {Paragraph,PageDescription} from '../../../components/Styled/styled.js'
import activities from '../../../utils/landingPages/activities.js';
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
                        subcategory={el.subcategory}
                        file_type={el.file_type}>
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