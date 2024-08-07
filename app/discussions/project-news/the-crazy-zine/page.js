import React from 'react';
import TitleBanner from '../../../../components/titleBanner/titleBanner.js';
import {Paragraph,Link,Article,Section,TextImageTop,TextImage} from '../../../../components/Styled/styled.js';
const RememberingAllie=()=>{
    return(
        <Article>
        <TitleBanner
            centreSrc={"/assets/general/curvedLine.png"}
            title={"The CRAZY Zine!"}
            ></TitleBanner>
            <Section>
                <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/articles/theCrazyZine/theCrazyZine1-small.png 1x, /assets/articles/theCrazyZine/theCrazyZine1-2x.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/articles/theCrazyZine/theCrazyZine1-large.png"/>
                    <TextImageTop $right={true} src={'/assets/articles/theCrazyZine/theCrazyZine1-large.png'} alt="Child with paint on her hands"/>
                </picture>

                <Paragraph>
                Allie is so excited to announce we have published our first zine: “CRAZY: An Art and Poetry Zine about Mental Health”. </Paragraph>

                <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/articles/theCrazyZine/theCrazyZine1-small.png 1x, /assets/articles/theCrazyZine/theCrazyZine1-2x.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/articles/theCrazyZine/theCrazyZine1-large.png"/>
                    <TextImageTop $mobile={true} src={'/assets/articles/theCrazyZine/theCrazyZine1-large.png'} alt="Child with paint on her hands"/>
                </picture>
                <Paragraph>
                "Crazy" is a common word that is very much embedded in the English language without much awareness of how its use reflects and reinforces prevailing views of mental health. In this zine, we use the word crazy as a starting point to discuss mental health and the stigma that surrounds it through the mediums of art and poetry.  </Paragraph>
                <Paragraph>
                Showcasing a range of drawings, paintings, photography, digital art and poems, as well as discussions and definitions of important mental health terms, this zine highlights the views and experiences of 10 talented London-based artists on topics ranging from mental health stigma, mental ill-health, the public mental health system, self-care and supportive relationships.</Paragraph>
                
                <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/articles/theCrazyZine/theCrazyZine2-small.png 1x, /assets/articles/theCrazyZine/theCrazyZine2-large.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/articles/theCrazyZine/theCrazyZine2-large.png"/>
                    <TextImage src={'/assets/articles/theCrazyZine/theCrazyZine2-large.png'} alt="Lyd and Nancy"/>
                </picture>
                <Paragraph>
                We launched the zine at our <Link href="/activities/events/crazy-a-mental-health-arts-event">CRAZY mental health arts event</Link> at the Lucky Club in May. We also took part in the <Link rel="noopener" target="_blank" href="http://www.deptforddoesart.com/zine-festival/">Deptford Does Art</Link> South London Zine Fest, where the zine was displayed at their gallery and our club pioneer, Lydia Rose, did a talk about how she designed and curated the zine and ran a creative writing workshop focusing on self-care and mental wellbeing.</Paragraph>
                
                <picture >
                    <source media="(max-width: 1024px)" srcSet="/assets/articles/theCrazyZine/theCrazyZine3-small.png 1x, /assets/articles/theCrazyZine/theCrazyZine3-large.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/articles/theCrazyZine/theCrazyZine3-large.png"/>
                    <TextImage $right={true} src={'/assets/articles/theCrazyZine/theCrazyZine3-large.png'} alt="Lyd and Nancy"/>
                </picture>
                <Paragraph>
                Thank you so much to all the artists who contributed to the zine, including A Rose, Amber Perrier, Andy Harrod, Ashleigh Jeffrey-Taylor, Claire, Lydia Rose, Mark C Bolton, Mona Moon, Nomadic Libaax and RDBC.</Paragraph>
                <Paragraph>
                All profits from zine sales go towards our <Link href="/activities/projects/art-care"></Link>Art Care project to support people's mental health through the arts.</Paragraph>
                <Paragraph style={{clear:"both"}}></Paragraph>
            </Section>
        </Article>
    )
}

export default RememberingAllie;