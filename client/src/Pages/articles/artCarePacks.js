import React from 'react';
import {Article,Section,TextImageTop,Paragraph,SubHeading,NumberedList,ListElement,Link,TextImage,List} from '../../Components/Styled/styled.js';
import {Benefit} from '../../Components/Styled/article.styled.js';
import TitleBanner from '../../Components/titleBanner/titleBanner.js'
const ArtCarePacks=()=>{
    return (
        <Article>
            <Section>
            <TextImageTop alt={"Art Care Packs"} right={true} src={"/assets/activities/projects/artCare/artCarePacks.png"}/>
            <TitleBanner
                centreSrc={"/assets/general/curvedLine.png"}
                title={"Art Care Packs: Tools for Mental Wellbeing"}
            ></TitleBanner>
            <TextImageTop alt={"Art Care Pakcs"} mobile={true} src={"/assets/activities/projects/artCare/artCarePacks.png"}/>
            <Paragraph>As part of our Art Care project, Allie’s Art Club will be creating Art Care Packs to support people’s mental health and wellbeing.</Paragraph>
            <Paragraph>Filled with a range of art supplies such as pens, pencils, paper and notepads, as well as activity sheets and fact sheets on mental health, the Packs aim to provide tools for recipients to benefit their mental and emotional health and their overall sense of wellbeing.</Paragraph>

            </Section>
            <Section>
                <SubHeading>Art for Mental Wellbeing</SubHeading>
                <Paragraph>Engaging in artistic and creative activities has been proven to improve people’s mental health and sense of wellbeing for a number of reasons. Below are some examples:</Paragraph>
                <NumberedList>
                    <ListElement><Benefit>Reduces stress</Benefit></ListElement>
                    <ListElement><Benefit>Improves mood</Benefit></ListElement>
                    <ListElement><Benefit>Encourages self-expression</Benefit></ListElement>
                    <ListElement><Benefit>Helps process emotions</Benefit></ListElement>
                    <ListElement><Benefit>Heals trauma</Benefit></ListElement>
                    <ListElement><Benefit>Creates social bonds</Benefit></ListElement>
                </NumberedList>
                <Paragraph>Art groups and events allow space for people to socialise and develop relationships. </Paragraph>
                <Paragraph>To learn more about how art can benefit mental health and wellbeing, you can read our article <Link>Art & Wellbeing</Link>.</Paragraph>
            </Section>
            <Section>
                <TextImageTop alt={"Lyd and Nancy"} src={"/assets/articles/artCarePacks.png"}/>
                <SubHeading>Art Care Pack Recipients</SubHeading>
                <TextImageTop alt={"Lyd and Nancy"} mobile={true}src={"/assets/articles/artCarePacks.png"}/>
                <Paragraph>We believe everyone should be able to access the many benefits that art can provide, including those who are underprivileged or struggling financially.</Paragraph>
                <Paragraph>Unfortunately, roughly 14.4 million people are currently living in poverty in the UK. 
While so many people are struggling to make ends meet, they are usually unable to afford the materials and equipment needed to engage in art. </Paragraph>
                <Paragraph>Having conducted a questionnaire at <Link href="/discussions/project-updates/allies-food-bank">Allie’s food bank</Link>Allie’s food bank operating at the Ringcross Community Centre in Islington, we found that many families struggling to afford basic necessities were very keen on receiving arts and crafts supplies.</Paragraph>
                <Paragraph>With this in mind, we decided to design our Art Care Packs specifically for children and adults reliant on food banks in the UK, who are facing the mental pressures of poverty and food insecurity.</Paragraph>
                <Paragraph>Piloting our project at the Ringcross Community Centre, we will be handing out our free Art Care Packs to families using our Foundation’s food bank and later asking recipients for feedback on the Packs to see if we can make any improvements and discuss ideas for further support and opportunities.</Paragraph>
                <Paragraph>Once we have successfully raised the resources for the Art Care Packs, donated these at our food bank and reviewed our success, we will then continue our project at other food banks in London and potentially other parts of the UK. </Paragraph>
            </Section>
            <Section>
                <SubHeading>Art Care Supporters</SubHeading>
                <TextImage alt={"Crayons"} src={"/assets/carouselHome/crayons.png"} right={true}/>
                <Paragraph>Allie’s Art Club is a community organisation developed with our charitable Foundation, <Link rel="noopener" target="_blank" href="https://www.awtf.org">AWTF</Link>.</Paragraph>
                <Paragraph>For our Art Care Packs to be successfully delivered, we need funding and materials to be donated to us by generous individuals and organisation. 
</Paragraph>
                <Paragraph>If you are an individual who would like to take part in helping our Club deliver artistic resources for mental wellbeing to families in need, there are many ways you can support us.</Paragraph>
                <Paragraph>For example:</Paragraph>
                <List>
                    <ListElement>Donate through our <Link href="/be-an-allie/donateFunds">donations page</Link> or via our <Link rel="noopener" target="_blank" href="https:www.crowdfunder.co.uk/art-care">Crowdfunder</Link> campaign</ListElement>
                    <ListElement>
                        <Link href="/be-an-allie/donateSupplies">Donate art supplies</Link> in person or by post.
                    </ListElement>
                    <ListElement>
                    Create your own fundraising project and donate any funds or resources raised to us. For example, you could ask for sponsorship for a race or other activity, sell your own artwork or appeal to colleagues, friends and neighbours to donate art supplies in a communal donations box.
                    </ListElement>
                    <ListElement>Show your support and raise awareness by posting about our Art Care project online or spreading the word in person</ListElement>
                    <ListElement><Link href="/be-an-allie/contact-us">Contact us</Link> to tell us about any of your ideas or ask about volunteering opportunities</ListElement>
                </List>
                <Paragraph>If you are part of an organisation and would like to support us, we would also very much appreciate any donations you are willing to give. As a thank you, we can post about your organisation on our website and social media pages to publicise your kindness and generosity, and we are very happy for your organisation to announce your kind support of our Club and the recipients who have benefitted from your donations.</Paragraph>
                <Paragraph>If your organisation is interested in donating, sponsoring or collaborating with us on our Art Care Packs or any other potential project, please send us an email at <Link href="mailto:alliesartclub@gmail.com">alliesartclub@gmail.com</Link>.</Paragraph>
                <Paragraph>With the fantastic work of our volunteers and the kindness of our donors and supporters, we can make a difference to the health and happiness of our communities!</Paragraph>
            </Section>
        </Article>
    )
}

export default ArtCarePacks;