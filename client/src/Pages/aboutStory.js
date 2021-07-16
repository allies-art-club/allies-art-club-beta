import React,{Fragment} from 'react';
import { Paragraph,Section,TextImage,InlineIcon,Link} from '../Components/Styled/styled.js';
import SideNav from '../Components/sideNav/sideNav.js';
import {Quote,SubTitle,IFrame} from '../Components/Styled/about.styled.js';
import {RibbonImage} from '../Components/Styled/titleBanner.styled'

import {BannerTextImg,ImageWrapper} from '../Components/Styled/donate.styled.js';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import alliesStory from '../Components/Styled/bannerSvg/alliesStory.svg';

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
                <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/about/allie-small.png 1x, /assets/about/allie-2x.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/about/allie-large.png"/>
                    <TextImage right={"true"} alt="allie" src={"/assets/about/allie-large.png"} />
                </picture>
                <Paragraph>Allie was raised in a safe, loving and nurturing home with as many opportunities to learn, play and explore a young girl could dream of.</Paragraph>
                <Paragraph>Her family blessed her with the most beautiful childhood they could, yet she was their most beautiful gift of all.</Paragraph>
                <Paragraph>For 17 years, Alexandra shone with such passion, strength and vibrancy, until her hard-fought battle with cancer claimed her life.</Paragraph>
                
                <ImageWrapper>
                    <RibbonImage alt={"Text ribbon"}src={'/assets/general/ribbon.png'}></RibbonImage>
                    <BannerTextImg article={true}aria-label="contains svg" alt={"allie story"} type="image/svg+xml" data={alliesStory}/>
                </ImageWrapper>
                <Paragraph>Allie was known for her dazzling smile, vibrant personality and fantastic sense of humour.</Paragraph>
                <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/about/allieSoup-small.png 1x, /assets/about/allieSoup-2x.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/about/allieSoup-large.png"/>
                    <TextImage alt="allie soup" src={'/assets/about/allieSoup-large.png'}/>
                </picture>
                <Paragraph>She loved to explore a huge range of creative pursuits, and was particularly talented at ice-skating, theatre, cello and singing. She was an incredibly hard-working and intelligent student, receiving 9A*s for her GCSEs.</Paragraph>
                
                  
                        <Paragraph>As well as her dedication to pursuing art and education, Allie was committed to treating others with kindness and compassion.</Paragraph>
                         <Paragraph>With a strong desire to help those in need, Allie volunteered at a local homeless shelter as a teen and organised multiple fundraising events for the charity Wings of Hope.</Paragraph>
                
                    
                <Paragraph>In a message after her death, Wings of Hope described Allie as:</Paragraph>
                <Quote>"an extraordinary woman who truly encompassed the spirit of Wings of Hope, working with compassion, innovation and dedication to help those in need."</Quote>
                <Paragraph>Allie loved ice-skating and spent a lot of time at Alexandra Palace skating rink in North London. The video below was created by friends at ‘Ally Pally’ to commemorate Allie’s life.</Paragraph>
                <SubTitle>Allie's Memorial at Alexandra Palace:</SubTitle>
                <IFrame  src="https://www.youtube.com/embed/55DNcB5R4hY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                <Paragraph>If you would like to know more about Allie's short yet brilliant life, you can read our article <Link href="/discussions/club-articles/remembering-allie">Remembering Allie</Link>, a collection of memories by her friends and family.</Paragraph>
                <Paragraph>Allie's Art Club is proud to be named after such an inspiring young woman. We believe everyone deserves the opportunities that Allie had to flourish into the talented young woman so many had grown to love. We hope to honour Allie's memory in all of the work we do, continuing her lived principles of learning, kindness and fun.</Paragraph>
                <Paragraph>Thank you Allie for all that you have inspired us to do <InlineIcon alt={"Heart"} src={"/assets/general/blackHeart.png"}/>.</Paragraph>
            </Section>
        </Fragment>

    )
}

export default AboutAlliesStory;