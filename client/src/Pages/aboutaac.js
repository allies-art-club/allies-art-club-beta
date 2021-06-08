import React,{Fragment} from 'react';
import {Section,Paragraph} from '../Components/Styled/styled';
import SideNav from '../Components/sideNav/sideNav.js';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import {ImageWrapper,ImageText} from '../Components/Styled/donate.styled';
import {MissionWrapper,Mission,MissionDesc,ValuesWrap,Values,Tag} from '../Components/Styled/about.styled';
import {CentreImage} from '../Components/Styled/titleBanner.styled'
const AboutAac = () => {
    return (
        <Fragment>
            <SideNav mainCategory={'about'} navLinks={["Allie's Art Club","Allie's Story","Allie's Foundation"]}/>

            <TitleBanner
                    sideSrc1={'/assets/general/heartsL.png'}
                    sideSrc2={'/assets/general/heartsR.png'}
                    centreSrc={'/assets/general/curvedLine.png'}
                    title={"Allie's Art Club"}
                ></TitleBanner>
            <Section id="alliesArtClub">

                <Paragraph>Allie's Art CLub is a community of change-makers and creatives. Formed by passionate volunteers during the Coronavirus pandemic, our club is open to anyone who loves to create and wants to make a positive impact in their community.</Paragraph>
                <Paragraph>We aim to create a safe and inclusive environment where participants feel empowered and connected, able to develop their skills and sense of wellbeing and make a difference in their community through artistic expression, collaboration and creative problem solving.</Paragraph>
                
                <ImageWrapper>
                    <CentreImage src={'/assets/general/ribbon.png'}></CentreImage>
                    <ImageText>We believe in the power of human imagination, creative collaboration and artistic expression in creating positive changes for ourselves and our society.</ImageText>
                </ImageWrapper>
            </Section>
            <TitleBanner
                sideSrc1={'/assets/general/starsL.png'}
                sideSrc2={'/assets/general/starsR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Allie's Mission"}
            ></TitleBanner>
            <Section id="alliesMission">
                    <Paragraph>Allie's Art Club is on a mission to empower communities and bring art to the forefront of social progress.</Paragraph>
                    <Paragraph>We view art as a peaceful yet powerful way to express ourselves and communicate ideas which can lead to cultural, social and political change. Engaging in art and creative activities is also a healthy and effective way of improving personal wellbeing, connecting with others and building relationships.</Paragraph>
                    <Paragraph>Our mission is to:</Paragraph>
                    <MissionWrapper>
                        <Mission>
                            EMPOWER
                        </Mission>
                        <MissionDesc>Empower individuals and communities by providing a platform and tools for them to take action in creating positive changes for themselves and others.</MissionDesc>
                    </MissionWrapper>
                    <MissionWrapper>
                        <Mission>
                            CONNECT
                        </Mission>
                        <MissionDesc>Connect people through common passions and interests and provide a space for them to build relationships and collaborate on creative projects.</MissionDesc>
                    </MissionWrapper>
                    <MissionWrapper>
                        <Mission>
                            CREATE
                        </Mission>
                        <MissionDesc>Create opportunities for people to express themselves, develop skills and contribute to a more fun fair and democratic society through art and creativity.</MissionDesc>
                    </MissionWrapper>
            </Section>
            <TitleBanner
                sideSrc1={'/assets/general/starL.png'}
                sideSrc2={'/assets/general/starR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Allie's Values"}
            ></TitleBanner>
            <Section id="alliesValues">
                <Paragraph>Allie's Art Club is built on a strong base of core values. These values are central to the work we do, directing both the way we work and the outcomes we aim to create.</Paragraph>
                <Paragraph>The image below outlines the Club's 9 core values. You can click on each value to read more about how they guide our mission and ways of working.</Paragraph>
                <ValuesWrap>
                    <Values src={'/assets/about/Values.png'}/>
                </ValuesWrap>
            </Section>
        </Fragment>
    )
}

export default AboutAac;