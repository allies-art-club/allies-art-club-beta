import React from 'react';
import TitleBanner from '../../Components/titleBanner/titleBanner.js';
import {Paragraph,TextImage,Article,ImageWrapper,Floater,Image} from '../../Components/Styled/styled.js';
const WhatIsArt=()=>{
    return(
        <Article>

            <TitleBanner
                centreSrc={"/assets/general/curvedLine.png"}
                title={'What is Art?'}
            >
            </TitleBanner>
            <TextImage alt="Art covering tunnnel walls" right={true }src={'/assets/articles/whatIsArt/whatIsArt1.png'}/>
            <Paragraph>The definition of art has been analysed and debated for milennia by scholars, philosophers and artists alike. These debates usually exclude the views and opinions of the wider public, who experience art every day in their homes, cities, schools and places of worship.</Paragraph>
            <Paragraph>Nowadays, art is generally seen as a human activity that involves the creation of visual and/or auditory artifacts, appreciate for their beauty, emotional impact or conceptual ideas.</Paragraph>

            <Paragraph>The expresion and interpretation of art is a deeply personal experience, drawing on an individual's tastes, background and cultural setting. A person's unique history and environment can determine whether they love pop, rock, rap, jazz or classical music, prefer sketching natural landscapes or spray-painting urban territories, attend an open mic spoken word event or an Avant-garde photo gallery, and if their favourite evening entertainment is a romantic theatre performance or a gripping show on TV.</Paragraph>
            <TextImage alt="woman on phone" src={"/assets/articles/whatIsArt/whatIsArt2.png"}></TextImage>
            <Paragraph>Art encompasses so much of what we do, see and hear on a day-to-day basis, whether we are aware of it or not. The clothes we choose to wear, the advertisements we pass on the road, the buildings we enter for work or play, and the images we post or scroll past on the social media are all expressions of art that affect our sense of knowing and experiencing the world.</Paragraph>

            <Paragraph>Art comes in many different forms, and can have a variety of impacts on our thoughts and emotions depending on who we are and what we've been through. A poem about young love can make us laugh if we are happily married or cry if we are recently bereaved, and a beautiful portrait can make us look with admiration or jealousy depenging on how we feel towards our own sense of self and personal image. Art can stir up and arouse emotions, and heavily influence how we feel towards outer and inner realities.</Paragraph>
            <TextImage alt="Camera shot" src={"/assets/articles/whatIsArt/whatIsArt3.png"} right={true}/>
            <Paragraph>Art can also influence our concepts, beliefs and opinions, which can shape how we behave and interact with others and our environment. For example, an exhibition of ancient archaelogical artifacts could give someone a greater understanding and appreciation of a different culture, while a chilling documentary about climate change or poverty might inspire some to take on more eco-friendly habits or donate to a charity.</Paragraph>

            <Paragraph>As a means of expression, creating art is a way of capturing and communicating our thoughts, feelings, desires, ideas and experiences. Whatever art form we choose to create, we are engaging our inner experience and imagination, converting these into a physical product which can be seen, heard, felt or understood. Whether we are creating art to show others or to enjoy it for ourselves, this process can be incredibly cathartic and can develop our understanding of ourselves and our stories.</Paragraph>
            <TextImage alt={"Heart"} src={"/assets/articles/whatIsArt/whatIsArt4.png"}/>
            <Paragraph>Communicating through art can also help others see our point of view and understand our experiences. Sometimes art can do this subtly, like a beautiful piece of embroidery which expresses the maker's feelings of joy and belonging. Other times art can make bold statements, like placards at political demonstrations, depictions of violent war zones or meaningfully illustrated quotes.</Paragraph>
            <Paragraph>Art is everywhere and all around us - no matter who we are or where we are from human imagination has come into form in some shape or size in the variety of places we exist. Art is a powerful way to express ourselves and influence the world around us as individuals and as a collective. Whether we create to educate, inspire, heal or persuade, build beautiful places or useful objects, or simply to play and have fun, how we choose to use art is up to us.</Paragraph>

            <ImageWrapper>
                <Floater right={true}/>
                <Image alt={"heartsR"}src={"/assets/general/heartsR.png"}/>
            </ImageWrapper>
            
        </Article>
    )
}

export default WhatIsArt;