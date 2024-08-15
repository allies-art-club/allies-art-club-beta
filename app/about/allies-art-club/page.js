"use client"

import React from 'react';
import {connect} from 'react-redux';
import {Section,Paragraph,Article} from '../../../components/Styled/styled';
import SideNav from '../../../components/sideNav/sideNav.js';
import TitleBanner from '../../../components/titleBanner/titleBanner.js';
import {ImageWrapper} from '../../../components/Styled/donate.styled';
import Carousel from '../../../components/carousel.js';
import {carouselClick} from '../../../utils/Actions/homeActions';
import carouselConfig from '../../../utils/carouselConfig/carouselAboutAac.js';
import {RibbonImage} from '../../../components/Styled/titleBanner.styled';
import {BannerTextImg} from '../../../components/Styled/donate.styled.js';
import aboutAccSvg from '../../../components/Styled/bannerSvg/aboutAac.svg';
const AboutAac = (props) => {
    return (
        <Article>
            <SideNav mainCategory={'about'} navLinks={["Allie's Art Club","Allie's Mission","Allie's Values","Allie's Story"]}/>

            <TitleBanner
                    sideSrc1={'/assets/general/heartsL.png'}
                    sideSrc2={'/assets/general/heartsR.png'}
                    centreSrc={'/assets/general/curvedLine.png'}
                    title={"Allie's Art Club"}
                ></TitleBanner>
            <Section id="alliesArtClub">

                <Paragraph>Allie&apos;s Art Club is a community of creatives who believe in the power of art to generate positive changes for ourselves and others.</Paragraph>
                
                <ImageWrapper>
                    <RibbonImage alt={"Text ribbon"}src={'/assets/general/ribbon.png'}></RibbonImage>
                    <BannerTextImg $article={"true"} type={"image/svg+xml"}aria-label="contains svg"alt="about banner svg text"  data={aboutAccSvg}/>
                </ImageWrapper>
                <Paragraph>Formed by volunteers in 2021, our mission is to create opportunities for people to have fun, express themselves, improve their sense of wellbeing and develop strong social connections through the arts.</Paragraph>
                <Paragraph>We value art as a peaceful yet powerful form of self-expression that can contribute to building a more happy, healthy and honest world.</Paragraph>
            </Section>
            
            <Section id="carousel">
                <Carousel square={"yes"} photoLoc={'../../assets/articles/about/aac_carousel'} carouselObj={carouselConfig} carouselClick={props.carouselClick} imageIndices={props.home.imageIndices} direction={props.home.direction} />
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
export default connect(mapStateToProps,mapDispatchToProps)(AboutAac);