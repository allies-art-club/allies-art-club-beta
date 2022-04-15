import React from 'react';
import {Section,Paragraph,Article} from '../Components/Styled/styled';
import SideNav from '../Components/sideNav/sideNav.js';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import {MissionWrapper,MissionDesc,MissionBorder} from '../Components/Styled/about.styled';
import StickyNote from '../Components/stickyNote.js';
const AboutMission = () => {
    return (
        <Article>
            <SideNav mainCategory={'about'} navLinks={["Allie's Art Club","Allie's Mission","Allie's Values","Allie's Story"]}/>

            <TitleBanner
                sideSrc1={'/assets/general/starsL.png'}
                sideSrc2={'/assets/general/starsR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Allie's Mission"}
            ></TitleBanner>
            <Section id="alliesMission">
                    <Paragraph>Allie’s mission is to create a culture of community through providing opportunities for people to be creative, develop social connections and generate positive changes for themselves and others through the arts.</Paragraph>
                    <Paragraph>Overall, we aim to:</Paragraph>
                        <MissionWrapper>
                            <MissionBorder alt="border top" top={true} src={"/assets/general/border.png"}/>

                            <StickyNote
                                values={"true"}
                                benefit={"CREATE"}
                            />
                            <MissionDesc>Create opportunities for people to have fun, express themselves and improve their sense of wellbeing through art and creativity.</MissionDesc>
                        </MissionWrapper>
                        <MissionWrapper>
                            <MissionBorder alt="border top" top={true} src={"/assets/general/border.png"}/>

                            <StickyNote
                                values={"true"}
                                benefit={"CONNECT"}
                            />
                            <MissionDesc>Connect people through creative activities and provide space for them to build relationships and collaborate on projects.</MissionDesc>
                        </MissionWrapper>
                    <MissionWrapper>
                        
                        <MissionBorder alt="border top" top={true} src={"/assets/general/border.png"}/>
                            <StickyNote
                                values={"true"}
                                benefit={"EMPOWER"}
                            />
                            <MissionDesc>Empower individuals and communities to contribute to a more happy, healthy and honest world through the arts.</MissionDesc>
                            <MissionBorder alt="border bottom" src={"/assets/general/border.png"}/>

                        </MissionWrapper>
            </Section>
        </Article>
    )
}

export default AboutMission;