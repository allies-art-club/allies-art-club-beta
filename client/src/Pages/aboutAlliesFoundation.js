import React, {Fragment} from 'react';
import SideNav from '../Components/sideNav/sideNav.js';
import {Section,Paragraph,Image,Link,TextImage} from '../Components/Styled/styled.js';
import {IFrame} from '../Components/Styled/about.styled.js';

import TitleBanner from '../Components/titleBanner/titleBanner.js';
import {CentreImage} from '../Components/Styled/titleBanner.styled'
import {BannerTextImg,ImageWrapper} from '../Components/Styled/donate.styled.js';
import alliesFoundation from '../Components/Styled/bannerSvg/alliesFoundation.svg';
const AboutAlliesFoundation = () =>{
    return(
        <Fragment>
            <SideNav mainCategory={'about'} navLinks={["Allie's Art Club","Allie's Story","Allie's Foundation"]}/>
            <TitleBanner
                    sideSrc1={'/assets/general/starsL.png'}
                    sideSrc2={'/assets/general/starsR.png'}
                    centreSrc={'/assets/general/curvedLine.png'}
                    title={"Allie's Foundation"}
                ></TitleBanner>
            <Section id="alliesFoundation">
                <TextImage right={true}src={'/assets/about/awtf_logo.png'} alt="allie's foundation logo"></TextImage>
                <Paragraph>The Alexandra Wylie Foundation (AWTF) was founded in 2011 after the death of Alexandra Wylie.</Paragraph>
                <Paragraph>Alexandra (known as Allie) was a curious and fun-loving individual who cared deeply about societal issues and believed every person should have the opportunities she had to lead a happy and fulfilling life.</Paragraph>
                <Paragraph>Allie's family were inspired to set up a charitable foundation in her name because of her strong desire to help others. Like Allie, the foundation supports social equality and the rights that everyone has to lead a safe and healthy life, filled with opportunities for learning, creativity and fun.</Paragraph>
                <ImageWrapper>
                    <CentreImage alt={"Text ribbon"}src={'/assets/general/ribbon.png'}></CentreImage>
                    <BannerTextImg aria-label="contains svg" alt="allie's story banner svg text" type="image/svg+xml" data={alliesFoundation}/>
                </ImageWrapper>
                <Paragraph>AWTF aims to honour Allie's memory by supporting the health and wellbeing of underprivileged children, adults and families in London.</Paragraph>
                <Paragraph>In addition to providing essentials such as food and clothing, Allie's Foundation also works to improve underprivileged people's access to education and extra-curricular activities.</Paragraph>
                <TextImage alt="allie's art foundation members" src={"/assets/articles/aCharityWeCanTrust/aCharityWeCanTrust3.png"} />
                <Paragraph>Running for over 10 years, AWTF has delivered numerous projects that have helped those in need and brightened many people's lives</Paragraph>
                <Paragraph>Working with young people, the charity has helped provide mentorship programmes, exciting expeditions and extra-curricular activities such as art classes, sports clubs and cooking lessons.</Paragraph>
                <Paragraph>With awareness of high levels of food poverty in London, the charity has also provided food parcels to families in need during the Summer holidays and has been running a food bank with the Pilion Trust at a North London community centre since 2017.</Paragraph>
                <Paragraph>To learn more about AWTFs food bank, you can read our article <Link href="/discussions/project-updates/allies-food-bank">Allie's Food Bank</Link>.</Paragraph>
                <Paragraph>With rapidly rising hunger and poverty in London due to the impacts of the Coronavirus pandemic, the charity's focus has moved mainly towards providing food and other essentials to families in need.</Paragraph>
                <Paragraph>The following video of AWTF was made in December 2020, showing the fantastic work the charity continues to do:</Paragraph>
                <IFrame  src="https://www.youtube.com/embed/ogOJ-YFpac8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                <Paragraph>Allie’s Art Club was formed during the Coronavirus pandemic by Allie’s childhood friend, who was volunteering at AWTF’s food bank. Passionate about the charity’s goals of improving access to artistic pursuits and creative expression, she worked alongside other volunteers to bring the Club into fruition.</Paragraph>
                <Paragraph>With AWTF as our foundation, we have a strong support system that enables us to do the work we love and make a difference in our community</Paragraph>
                <Paragraph>To learn more about the founders of AWTF and why our Club trusts their foundation please view our article <Link href="/discussions/club-articles/awtf-a-charity-we-can-trust">AWTF: A Charity We Can Trust</Link>.</Paragraph>
                <Image alt="heart picture right" src={'/assets/general/heartsR.png'}right={true}/>
            </Section>
        </Fragment>
    )
}

export default AboutAlliesFoundation;