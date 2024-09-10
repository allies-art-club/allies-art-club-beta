"use client";

import React from "react";
import { connect } from "react-redux";
import Image from "next/image";
import {
  Paragraph,
  Article,
  TextImageTop,
  HomepageSubtitles,
  GridSubtitles,
  Section,
  Link,
} from "../../../components/Styled/styled";
import {
  Creative,
  Collective,
  Cultural,
} from "../../../components/Styled/clipboardHeadings.styled.js";
import {
  GridColumn,
  GridWrap,
  GridText,
  OurVision,
  OurVisionStarL,
  OurValues,
  HeadingGrid,
  OurValuesHeartsR,
} from "../../../components/Styled/aboutUs.styled.js";

import SideNav from "../../../components/sideNav/sideNav.js";
import TitleBanner from "../../../components/titleBanner/titleBanner.js";
import AboutUsSquares from "../../../components/aboutUsSquares.js";
import Carousel from "../../../components/carousel.js";
import { carouselClick } from "../../../utils/Actions/homeActions";
import carouselConfig from "../../../utils/carouselConfig/carouselAboutAac.js";

import "../../fonts/arial-nova-cond-bold/stylesheet.css";

const AboutAac = (props) => {
  return (
    <Article>
      <SideNav
        mainCategory={"about"}
        navLinks={[
          "Allie's Art Club",
          "Allie's Mission",
          "Allie's Values",
          "Allie's Story",
        ]}
      />

      <TitleBanner
        sideSrc1={"/assets/general/heartsL.png"}
        sideSrc2={"/assets/general/heartsR.png"}
        title={"About Us"}
      ></TitleBanner>

      <Section>
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/homepage/homepage1-small.png 1x, /assets/homepage/homepage1-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/homepage/homepage1-2x.png"
          />
          <TextImageTop
            $right={true}
            src={"/assets/homepage/homepage1-2x.png"}
            alt="Homepage pic 1"
          />
        </picture>
        <HomepageSubtitles>
          We are a grassroots community arts
          <br /> co-operative making waves in the cultural landscape.
        </HomepageSubtitles>
        <Paragraph>
          We believe in the power of art to generate positive changes for
          ourselves and our communities, and we’re committed to working in
          collaborative, equitable and empowering ways.
        </Paragraph>{" "}
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/homepage/homepage1-small.png 1x, /assets/homepage/homepage1-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/homepage/homepage1-2x.png"
          />
          <TextImageTop
            $mobile={true}
            src={"/assets/homepage/homepage1-2x.png"}
            alt="Homepage pic 1"
          />
        </picture>{" "}
      </Section>
      <Section>
        <HomepageSubtitles>Our Mission</HomepageSubtitles>
        <Paragraph>
          Our mission is to create a culture of community, and we aim to achieve
          this in three ways:
        </Paragraph>
      </Section>

      <Section>
        {" "}
        <GridWrap id="gridWrap">
          <GridColumn id="gridColumn">
            <GridText id="gridText">
              <HeadingGrid>
                <Creative>
                  CREATIVE <br /> EXPRESSION
                </Creative>
              </HeadingGrid>
              <Paragraph>
                Create inclusive opportunities for people to express their
                ideas, knowledge and experiences through a range of artistic
                mediums.
              </Paragraph>
            </GridText>
          </GridColumn>
          <GridColumn>
            <GridText id="gridText">
              {" "}
              <HeadingGrid>
                <Collective>
                  {" "}
                  COLLECTIVE <br />
                  CARE
                </Collective>{" "}
              </HeadingGrid>
              <Paragraph>
                Provide fun, safe and accessible spaces for people to connect,
                build supportive relationships and improve their health and
                wellbeing.
              </Paragraph>{" "}
            </GridText>
          </GridColumn>
          <GridColumn>
            <GridText id="gridText">
              <HeadingGrid>
                <Cultural>
                  {" "}
                  CULTURAL
                  <br /> EMPOWERMENT
                </Cultural>{" "}
              </HeadingGrid>
              <Paragraph>
                Develop people's creative skills, knowledge and involvement in
                generating positive social change through art and culture.
              </Paragraph>{" "}
            </GridText>
          </GridColumn>
        </GridWrap>
      </Section>

      <Section>
        <OurVision id="ourVision">
          <OurVisionStarL id="OurVisionStarL">
            <Image
              src="/assets/general/starR.png"
              alt="Stars L"
              width={200}
              height={162}
              layout="responsive"
            />
          </OurVisionStarL>{" "}
          <HomepageSubtitles>Our Vision</HomepageSubtitles>
          <Paragraph>
            Our vision is a life-affirming world, where a culture of community,
            creativity and care supports all life to flourish.
          </Paragraph>
        </OurVision>
      </Section>
      <Section>
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/homepage/homepage1-small.png 1x, /assets/homepage/homepage1-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/homepage/homepage1-2x.png"
          />
          <TextImageTop
            $left={true}
            src={"/assets/homepage/homepage1-2x.png"}
            alt="Homepage pic 1"
          />
        </picture>
        <HomepageSubtitles>
          Creative explorations and practices for a life-affirming world
        </HomepageSubtitles>
        <Paragraph>
          As an organisation and a community, we practice and explore ways of
          creating and sustaining a life-affirming world in which all living
          beings can thrive.
        </Paragraph>
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/homepage/homepage1-small.png 1x, /assets/homepage/homepage1-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/homepage/homepage1-2x.png"
          />
          <TextImageTop
            $mobile={true}
            src={"/assets/homepage/homepage1-2x.png"}
            alt="Homepage pic 1"
          />
        </picture>{" "}
      </Section>
      <Section>
        <Paragraph>
          We focus on three areas that we believe are vital for this radical
          vision, and integrate our continuous learning into our ways of living,
          working and relating.
        </Paragraph>

        <GridWrap id="gridWrap">
          <GridColumn id="gridColumn">
            <GridSubtitles>Art Care</GridSubtitles>
            <Image
              src="/assets/aboutUsRoundPics/aboutUsRoundPics1.png"
              alt="aboutUsRoundPics1"
              width={500}
              height={500}
              layout="responsive"
            />
            <Paragraph>
              <i>How can the arts support our health and wellbeing?</i>
            </Paragraph>
          </GridColumn>
          <GridColumn>
            <GridSubtitles>Creative Ecologies </GridSubtitles>
            <Image
              src="/assets/aboutUsRoundPics/aboutUsRoundPics2.png"
              alt="aboutUsRoundPics2"
              width={500}
              height={500}
              layout="responsive"
            />
            <Paragraph>
              <i> How can our labour practices be life-affirming?</i>
            </Paragraph>
          </GridColumn>
          <GridColumn>
            <GridSubtitles>Reimagining Work</GridSubtitles>
            <Image
              src="/assets/aboutUsRoundPics/aboutUsRoundPics3.png"
              alt="aboutUsRoundPics3"
              width={500}
              height={500}
              layout="responsive"
            />
            <Paragraph>
              <i> How can we live well together on our shared planet?</i>
            </Paragraph>
          </GridColumn>
        </GridWrap>
      </Section>
      <Section>
        <Paragraph>
          See our upcoming events <Link href="#">here.</Link>
        </Paragraph>
      </Section>

      <Section>
        <OurValues id="ourVision">
          <OurValuesHeartsR id="OurVisionStarL">
            <Image
              src="/assets/general/heartsR.png"
              alt="Stars L"
              width={200}
              height={162}
              layout="responsive"
            />
          </OurValuesHeartsR>{" "}
          <HomepageSubtitles> Our values</HomepageSubtitles>
          <Paragraph>
            As a community, our values can be summarised as:
          </Paragraph>
        </OurValues>
      </Section>
      <Section>
        <AboutUsSquares />
      </Section>
      <Section>
        <HomepageSubtitles>Our journey</HomepageSubtitles>
        <Paragraph>
          Our work stems from the power and imagination of local people. We
          stand together boldly as allies to generate cultural movements that
          are led by the people, for the people.
        </Paragraph>
      </Section>
      <Section>
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/homepage/homepage3-small.png 1x, /assets/homepage/homepage3-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/homepage/homepage3-2x.png"
          />
          <TextImageTop
            $right={true}
            src={"/assets/homepage/homepage3-2x.png"}
            alt="Homepage pic 1"
          />
        </picture>
        <HomepageSubtitles>
          Radical creativity rooted in the community
        </HomepageSubtitles>
        <Paragraph>
          Our club was formed in 2021 at a food bank in North London by local
          creatives with lived experience of social exclusion and health
          inequality.
        </Paragraph>
        <Paragraph>
          After a couple of years of running creative community projects and
          events, we registered as a Community Benefit Society (CBS) in 2023. A
          CBS is a non-profit organisation with a co-operative structure,
          meaning we’re run democratically and all our funds go towards
          benefitting communities.
        </Paragraph>
        <Paragraph>
          You can read more about what a CBS is <Link href="#">here.</Link>
        </Paragraph>
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/homepage/homepage3-small.png 1x, /assets/homepage/homepage3-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/homepage/homepage3-2x.png"
          />
          <TextImageTop
            $mobile={true}
            src={"/assets/homepage/homepage3-2x.png"}
            alt="Homepage pic 1"
          />
        </picture>{" "}
      </Section>
      <Section>
        <GridSubtitles>
          Below are some of the projects and events we’ve run since 2021
        </GridSubtitles>
      </Section>
      <Section id="carousel">
        <Carousel
          square={"yes"}
          photoLoc={"../../assets/articles/about/aac_carousel"}
          carouselObj={carouselConfig}
          carouselClick={props.carouselClick}
          imageIndices={props.home.imageIndices}
          direction={props.home.direction}
        />
      </Section>
    </Article>
  );
};

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    carouselClick: (direction) => carouselClick(direction, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AboutAac);
