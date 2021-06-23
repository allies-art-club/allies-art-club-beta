import React, {Fragment} from 'react';
import SideNav from '../Components/sideNav/sideNav.js';
import {Section,Paragraph,Image,Link,TextImage} from '../Components/Styled/styled.js';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import TextRibbon from '../Components/textRibbon.js';
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
                <TextImage right={true}src={'/assets/footer/awtf_icon.png'} alt="allie's foundation logo"></TextImage>
                <Paragraph>The Alexandra Wylie Foundation (AWTF) was founded in 2010 after the death of Alexandra Wylie.</Paragraph>
                <Paragraph>Alexandra (known as Allie) was a curious, fun-loving individual who cared deeply about societal issues and believed every person should have the opportunities she had to lead a happy and fulfilling life.</Paragraph>
                <Paragraph>Allie's family were inspired to set up a charitable foundation in her name because of her strong desire to help others. Like Allie, the foundation supports social equality and the rights that everyone has to lead a safe and healthy life, filled with opportunities for learning, creativity and fun.</Paragraph>
                <TextRibbon>AWTF aims to support underprivileged children adults and families and provide opportunities for them to cultivate "a passion for life".</TextRibbon>
                <Paragraph>AWTF aims to honour Allie's memory by supporting the health and wellbeing of underprivileged children, adults and families in London.</Paragraph>
                <Paragraph>In addition to providing essentials such as food and clothing, Allie's Foundation also works to improve underprivileged people's access to education and extra-curricular activities.</Paragraph>
                <TextImage  />
                <Paragraph>Running for over 10 years, AWTF has delivered numerous projects that have helped those in need and brightened people's lives</Paragraph>
                <Paragraph>Working with young people, the charity has helped provide mentorship programmes, exciting expeditions and extra-curricular activities such as art classes, sports clubs and cooking lessons.</Paragraph>
                <Paragraph>With awareness of high levels of food poverty in London, the charity has also provided food parcels to families in need during the Summer holidays and has been running a food bank with the Pilion Trust at a North London community centre since 2017.</Paragraph>
                <Paragraph>To learn more about AWTFs food bank, you can read our article <Link href="/discussions/project-updates/allies-food-bank">Allie's Food Bank</Link>.</Paragraph>
                <Paragraph>With rapidly rising hunger and poverty in London due to the impacts of the Coronavirus pandemic, the charity's focus has moved mainly towards providing food and other essentials to families in need.</Paragraph>
                <Paragraph>The following video of AWTF was made in December 2020, showing the fantastic the charity continues to do:</Paragraph>
                <Paragraph>Allie's Art Club was formed during the Coronavirus pandemic by a volunteer at AWTF's food bank. Wanting to help AWTF's goals of improving access to artistic pursuits and creative expression, she worked alongside other volunteers to bring the club into fruition.</Paragraph>
                <Paragraph>With AWTF as our foundation, we have a strong support system that enables us to do the work we love and make a difference in our community</Paragraph>
                <Paragraph>To learn more about the foudners of AWTF and why our club trusts their foundation please view our article <Link href="/discussions/club-articles/awtf-a-charity-we-can-trust">AWTF: A Charity We Can Trust</Link>.</Paragraph>
                <Image alt="heart picture right" src={'/assets/general/heartsR.png'}right={true}/>
            </Section>
        </Fragment>
    )
}

export default AboutAlliesFoundation;