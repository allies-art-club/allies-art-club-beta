import React,{Fragment} from 'react';
import {Paragraph,Link,Section} from '../../Components/Styled/styled.js';
import TitleBanner from '../../Components/titleBanner/titleBanner.js';
const CrazyParty=()=>{
    return (
        <Fragment>
        <Section>
            <TitleBanner
                sideSrc1={"/assets/general/starsL.png"}
                sideSrc2={"/assets/general/starsR.png"}
                centreSrc={"/assets/general/curvedLine.png"}
                title={"CRAZY"}
                title2={"A Mental Health Arts Event"}/>
            <Paragraph>Join Allie's Art Club for our much-anticipated mental health arts event: <b>CRAZY</b></Paragraph>
            <Paragraph>"Crazy" is a common word that is very much embedded in the English language without much awareness of how its use reflects and reinforces prevailing views of mental health, and is therefore a great starting point for us to discuss mental health and the stigma that surrounds it.</Paragraph>
            <Paragraph>This vibrant event will include a range of poetry, spoken word and music performances centred around topics related to mental health, as well as open mic slots for guests who wish to express their views and experiences.</Paragraph>
            <Paragraph>We will also be hosting a panel discussion with a range of professionals in the field of mental health to discuss issues such as mental health stigma, mental ill-health, self-care and the importance of art and community for mental wellbeing.</Paragraph>
            <Paragraph>Allie's Art Club is also excited to be launching our CRAZY zine, which includes the work of a number of talented artists and poets and is available to purchase at the event.</Paragraph>
            <Paragraph>All profits raised from ticket and zine sales go towards our project to support people's mental health through the arts.</Paragraph>
            <Paragraph>To book your tickets, head to our Eventbrite page: <Link rel="noopener" target="_blank" href="https://www.eventbrite.co.uk/e/crazy-a-mental-health-arts-event-tickets-321173427367">here</Link></Paragraph>
            <Paragraph>
            <b>Venue Address:</b><br/>
            The Lucky Club<br/>
            56 Davies Street, <br/>
            London, W1K 5JF <br/>
            </Paragraph>
            <Paragraph>
            <b>Transport:</b><br/>
            Bond Street station is a 3 minute walk away and there are a number of buses that will take you close to the venue in Mayfair.

            </Paragraph>
        </Section>
        </Fragment>
    )
}

export default CrazyParty;