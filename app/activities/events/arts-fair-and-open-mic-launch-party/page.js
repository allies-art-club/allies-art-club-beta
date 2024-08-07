import React,{Fragment} from 'react';
import {Paragraph,Link,Section,TextImageSquareTop,SubHeading} from '../../../../components/Styled/styled.js';
import TitleBanner from '../../../../components/titleBanner/titleBanner.js';
const LaunchParty=()=>{
    return (
        <Fragment>
        <Section>
            <TitleBanner
                sideSrc1={"/assets/general/starsL.png"}
                sideSrc2={"/assets/general/starsR.png"}
                centreSrc={"/assets/general/curvedLine.png"}
                title={"Arts Fair & Open Mic"}
                title2={"Launch Party"}/>
                
            <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/activities/events/launchParty/launchParty2-small.png 1x, /assets/activities/events/launchParty/launchParty2-large.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/activities/events/launchParty/launchParty2-large.png"/>
                    <TextImageSquareTop $right={true} src={'/assets/activities/events/launchParty/launchParty2-large.png'} alt="Art Care"/>
                </picture>  
            <Paragraph>Join us for an afternoon of food, music and art, and an evening of live poetry, spoken word and music, with open mic slots available!</Paragraph>

            <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/activities/events/launchParty/launchParty2-small.png 1x, /assets/activities/events/launchParty/launchParty2-large.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/activities/events/launchParty/launchParty2-large.png"/>
                    <TextImageSquareTop $mobile={true} src={'/assets/activities/events/launchParty/launchParty2-large.png'} alt="Art Care"/>
                </picture>  
            <SubHeading>Arts Fair</SubHeading>
            <Paragraph>Running from 3 – 6pm, our free arts fair will include an art market showcasing a range of talented artists.</Paragraph>
            <Paragraph>We will also have stalls selling delicious hot food, live DJ sets and space to socialise and enjoy a creative community atmosphere.</Paragraph>
            <SubHeading>Arts Show</SubHeading>
            <Paragraph>Hosted by our Club’s pioneer, poet and activist Lydia Rose, our arts show will include a fantastic range of live poetry, spoken word and music performances. We will also have open mic slots available with a reduced ticket price for those who would like to perform their art on stage.</Paragraph>
            <Paragraph>Featured artists soon to be announced!</Paragraph>
            <Paragraph>To book your ticket, please head to our Eventbrite page <Link rel="noopener" target="_blank" href="https://www.eventbrite.co.uk/e/arts-fair-open-mic-launch-party-tickets-166149287993">here</Link>.</Paragraph>
            <Paragraph>All profits raised from the event will go towards our <Link href="/activities/projects/art-care">Art Care</Link> project to support people’s mental health and wellbeing through art and creativity.</Paragraph>
            <Paragraph>
            Event address:<br/>
The Ringcross Community Centre<br/>
60 Lough Road, <br/>
London, N7 8RH <br/>
            </Paragraph>
            <Paragraph>
            Transport:<br/>
Caledonian Road tube station is a 4 minute walk away and the centre can also be reached on a range of buses such as the 43, 263, 17, 91 and 259. 

            </Paragraph>
        </Section>
        </Fragment>
    )
}

export default LaunchParty;