"use client";
import Image from "next/image";
import { connect } from "react-redux";
import React, { Fragment } from "react";
import TitleBanner from "../../../components/titleBanner/titleBanner.js";
import SideNav from "../../../components/sideNav/sideNav.js";
import Article from "../../../components/article.js";

import CarouselProjects from "../../../components/carouselProjects.js";
import Carousel from "../../../components/carousel.js";
import { carouselClick } from "../../../utils/Actions/homeActions";
import carouselConfig from "../../../utils/carouselConfig/carouselAboutAac.js";

import {
  Section,
  Paragraph,
  HomepageSubtitles,
  GridSubtitles,
  LinkGrid,
  TextImageTop,
} from "../../../components/Styled/styled.js";
import {
  GridWrap,
  GridColumn,
} from "../../../components/Styled/aboutUs.styled.js";
import {
  HighlightsWrap,
  HeadingContainer,
  BorderWrap,
  IconWrapper,
  IconWrap,
  Highlights,
  ProjectsIcon,
  HighlightsHeartsR,
} from "../../../components/Styled/projects.styled.js";
import activities from "../../../utils/landingPages/activities";
// import CarouselProjects from "@/components/carouselProjects.js";
const Projects = (props) => {
  return (
    <Fragment>
      <SideNav mainCategory={"activities"} navLinks={["Projects", "Events"]} />
      <TitleBanner
        shootingStar={true}
        sideSrc1={"/assets/general/starL.png"}
        sideSrc2={"/assets/general/starR.png"}
        title={"Allie’s Projects"}
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
        <br />
        <br />
        <br />
        <HomepageSubtitles>
          Creative explorations and practices for a life-affirming world
        </HomepageSubtitles>
        <br />
        <br />
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
        </picture>
      </Section>
      <Section>
        <Paragraph>
          Within our projects, we focus on three areas that we believe are vital
          for this radical vision, and integrate our continuous learning into
          our ways of living, working and relating.
        </Paragraph>

        <GridWrap id="gridWrap">
          <GridColumn id="gridColumn">
            <GridSubtitles>Art Care</GridSubtitles>
            <Image
              src="/assets/aboutUsRoundPics/aboutUsRoundPics1.png"
              alt="aboutUsRoundPics1"
              width={500}
              height={500}
            />
            <Paragraph>
              <LinkGrid href="#">
                <i>How can the arts support our health and wellbeing?</i>
              </LinkGrid>
            </Paragraph>
          </GridColumn>
          <GridColumn>
            <GridSubtitles>Creative Ecologies </GridSubtitles>
            <Image
              src="/assets/aboutUsRoundPics/aboutUsRoundPics2.png"
              alt="aboutUsRoundPics2"
              width={500}
              height={500}
            />
            <Paragraph>
              <LinkGrid href="#">
                <i> How can our labour practices be life-affirming?</i>
              </LinkGrid>
            </Paragraph>
          </GridColumn>
          <GridColumn>
            <GridSubtitles>Reimagining Work</GridSubtitles>
            <Image
              src="/assets/aboutUsRoundPics/aboutUsRoundPics3.png"
              alt="aboutUsRoundPics3"
              width={500}
              height={500}
            />
            <Paragraph>
              <LinkGrid href="#">
                <i> How can we live well together on our shared planet?</i>{" "}
              </LinkGrid>
            </Paragraph>
          </GridColumn>
        </GridWrap>
      </Section>
      <Section>
        <HighlightsWrap id="highlights">
          <HighlightsHeartsR id="OurVisionStarL">
            <Image
              src="/assets/general/heartsR.png"
              alt="Stars L"
              width={400}
              height={262}
            />
          </HighlightsHeartsR>{" "}
          <HomepageSubtitles> Project highlights</HomepageSubtitles>
        </HighlightsWrap>
      </Section>

      <Section id="borderWrap">
        <BorderWrap>
          <HeadingContainer id="headingContainer">
            <HomepageSubtitles>
              Co-Creative Communities:
              <br /> A Collaborative Design project
            </HomepageSubtitles>{" "}
            <ProjectsIcon id="projectIcon">
              <IconWrap id="Wrap">
                <Image
                  src="/assets/aboutUsRoundPics/aboutUsRoundPics3.png"
                  alt="about Us Round Pics 3"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </IconWrap>
            </ProjectsIcon>{" "}
          </HeadingContainer>
          <Paragraph>
            Co-Creative Communities was a 6-month project we ran in 2024, in
            which eight participants co-designed our Community Membership offer,
            as well as our Community Membership Info Pack and their future roles
            in our organisation as Ambassador Members. This project involved
            internal training on co-design, a series of six workshops that
            engaged participants through interactive learning, group discussions
            and arts activities, and a final exhibition to showcase their art
            pieces.
          </Paragraph>

          <CarouselProjects />
          <Paragraph>
            Thank you to our funders the Greater London Authority and Foundation
            for Future London, and to Space4 and Cubitt for providing the
            workshop and exhibition spaces.
          </Paragraph>
        </BorderWrap>
      </Section>
    
    </Fragment>
  );
};


export default Projects;
