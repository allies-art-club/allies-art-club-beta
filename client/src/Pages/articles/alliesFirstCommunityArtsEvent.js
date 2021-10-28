import React from 'react';
import TitleBanner from '../../Components/titleBanner/titleBanner.js';
import {connect} from 'react-redux';
import {carouselClick} from '../../Actions/homeActions';
import {Paragraph,TextImage, Section,Article,Quote} from '../../Components/Styled/styled.js';
import {ImageLabel,ImageLabelArrow,ImageLabelText,CarouselCaption} from '../../Components/Styled/article.styled.js'

import Carousel from '../../Components/carousel.js';
import carouselConfig from '../carouselConfig/carouselAlliesFirstCommunityArtsEvent.js';

const AlliesFirstCommunityArtsEvent=(props)=>{
    return(
        <Article>
            <TitleBanner
                centreSrc={"/assets/general/curvedLine.png"}
                title={"Allie's First Community Arts Event"}
            ></TitleBanner>
            <Section id="carouselSection">
                <Paragraph>On the 4th of September, Allie’s Art Club hosted our first arts event at the Ringcross Community Centre in Islington. The event included a visual arts market and a performing arts show, and was filled with joy, creativity and community spirit!
                </Paragraph>
                <Paragraph>Not only did we provide an inclusive space for people to explore art and support the work of local artists, but we also raised over £300 for our Art Care project, which aims to support people’s mental health through art.</Paragraph>
                <Carousel square={"yes"} photoLoc={'../../assets/articles/alliesFirstCommunityArtsEvent/carousel'} carouselObj={carouselConfig} carouselClick={props.carouselClick} imageIndices={props.home.imageIndices} direction={props.home.direction} />
                <CarouselCaption>Photography by Andre Luck</CarouselCaption>
                <Paragraph>
            We were overwhelmed by the positive responses we received from both artists who took part in the event and the people who attended. 
                 </Paragraph>
            </Section>
            <Section id="amberPerrier">
                 
                <Quote>“I felt so included and it was a privilege to be part of a creative atmosphere!”</Quote>

                <ImageLabel>
                    <ImageLabelText >Amber Perrier</ImageLabelText>
                    <ImageLabelArrow alt={"black arrow pointing at photo"}src={"/assets/articles/foodBank/black-arrow.png"}/>
                </ImageLabel>

                <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/articles/alliesFirstCommunityArtsEvent/alliesFirstCommunityArtsEvent15-small.png 1x, /assets/articles/alliesFirstCommunityArtsEvent/alliesFirstCommunityArtsEvent15-large.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/articles/alliesFirstCommunityArtsEvent/alliesFirstCommunityArtsEvent15-large.png 1x, /assets/articles/alliesFirstCommunityArtsEvent/alliesFirstCommunityArtsEvent15-2x.png 2x"/>
                    <TextImage src={'/assets/articles/foodBank/Lexi-large.png'} alt="Child holding food"/>
                </picture>
                <Paragraph>Amber Perrier is an artist from East London who displayed and sold her artwork at Allie’s Arts Fair. Her pictures of London’s city skylines were very popular and she enjoyed meeting new people and watching the performing artists in our evening show. </Paragraph>

                <Paragraph>“I had the opportunity to connect with many artists, poets, performers, photographers and musicians.”, she told us, “I felt so included and it was a privilege to be part of a creative atmosphere! To top it off, the evening entertainment was powerful and very engaging.”</Paragraph>
            </Section>
            <Section style={{"clear":"both"}} id="rayChadwick">
                 
                 <Quote>“The work that Allie’s Art Club is doing is truly inspiring!”</Quote>
     
                <ImageLabel>
                    <ImageLabelText right={true}>Ray Chadwick</ImageLabelText>
                    <ImageLabelArrow right={true}alt={"black arrow pointing at photo"}src={"/assets/articles/foodBank/black-arrow.png"}/>
                </ImageLabel>
     
                <picture>
                        <source media="(max-width: 1024px)" srcSet="/assets/articles/alliesFirstCommunityArtsEvent/alliesFirstCommunityArtsEvent16-small.png 1x, /assets/articles/alliesFirstCommunityArtsEvent/alliesFirstCommunityArtsEvent16-large.png 2x"/>
                        <source media="(min-width: 1025px)" srcSet="/assets/articles/alliesFirstCommunityArtsEvent/alliesFirstCommunityArtsEvent16-large.png 1x, /assets/articles/alliesFirstCommunityArtsEvent/alliesFirstCommunityArtsEvent16-2x.png 2x"/>
                        <TextImage  right={true}src={'/assets/articles/alliesFirstCommunityArtsEvent/alliesFirstCommunityArtsEvent16-large.png'} alt="Ray Chadwick"/>
                </picture>

                <Paragraph>Ray Chadwick (also known as RDBC) is an artist from North London who also took part in our Arts Fair and kindly volunteered to help set up the event. </Paragraph>
      
                <Paragraph>His artwork uses exciting colours and a distinct style to capture and celebrate the people that make London such a vibrant and exciting place to be.</Paragraph>
                <Paragraph>“There was such a positive and uplifting atmosphere throughout the whole day and the work that Allie’s Art Club is doing is truly inspiring!”, he told us.</Paragraph>
            </Section>
            <Section style={{"clear":"both"}} id="nomadicLibaax">
                <Quote>“I really enjoyed the community feeling and welcoming atmosphere!”</Quote>
                <ImageLabel>
                    <ImageLabelText >Nomadic Libaax</ImageLabelText>
                    <ImageLabelArrow alt={"black arrow pointing at photo"}src={"/assets/articles/foodBank/black-arrow.png"}/>
                </ImageLabel>
     
                <picture>
                     <source media="(max-width: 1024px)" srcSet="/assets/articles/alliesFirstCommunityArtsEvent/alliesFirstCommunityArtsEvent17-small.png 1x, /assets/articles/alliesFirstCommunityArtsEvent/alliesFirstCommunityArtsEvent17-large.png 2x"/>
                     <source media="(min-width: 1025px)" srcSet="/assets/articles/alliesFirstCommunityArtsEvent/alliesFirstCommunityArtsEvent17-large.png 1x, /assets/articles/alliesFirstCommunityArtsEvent/alliesFirstCommunityArtsEvent17-2x.png 2x"/>
                     <TextImage  src={'/assets/articles/alliesFirstCommunityArtsEvent/alliesFirstCommunityArtsEvent16-large.png'} alt="Nomadic Libaax"/>
                </picture>
                <Paragraph>Nomadic Libaax is a rhythmic assisted poet from West London, who performed his work as a featured artist at Allie’s Arts Show.</Paragraph>
             

                <Paragraph>His poetry discusses important issues such as racial injustice and economic inequality, and aims to help people view these social issues through different perspectives.</Paragraph>
                <Paragraph>“There were so many thought-provoking acts and some beautiful pieces of art for display to raise funds for mental health, which is more needed than ever. I really enjoyed the community feeling and welcoming atmosphere!”</Paragraph>
            </Section>
            <Section style={{"clear":"both"}}id="conclusion">
                <Paragraph>We’re so happy with the success of our Launch Party and can’t wait to organise our next community arts event!</Paragraph>
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
export default connect(mapStateToProps,mapDispatchToProps)(AlliesFirstCommunityArtsEvent);