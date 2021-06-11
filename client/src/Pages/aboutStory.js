import React,{Fragment} from 'react';
import { Paragraph,Section,TextImage } from '../Components/Styled/styled.js';
import SideNav from '../Components/sideNav/sideNav.js';
import {Quote,SubTitle} from '../Components/Styled/about.styled.js';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import TextRibbon from '../Components/textRibbon.js';

const AboutAlliesStory=()=>{
    return(
        <Fragment>
            <SideNav mainCategory={'about'} navLinks={["Allie's Art Club","Allie's Story","Allie's Foundation"]}/>

            <TitleBanner
                sideSrc1={'/assets/general/heartsL.png'}
                sideSrc2={'/assets/general/heartsR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Allie's Story"}
            ></TitleBanner>
            <Section id="alliesStory">
                <Paragraph>Alexandra Wylie (known as Allie) was born in January 1993 and was an extraordinarily unique, gifted and graceful individual.</Paragraph>
                <Paragraph>Allie was raised in a safe, loving and nurturing home with as many opportunities to learn, play and explore a young girl could dream of..</Paragraph>
                <Paragraph>Her family blessed her with the most beautiful childhood they could, yet she was their most beautiful gift of all</Paragraph>
                <Paragraph>For 17 years, Alexandra shone with such a passion strength and vibrancy, until her hard-fought battle with cancer claimed her life.</Paragraph>
                <TextRibbon>Allie left behind a huge number of admiring friends and a devoted family, as well as her legacy as an extraordinary individual with "a passion for life".
                </TextRibbon>
                <Paragraph>Allie was known for her dazzling smile, vibrant personality and fantastic sense of humour. She loved to explore a huge range of creative pursuits, and was particularly talented at ice-skating, theatre, cello and singing. She was an incredibly hard-working and intelligent student receiving 9A*s for her GCSEs.</Paragraph>
                
                <TextImage src={'/assets/about/allieSoup.png'}/>
                  
                        <Paragraph>As well as her dedication to pursuing artand education, Allie was committed to treating others with kindness and compassion.</Paragraph>
                         <Paragraph>With a strong desire to help those in need, Allie began volunteering at a local soup kitchen as a teenager and organised a fundraising event for the charity Wings of Hope.</Paragraph>
                
                    
                <Paragraph>In a message after her death, Wings of Hope described Allie as:</Paragraph>
                <Quote>"an extraordinary woman who truly encompassed the spirit of Wings of Hope, working with compassion, innovation and dedication to help those in need."</Quote>
                <Paragraph>Allie loved ice-skating and spent a lot of time skating at Alexandra Palace in North London. The video below was created by friends at "Ally Pally" to commemorate Allie's life.</Paragraph>
                <SubTitle>Allie's Memorial at Alexandra Palace:</SubTitle>
                <Paragraph>If you would like to know more about Allie's short yet brilliant life, y ou can read our article Remembering Allie, a collection of memories by her friends and family.</Paragraph>
                <Paragraph>Allie's Art Club is proud to be named after such an inspiring young woman. We believe everyone deserves the opportunities that Allie had to flourish into the talented young woman so many had grown to love. We hope to honour Allie's memory in all of the work we do, continuing her lived principles of learning, kindness and fun.</Paragraph>
                <Paragraph>Thank you Allie for all that you have inspired us to do</Paragraph>
            </Section>
        </Fragment>

    )
}

export default AboutAlliesStory;