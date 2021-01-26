import React from 'react';
import {HeadingMain,Section,SubSection,Paragraph,SubHeading} from '../Components/Styled/styled'
import PageNav from '../Components/pageNav'

const About = () => {
    return (
        <>
            <HeadingMain>About Allie's Art Club</HeadingMain>
            <PageNav pageSections={["Allie's Story",{section:'The Allie Way',subSectionArray:['Values','Commitments','Strategy']},'The Allie Foundation']} />

            <Section id="AlliesStory">
                <Paragraph>Alexandra was born in 1993 and was an extraordinarily unique, gifted and graceful individual. She was known within her community for her passion to explore and master a huge range of creative pursuits, including ice skating, ballet, theatre, cello and singing, and was an incredibly talented student, receiving 9 A*s for her GCSEs. </Paragraph>
                <Paragraph>As well as art and education, Allie was committed to treating others with kindness and compassion, and began volunteering at a local soup kitchen as a teenager.</Paragraph>
                <Paragraph>It was an indescribable loss when Allie passed away from an incurable form of cancer at the age of 17.
She left behind a huge number of admiring friends and a devoted family, as well as her legacy as an extraordinary individual with “a passion for life”. </Paragraph>
                <Paragraph>After her death, her family founded the Alexandra Wylie Tower Foundation (AWTF), a charity which supports underprivileged children’s access to education, creative pursuits and hobbies. Like Alexandra, the charity believes everyone should have access to learning, creativity and fun. </Paragraph>
                <Paragraph>Alexandra’s charity functions as the stronghold of Allie’s Art Club, storing all funds and resources and working on the ground to deliver goods and services to those in need. The charity also provides essentials such as food and clothing.</Paragraph>
            </Section>
            <Section id="TheAllieWay">
                <SubSection id="Values">
                    <Paragraph>Allie’s Art Club provides an open and honest platform built on strong central values.</Paragraph>
                    <Paragraph>NEON CALLIGRAPHY PLACEHOLDER</Paragraph>
                    <SubHeading>Personal Well Being</SubHeading>
                    <Paragraph></Paragraph>
                    <SubHeading>Community</SubHeading>
                    <Paragraph>Humans are social beings and are reliant on one another for their physical, mental, emotional and spiritual wellbeing. Being part of an interdependent community makes life both possible and worthwhile. </Paragraph>
                    <SubHeading>Inclusion</SubHeading>
                    <Paragraph>Allie’s Art Club are an inclusive alliance and welcome everyone from any religion, race, ethnicity, gender identity, sexual orientation, age, ability and income.</Paragraph>
                    <SubHeading>Diversity</SubHeading>
                    <Paragraph>We value what each person has to bring to our network and the opportunity to share diverse ideas, experiences, information, skills and resources for common wellbeing and collective progress.</Paragraph>
                    <SubHeading>Communication</SubHeading>
                    <Paragraph>Communication is a two-way process, and listening to others helps develop our awareness of their experiences - putting our own lives into perspective and allowing space for mutual cooperation and growth.</Paragraph>
                    <SubHeading>Expression</SubHeading>
                    <Paragraph>Self-expression is vital in the process of self-empowerment, and having our thoughts and experiences heard by other people helps reaffirm our own existence.</Paragraph>
                    <SubHeading>Honesty</SubHeading>
                    <Paragraph>Allie’s Art Club values open and honest communication, and hope to build a platform where people feel free to share their thoughts and experiences through various mediums without feeling threatened by fear or shame. We aim to communicate as transparently as possible and remain open to feedback and criticism as this enables us to function as a trustworthy collective which takes responsibility for any mistakes and constantly strives to improve.</Paragraph>
                </SubSection>
                <SubSection id ="Commitments"></SubSection>
                    <Paragraph>
                        Allie’s Art Club is committed to taking action built on Allie’s strong values. 
                    </Paragraph>
                    <Paragraph>NEON CALLIGRAPHY PLACEHOLDER!!!</Paragraph>
                <SubSection id ="Strategy"></SubSection>
            </Section>
            <Section id="TheAllieFoundation">
                <Paragraph>

                </Paragraph>
            </Section>
        </>
    )
}

export default About;