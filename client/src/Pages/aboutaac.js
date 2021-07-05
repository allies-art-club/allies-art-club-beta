import React,{Fragment} from 'react';
import {Section,Paragraph} from '../Components/Styled/styled';
import SideNav from '../Components/sideNav/sideNav.js';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import {ImageWrapper} from '../Components/Styled/donate.styled';
import Value from '../Components/value.js';
import {MissionWrapper,MissionDesc,MissionBorder,ValuesWrap,ValuesImage} from '../Components/Styled/about.styled';
import {CentreImage} from '../Components/Styled/titleBanner.styled'
import tagMessageArray from './about/tagMessageArray.js';
import StickyNote from '../Components/stickyNote.js';
import {BannerTextImg} from '../Components/Styled/donate.styled.js';
import aboutAccSvg from '../Components/Styled/bannerSvg/aboutAac.svg';
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

                <Paragraph>Allie's Art Club is a community of change-makers and creatives. Formed by passionate volunteers during the Coronavirus pandemic, our Club is open to anyone who loves to create and wants to make a positive impact in their community.</Paragraph>
                <Paragraph>We aim to create a safe and inclusive environment where participants feel empowered and connected, able to develop their skills and sense of wellbeing and make a difference in their community through artistic expression, collaboration and creative problem solving.</Paragraph>
                
                <ImageWrapper>
                    <CentreImage alt={"Text ribbon"}src={'/assets/general/ribbon.png'}></CentreImage>
                    <BannerTextImg aria-label="contains svg"alt="about banner svg text" type="image/svg+xml" data={aboutAccSvg}/>
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
                        
                    <MissionBorder alt="border top" top={true} src={"/assets/general/border.png"}/>
                        <StickyNote
                            values={"true"}
                            benefit={"EMPOWER"}
                        />
                            <MissionDesc>Empower individuals and communities by providing a platform and tools for them to take action in creating positive changes for themselves and others.</MissionDesc>
                        </MissionWrapper>
                    <MissionWrapper>
                        <MissionBorder alt="border top" top={true} src={"/assets/general/border.png"}/>

                        <StickyNote
                            values={"true"}
                            benefit={"CONNECT"}
                        />
                        <MissionDesc>Connect people through common passions and interests and provide a space for them to build relationships and collaborate on creative projects.</MissionDesc>
                    </MissionWrapper>
                    <MissionWrapper>
                        <MissionBorder alt="border top" top={true} src={"/assets/general/border.png"}/>

                        <StickyNote
                            values={"true"}
                            benefit={"CREATE"}
                        />
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
                <Paragraph>The image below outlines the Club's nine core values. You can click on each value to read more about how they guide our mission and way of working.</Paragraph>
                <ValuesWrap>
                    <ValuesImage alt={"Values"} 
                                src={"/assets/about/Values-small.png"}
                                srcSet={'/assets/about/Values-small.png 400w, /assets/about/Values-medium.png 600w, /assets/about/Values-large.png 1080w'} sizes={"(max-width: 767px) calc(95vw - 60px),(max-width: 1024px) 600w, 1080w"}/>
                    {
                        tagMessageArray.map((el,i)=>{
                            return <Value key={i}
                                        id={i+1}
                                        tagWidth={el.tagWidth}
                                        tagHorizontal={el.tagHorizontal}
                                        tagVertical={el.tagVertical}
                                        tagHeight={el.tagHeight}
                                        messageWidth={el.messageWidth}
                                        messageLeft={el.messageLeft}
                                        messageHorizontal={el.messageHorizontal}
                                        messageVertical={el.messageVertical}>
                                            {el.messageContent}
                                    </Value>

                        })
                    }
                </ValuesWrap>
            </Section>
        </Fragment>
    )
}

export default AboutAac;