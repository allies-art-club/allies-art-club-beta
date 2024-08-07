import React from 'react';
import {Section,Paragraph,Article} from '../../../components/Styled/styled';
import SideNav from '../../../components/sideNav/sideNav.js';
import TitleBanner from '../../../components/titleBanner/titleBanner.js';
import Value from '../../../components/value.js';
import {ValuesWrap,ValuesImage} from '../../../components/Styled/about.styled';
import tagMessageArray from '../../../utils/tagMessageArray.js';
const AboutValues = () => {
    return (
        <Article>
            <SideNav mainCategory={'about'} navLinks={["Allie's Art Club","Allie's Mission","Allie's Values","Allie's Story"]}/>

            <TitleBanner
                sideSrc1={'/assets/general/starL.png'}
                sideSrc2={'/assets/general/starR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Allie's Values"}
            ></TitleBanner>
            <Section id="alliesValues">
                <Paragraph>Allie’s Art Club is built on a strong base of core values. These values are central to the work we do, directing both the way we work and the outcomes we aim to create.</Paragraph>
                <Paragraph>The image below outlines Allie’s nine core values. You can click on each value to read more about how they guide our mission and way of working.</Paragraph>
                <ValuesWrap>
                    <picture>
                        <source media="(max-width: 480px)" srcSet="/assets/about/Values-small.png 1x, /assets/about/Values-large.png 2x"/>
                        <source media="(min-width: 481px) and (max-width: 1024px)" srcSet="/assets/about/Values-medium.png 1x, /assets/about/Values-large.png 2x"/>
                        <source media="(min-width: 1025px)" srcSet="/assets/about/Values-large.png"/>
                        <ValuesImage alt={"Values"} 
                                    src={"/assets/about/Values-small.png"}
                        />
                    </picture>
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
        </Article>
    )
}

export default AboutValues;