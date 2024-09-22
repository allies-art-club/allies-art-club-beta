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
  ImageGrid,
} from "../../../components/Styled/gridParagraph.styled.js";
import {
  HighlightsWrap,
  HeadingContainer,
  BorderWrap,
  IconWrapper,
  IconWrap,
  Highlights,
  HeadingContainer3,
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
            <ImageGrid id="image">
              <Image
                src="/assets/gridParagraphPics/gridParagraphPic1.png"
                alt="aboutUsRoundPics1"
                width={500}
                height={500}
              />
            </ImageGrid>
            <Paragraph>
              <LinkGrid href="/activities/projects/art-care">
                <i>How can the arts support our health and wellbeing?</i>
              </LinkGrid>
            </Paragraph>
          </GridColumn>

          <GridColumn id="gridColumn">
            <GridSubtitles>Creative Ecologies</GridSubtitles>
            <ImageGrid id="image">
              <Image
                src="/assets/gridParagraphPics/gridParagraphPic2.png"
                alt="aboutUsRoundPics1"
                width={500}
                height={500}
              />
            </ImageGrid>
            <Paragraph>
              <LinkGrid href="#">
                <i>How can we live well together on our shared planet?</i>
              </LinkGrid>
            </Paragraph>
          </GridColumn>
          <GridColumn id="gridColumn">
            <GridSubtitles>Reimagining Work</GridSubtitles>
            <ImageGrid id="image">
              <Image
                src="/assets/gridParagraphPics/gridParagraphPic3.png"
                alt="aboutUsRoundPics3"
                width={500}
                height={500}
              />
            </ImageGrid>
            <Paragraph>
              <LinkGrid href="#">
                <i>How can our labour practices be life-affirming?</i>
              </LinkGrid>
            </Paragraph>
          </GridColumn>
        </GridWrap>
      </Section>

      <Section>
        <HighlightsWrap id="highlights">
          <HomepageSubtitles> Project highlights</HomepageSubtitles>
          <HighlightsHeartsR id="highlightsHeartsR">
            <Image
              src="/assets/general/heartsR.png"
              alt="Stars L"
              width={400}
              height={262}
            />
          </HighlightsHeartsR>{" "}
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
                  src="/assets/gridParagraphPics/gridParagraphPic2.png"
                  alt="gridParagraphPics 2"
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

      <Section id="borderWrap">
        <BorderWrap>
          <HeadingContainer id="headingContainer">
            <HomepageSubtitles>
              Wild At Art: A Community Arts
              <br /> Fair Inspired by Nature
            </HomepageSubtitles>{" "}
            <ProjectsIcon id="projectIcon">
              <IconWrap id="Wrap">
                <Image
                  src="/assets/gridParagraphPics/gridParagraphPic3.png"
                  alt="gridParagraphPics 3"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </IconWrap>
            </ProjectsIcon>{" "}
          </HeadingContainer>
          <Paragraph>
            Wild At Art was a creative and eco-conscious event to celebrate our
            connection to the natural world and enjoy being part of a creative
            and collaborative community. The fair included an art market with a
            range of nature-inspired art, free arts and crafts activities and a
            community ‘Poetree’, live DJ sets, food and a welcoming and wildly
            decorated space. We also ran this event in collaboration with Mother
            Roots, a local eco-friendly gardening company.
          </Paragraph>

          <CarouselProjects />
          <Paragraph>
            Thank you to our funder Islington Giving, to our event collaborator
            Mother Roots, and to the Vibast Community Centre for providing the
            space!
          </Paragraph>
        </BorderWrap>
      </Section>

      <Section id="borderWrap">
        <BorderWrap>
          <HeadingContainer3 id="headingContainer">
            <HomepageSubtitles>Creative Hangouts</HomepageSubtitles>{" "}
            <ProjectsIcon id="projectIcon">
              <IconWrap id="Wrap">
                <Image
                  src="/assets/gridParagraphPics/gridParagraphPic1.png"
                  alt="gridParagraphPics 1"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </IconWrap>
            </ProjectsIcon>{" "}
          </HeadingContainer3>
          <Paragraph>
            Since 2023, we’ve run free monthly art socials at the Vibast
            Community Centre for local people to connect, have fun and engage in
            arts activities in a fun, creative and social space. Our Creative
            Hangouts have provided an inclusive and accessible space for people
            from a range of backgrounds to support their sense of wellbeing and
            social connection through fun and relaxing arts activities and great
            conversations!
          </Paragraph>

          <CarouselProjects />
          <Paragraph>
            Thank you to our funders Islington Council and Cripplegate
            Foundation, who supported us through the Islington Council Community
            Chest!
          </Paragraph>
        </BorderWrap>
      </Section>
    </Fragment>
  );
};

export default Projects;
