import React from 'react';
import TitleBanner from '../../Components/titleBanner/titleBanner.js';
import {Paragraph,TextImage,Article,Section,Link,Image,Icon} from '../../Components/Styled/styled.js';
const CharityWeCanTrust=()=>{
    return(
        <Article>
            <Section>
                <TextImage alt="awtf logo" src={'/assets/footer/awtf_icon.png'} />
                <TitleBanner 
                    title={"AWTF\nA Charity We Can Trust"}
                ></TitleBanner>
                <Paragraph>The Alexandra Wylie Tower Foundation (AWTF) was founded in November 2010 by Lindsey and Rob Wylie.</Paragraph>
                <Paragraph>Lindsey and Rob created the charitable foundation after their daughter, Alexandra (known as Allie), passed away from a rare form of cancer at the age of 17.</Paragraph>
                <Paragraph>The charity supports the health and wellbeing of underpriveleged children, adults and families in London by providing essentials such as food and clothing, as well as creating opportunities for young people to engage in extra-curricular activities.</Paragraph>
            </Section>
            <Section>
                <TextImage alt="Allie" right={false}src={"/assets/articles/aCharityWeCanTrust/aCharityWeCanTrust1.png"}/>
                <TitleBanner
                    sub={true}
                    sideSrc1={"/assets/general/heartsL.png"}
                    title={"Alexandra Wylie"}
                ></TitleBanner>
                <Paragraph>Allie was known for her dazzling smile and vibrant personality.</Paragraph>
                <Paragraph>She was an incredibly talented and intelligent student, and loved explore a huge range of hobbies.</Paragraph>
                <Paragraph>Allie was also passionate about helping others, and had organised charity fundraising events and volunteered at a local soup kitchen. You can read more about Alexandra on our page <Link href="/about/allies-story">Allie's Story</Link>.</Paragraph>
                <Paragraph>The Foundation aims to keep Alexandra's memory alive by:</Paragraph>
                <Paragraph>"Making it possible for underprivileged young people to achieve and cultivate their dreams through involvement in extra-curricular activities which can broaden their horizons and help them achieve their dreams. This reflects both Allie’s vehement disapproval of social exclusion and her sense of fun and adventure."</Paragraph>
            </Section>
            <Section>
                <TextImage alt="Lindsey and Rob" right={false} src={"/assets/articles/aCharityWeCanTrust/aCharityWeCanTrust2.png"}/>
                <TitleBanner
                    sub={true}
                    title={"The Founders:\nLindsey & Rob Wylie"}
                >

                </TitleBanner>
                <Paragraph>Lindsey and Rob Wylie are Allie's beloved parents.</Paragraph>
                <Paragraph>Allie's parents raised her in a safe, caring and nurturing home, providing all the opportunities she needed to flourish into the outstanding young woman many had grown to adore.</Paragraph>
                <Paragraph>
                Lindsey and Rob Wylie are "the beating hearts" of AWTF, with their strong sense of love, compassion and integrity at the core of the Foundation. Lindsey undertakes the day-to-day running of the charity, including project management, community fundraising and mentoring volunteers. With a background in charity work and a truly kind and generous soul, Lindsey is valued by so many people she has helped in her community. Rob also lends his kindness and generosity to the charity, helping set up fundraising events and delivering food and clothes parcels. As an advisor in environmental protection andinnovation for numerous companies, Rob understands the responsibility that organisations have in developing ways of making profit while protecting and serving people and the planet.
                </Paragraph>
            </Section>
            <Section>
                <TextImage alt="AWTF members" right={true} src={'/assets/articles/aCharityWeCanTrust3.png'} />
                <TitleBanner
                    sub={true}
                    title={"A Trustworthy Charity"}
                ></TitleBanner>
                <Paragraph>Running for over 10 years, AWTF has delivered numerous projects and events that have brought people together and helped those in need.</Paragraph>
                <Paragraph>
                Working with young people, the charity has helped provide mentorship programmes, fun expeditions and
extra-curricular activities such as art classes, sports clubs and cooking lessons. With awareness of high levels of food poverty in London, the charity has also provided food parcels to families in need during the Summer holidays, and has been running a food bank with the Pilion Trust at the Ringcross Community Centre in North London since 2017.
                </Paragraph>
                <Paragraph>
                To learn more about AWTF'S food bank, you can read our article <Link href="/articles/allies-food-bank">Allie's Food Bank</Link>.
                </Paragraph>
                <TextImage alt={"AWTF members"} right={true} src={'/assets/articles/aCharityWeCanTrust/aCharityWeCanTrust4.png'}/>
                <Paragraph>To raise funds that support young people and families in London, AWTF has delivered a number of fundraising fairs and events. Every year, AWTF
has organised a "Pinknic" at Waterlow Park - a lively and colourful fair filled with fresh food and fun activities.</Paragraph>
<Paragraph>In 2016, the charity broke the world record for the longest conga line on ice, with over 300 people skating together to raise funds for the charity's cause.</Paragraph>
<Paragraph>
AWTF's strong sense of integrity runs all the way through the
organisation, with 100% of funds raised going towards supporting local
communities and people in need. They are honest and transparent
about the way they work, why they exist and what their goals are.
</Paragraph>
            </Section>
            <Section>
                <TitleBanner
                    sub={true}
                    title={"A Reliable Foundation"}
                >

                </TitleBanner>
                <TextImage alt={"Art @ AWTF"} right={true} src={'/assets/articles/aCharityWeCanTrust5.png'}/>
                <Paragraph>AWTF functions as the stronghold of Allie's Art Club, storing all funds and resources and working on the ground to deliver goods and services to those in need.</Paragraph>
                <Paragraph>
                The Club trusts the Foundation to support our needs and help us create a fair and inclusive environment that makes a difference to our community. In turn, we support the Foundation by raising awareness and funding, championing their values and actualizing their goals to broaden people's horizons and cultivate a "passion for life" through artistic pursuits and creative expression.
                </Paragraph>
                <Paragraph>We <Icon alt={"Heart"}/> AWTF and have great faith that this trust-worthy and reliable Foundation can support us in building an ethical and collaborative community of empowered artists and change-makers.</Paragraph>
                <Image alt="stars" src={"/assets/general/starsR.png"}/>
            </Section>
        </Article>
    )
}
export default CharityWeCanTrust