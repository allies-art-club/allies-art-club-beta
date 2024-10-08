import React,{Fragment} from 'react';
import {Paragraph,Link,Section,TextImage,TextImageTop,SubHeading} from '../../Components/Styled/styled.js';
import {SquareImage} from '../../Components/Styled/article.styled.js';

import TitleBanner from '../../Components/titleBanner/titleBanner.js';
const Access2Art=()=>{
    return (
        <Fragment>
        <Section>
            <TitleBanner
                sideSrc1={"/assets/general/starsL.png"}
                sideSrc2={"/assets/general/starsR.png"}
                centreSrc={"/assets/general/curvedLine.png"}
                title={"Art Care"} />
                <Paragraph>Whether it’s painting, writing, singing or dancing, art and creativity bring a wealth of joy and fulfilment to so many people’s lives.</Paragraph>
            <Paragraph>In fact, studies have shown that engaging in artistic activities has tremendous benefits for people's mental health, sense of wellbeing and overall quality of life.</Paragraph>
            <Paragraph>Unfortunately, studies have also shown that mental health issues such as anxiety and depression are at an all-time high in the UK and abroad as many people struggle with the impacts of the Coronavirus pandemic. </Paragraph>

            <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/activities/projects/artCare/artCare-small.png 1x, /assets/activities/projects/artCare/artCare-large.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/activities/projects/artCare/artCare-large.png"/>
                    <TextImage right={true} src={'/assets/activities/projects/artCare/artCare-large.png'} alt="Art Care"/>
                </picture>  
            <Paragraph>Allie’s Art Care project is all about supporting people’s mental health and wellbeing through providing opportunities for them to make and enjoy art.</Paragraph>
            <Paragraph>Artistic activities such as drawing and creative writing are fantastic ways for people to express themselves and process their emotions, as well as relax, have fun, socialise and improve their overall mood.</Paragraph>
            <Paragraph>Through providing resources and events that allow people to engage in art, we hope to address the mental health crisis facing our nation and brighten people’s lives with the magic of creativity.</Paragraph>

            <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/activities/projects/artCare/artCarePacksImage-small.png 1x, /assets/activities/projects/artCare/artCarePacksImage-large.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/activities/projects/artCare/artCarePacksImage-large.png"/>
                    <SquareImage right={true} src={'/assets/activities/projects/artCare/artCarePacksImage-large.png'} alt="Art Care Packs Image"/>
                </picture>  
        </Section>
        <Section>


            <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/activities/projects/artCare/artCarePacks-small.png 1x, /assets/activities/projects/artCare/artCarePacks-large.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/activities/projects/artCare/artCarePacks-large.png"/>
                    <TextImageTop right={false} src={'/assets/activities/projects/artCare/artCarePacks-large.png'} alt="Art Care Packs"/>
                </picture>            
            <SubHeading>Art Care Packs</SubHeading>

            <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/activities/projects/artCare/artCarePacks-small.png 1x, /assets/activities/projects/artCare/artCarePacks-large.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/activities/projects/artCare/artCarePacks-large.png"/>
                    <TextImageTop mobile={true} src={'/assets/activities/projects/artCare/artCarePacks-large.png'} alt="Art Care Packs"/>
                </picture>    
            <Paragraph>We believe everyone should be able to access the many benefits that art can provide, including those who are underprivileged or struggling financially.</Paragraph>
            <Paragraph>Approximately 14.4 million people are currently living in poverty in the UK, with numbers predicted to rise drastically as the economic impacts of the Coronavirus pandemic continue.</Paragraph>
            <Paragraph>With so many families struggling to make ends meet, they are usually unable to afford the materials and equipment needed to engage in art.</Paragraph>
            <Paragraph>Financial hardship can also put huge strains on people’s mental wellbeing, making accessible mental health support all the more important.</Paragraph>
            <Paragraph>To support the mental health of those struggling financially, we will be donating Art Care Packs to a number of food banks across London, where they can reach communities most affected. The Packs will include mental health information sheets and a range of art supplies such as notebooks, pens and pencils.</Paragraph>
            <Paragraph>To read more details about our Art Care Packs, please read our article <Link href={"/discussions/project-news/art-care-packs-tools-for-mental-wellbeing"}>Art Care Packs: Tools for Mental Wellbeing</Link>.</Paragraph>
        </Section>
        <Section>

            <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/activities/projects/artCare/artCareEvents-small.png 1x, /assets/activities/projects/artCare/artCareEvents-large.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/activities/projects/artCare/artCareEvents-large.png"/>
                    <TextImageTop right={true} src={'/assets/activities/projects/artCare/artCareEvents-large.png'} alt="Art Care Events"/>
            </picture>  
            <SubHeading>Art Care Events</SubHeading>
            <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/activities/projects/artCare/artCareEvents-small.png 1x, /assets/activities/projects/artCare/artCareEvents-large.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/activities/projects/artCare/artCareEvents-large.png"/>
                    <TextImageTop mobile={true} src={'/assets/activities/projects/artCare/artCareEvents-large.png'} alt="Art Care Events"/>
            </picture>
            <Paragraph>Our Art Care Events aim to support a range of people’s mental health and wellbeing by providing opportunities for people to enjoy fun activities, learn new skills, express themselves, connect with others and develop a sense of community.  </Paragraph>
            <Paragraph>These events will be run as group sessions, classes, fairs and arts nights, and will include a range of artistic activities such as drawing, creative writing, music and dance. </Paragraph>
            <Paragraph>We aim to make our Art Care Events accessible to all, so most can be paid for on a donate-what-you-can basis. 
In addition to running Art Care Events that are open to all, we will be running events specifically for certain groups who are often excluded or more vulnerable, such as children and adults from low-income households, people with disabilities or people experiencing homelessness.</Paragraph>
            <Paragraph>To find details of our upcoming Art Care Events, please head to our <Link href={"/activities/events"}>Events page</Link>.</Paragraph>
            <br/>
            <Paragraph>For Allie’s Art Care project to be successful, we need support from generous individuals and organisations!</Paragraph>
            <Paragraph>If you're interested in donating any arts and crafts supplies or making a financial donation, please head to our <Link href="/be-an-allie/donate">donations page</Link> or donate via our <Link rel="noopener" target="_blank"href="https://crowdfunder.co.uk/art-care">Crowdfunder</Link> campaign.</Paragraph>
            <Paragraph>Raising awareness of our project is also a big help, and we welcome any supporters to share information about Allie's Art Club and our Art Care project online by word of mouth.</Paragraph>
            <Paragraph>For any general enquiries, collaborations or fundraising ideas, please email us at <Link href="mailto:alliesartclub@gmail.com">alliesartclub@gmail.com</Link></Paragraph>
        </Section>
        </Fragment>
    )
}

export default Access2Art;