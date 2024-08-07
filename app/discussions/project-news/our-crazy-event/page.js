import React from 'react';
import TitleBanner from '../../../../components/titleBanner/titleBanner.js';
import {Paragraph,Link,Article,Section} from '../../../../components/Styled/styled.js';
import Carousel from "../../../../components/carousel.js";
import carouselConfig from '../../../../utils/carouselConfig/carouselOurCrazyEvent.js'
import {connect} from 'react-redux';
import {carouselClick} from '../../../../utils/Actions/homeActions';
const ourCrazyEvent=(props)=>{
    return(
        <Article>
        <TitleBanner
            centreSrc={"/assets/general/curvedLine.png"}
            title={"Our CRAZY Event!"}
            ></TitleBanner>
            <Section>

                <Paragraph>
                On the 5th of May, Allie hosted a very special mental health arts event at the Lucky Club. <br/>
                The event was named “CRAZY” as this is a word that is commonly used without much awareness of how it reflects and reinforces prevailing stigma around mental health. 
                </Paragraph>
                <Paragraph>
                The night was a great success, with many new and regular attendees there to learn about mental health from a diverse panel of mental health experts and enjoy some fantastic music and poetry performances by local artists. 
                </Paragraph>
                <Paragraph>
                For the mental health panel, we were joined by Stefan Lewis from the <Link rel="noopener" target="_blank"href="https://alexhigginsacademy.co.uk/">AleX Higgins Academy</Link>, an organisation that supports young people from disadvantaged backgrounds; Mandy Bruce, an arts psychotherapist; and Amina Mohamed, a motivational coach.
                </Paragraph>
                <Paragraph>
                The panel included some very interesting and enlightening conversations around topics such as mental health stigma, mental health support, self-care and supportive relationships. We’re so grateful to Stefan, Mandy and Amina for sharing their wisdom and experience working in the field of mental health!
                </Paragraph>
                <Paragraph>
                We were also joined by poet Lydia Rose, who hosted the event and performed some moving poems about her experience of mental health and self-love, and singer and song-writer Yazmyn Hendrix, who shared some beautiful songs about life, love and relationships. 
                </Paragraph>
                <Paragraph>
                During the rest of the show, a number of poets and musicians performed art inspired by living with a mind and experiencing mental ill-health. We are so proud of everyone who opened up about such an important and personal topic, which is so vital for addressing mental health issues and helping to build supportive communities for those struggling with their mental health. 
                </Paragraph>
                <Paragraph>
                The event also marked the launch of Allie’s zine “CRAZY: An art and Poetry Zine about Mental Health”. You can read more about the zine <Link href="/discussions/project-news/the-crazy-zine">here</Link>.
From our zine and ticket sales, as well as kind donations, we managed to raise over £300 for our <Link href="/activities/projects/art-care">Art Care</Link> project, which aims to support people’s mental health through the arts.
                </Paragraph>
                <Paragraph>
                Thank you to everyone who donated and took part in the event, and to <Link rel="noopener" target="_blank"href="https://youpress.org.uk/">You Press</Link>, an arts organisation based in Newham who collaborated with us to make the event a success! 
                </Paragraph>
                <Carousel square={"yes"}  carouselObj={carouselConfig} carouselClick={props.carouselClick} imageIndices={props.home.imageIndices} direction={props.home.direction}/>
            </Section>
        </Article>
    )
}
const mapStateToProps=(state)=>{
    return {
        home: state.home
    }
    
  }
  const mapDispatchToProps=(dispatch)=>{
    return {
        carouselClick: (direction)=>carouselClick(direction,dispatch)
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ourCrazyEvent);