import React from 'react';
import {ProjectBanner} from '../../Components/Styled/projects.styled.js';
import {Paragraph,Link} from '../../Components/Styled/styled.js';
import TextRibbon from '../../Components/textRibbon.js';
const Access2Art=()=>{
    return (
        <>
            <ProjectBanner/>
            <Paragraph>Whether you're painting a picture, writing a story or singing a song, art and creativity bring joy and wellbeing to so many people's lives. In fact, studies have shown that engaging in artistic activities has tremendous benefits for people's mental health, sense of wellbeing and overall quality of life.</Paragraph>
            <Paragraph>"Access 2 Art" is the first project being launched by Allie's Art Club, which aims to support the mental health and wellbeing of underpriveleged families through providing the tools and resources needed to engage in art.</Paragraph>
            <TextRibbon>We believe everyone should be able to access the many benefits that art can provide including those who are underpriveleged or struggling financially.</TextRibbon>
            <Paragraph>
                Approximately 14.4 million people are currently living in poverty in the UK. As the impacts of the Coronavirus pandemic continue, the number of people living in poverty is predicted to rise drastically. With many families struggling to make ends meet, they are usually unable to afford the materials and equipment needed to engage in art.
            </Paragraph>
            <Paragraph>Having conducted a questionnaire at our Foundation's food bank operating at the Ringcross Community Centre in Islington, we found that many families struggling to afford basic necessities were very keen on receiving arts and crafts supplies.</Paragraph>
            <Paragraph>Plotting our project at the Ringcross Community Centre, we will be donating boxes filled with a range of art supplies such as notepads, colouring-in books, pens, pencils and crayons.</Paragraph>
            <Paragraph>Once we have successfully raised and donated art suppliesfor families at the Ringcross, we will then continue our project at other food banks in London and potentially other parts of the UK.</Paragraph>
            <Paragraph>For our project to be successful we need support from generous individuals and organisations!</Paragraph>
            <Paragraph>If you're interested in donating any arts and crafts supplies or making a financial donation, please head to our <Link href="/be-an-allie/donate">donations page</Link> or donate via our <Link>Crowdfunder</Link> campaign.</Paragraph>
            <Paragraph>Raising awareness of our project is also a big help, and we welcome any supporters to share information about Allie's Art Club and our Access 2 Art project online by word of mouth.</Paragraph>
            <Paragraph>For any general enquiries, collaborations or fundraising ideas, please email us at <Link href="mailto:alliesartclub@gmail.com">alliesartclub@gmail.com</Link></Paragraph>
        </>
    )
}

export default Access2Art;