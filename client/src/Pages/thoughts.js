import React from 'react';
import {HeadingMain,Section} from '../Utils/Components/Styled/styled'
import PageNav from '../Utils/Components/pageNav'
const Thoughts = () => {
    return (
        <>
            <HeadingMain>Thoughts</HeadingMain>
            <PageNav pageSections={[{section:"Allie's Blog",subSectionArray:['Art & Creativity','Activism','Social Justice','Environment']},'Club News']}/>
            <Section id="AlliesBlog">
            </Section>
            <Section id="ClubNews">

            </Section>
        </>
    )
}

export default Thoughts;