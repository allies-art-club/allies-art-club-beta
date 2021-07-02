import React from 'react';
import TitleBanner from '../../Components/titleBanner/titleBanner.js';
import {Paragraph,TextImage,Article,Quote,Image,Link} from '../../Components/Styled/styled.js';
const FoodBank=()=>{
    return(
        <Article>
            <TitleBanner
                title={"Allie's Food Bank"}
            ></TitleBanner>
            <TextImage alt="Child holding food" right={true} src={"/assets/carouselHome/Lexi.png"}/>

            <Paragraph>Food poverty is a critical issue in the UK.
Families living in London are particularly
vulnerable to hunger and malnutrition, as
the nation's capital has the highest
number of people living below the
poverty line.</Paragraph>
<Paragraph>
A survey conducted by the Mayor of
London in 2019 showed that almost 2 million
people - including 400,000 children - struggle
to afford or access a sufficient diet.
With rising unemployment and poverty since the start of the
Coronavirus pandemic, the number of people struggling to feed
themselves and their families has increased dramatically.
</Paragraph>
<TextImage alt={"Food Bank"} right={false}src={"/assets/articles/foodBank/foodBank1.png"}/>
<Paragraph>Allie's food bank has been running since
2017 to help provide basic necessities to
families in need in North London.</Paragraph>
<Paragraph>Open three days a week at the Ringcross
Community Centre in Holloway, the food
bank provides an array of fresh,
packaged and tinned food, as well as
toiletries. They also deliver food parcels
to households who are self-isolating or
unable to go out to get food.</Paragraph>
<Paragraph>With the spread of COVID-19 and rising poverty, the number of people
using Allie's food bank has increased 1,500% since March 2019.</Paragraph>
<Paragraph>Thanks to all our frontline volunteers, community workers and generous
donors, Allie's food bank has been able to support over 485 families
during the global crisis.</Paragraph>
<TextImage alt={"Iva"} right={true} src={"/assets/articles/foodBank/foodBank2.png"}/>
<Quote>"The food bank is extraordinarily helpful and supportive."</Quote>
<Paragraph>Iva has been a regular visitor at Allie's
food bank since the start of the
pandemic.</Paragraph>
<Paragraph>"The food bank is extraordinarily helpful
and supportive", she told us, "Without the
food bank I think we would be
extremely vulnerable and would struggle
way more."</Paragraph>
<Paragraph>As well as supporting her dietary needs, Iva says visiting the food bank
and interacting with the volunteers has improved her mental health.</Paragraph>
<TextImage alt={"David"} right={false} src={"/assets/articles/foodBank/foodBank3.png"}/>
<Quote>"It's good to know you're helping out."</Quote>
<Paragraph>David is a volunteer at Allie's food
bank, and helps set up stalls,
organise donations and give out items
to visitors.</Paragraph>
<Paragraph>"You meet a lot of different types
of people in different states of
need, and it's good to know you're
helping out.", he told us.</Paragraph>
<Paragraph>David had been using the food bank himself for a few months after
losing his job, and after getting to know the staff and volunteers
decided to help out; "I love it! We all get on, we all get down to work.".</Paragraph>
<Paragraph>Allie's food bank is open every Monday, Wednesday and Friday from
12pm - 4pm for anyone who needs support.</Paragraph>
<Paragraph>Donations to Allie’s food bank are greatly appreciated, and you can find out how on <Link rel="noopener"target="_blank"href="https://www.awtf.org/food-appeal">AWTF’s website</Link>.</Paragraph>
<Paragraph>New volunteers are more than welcome, and can arrive at the
Ringcross Community Centre any time from 9am on the days the food
bank is open.</Paragraph>
<Image alt="hearts" right={true} src={"/assets/general/heartsR.png"}/>

        </Article>
    )
}

export default FoodBank;