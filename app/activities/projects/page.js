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
  Paragraph,
  Section,
  HomepageSubtitles,
  GridSubtitles,
  LinkGrid,
  TextImageTop,
} from "../../../components/Styled/styled.js";
import { BorderDottedBroken } from "../../../components/Styled/gridParagraph.styled.js";
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


<Section id="pictureParagraph">
  <div className="container-fluid">
    <div className="row align-items-center flex-column flex-lg-row">
      
      <div className="col-12 col-lg-8 text-center text-lg-start mb-4 mb-lg-0">
        <HomepageSubtitles>
          Creative explorations and practices for a life-affirming world
        </HomepageSubtitles>
        <Paragraph>
          As an organisation and a community, we practice and explore ways of
          creating and sustaining a life-affirming world in which all living
          beings can thrive.
        </Paragraph>
      </div>

      <div className="col-12 col-lg-4 text-center text-lg-end">
        <img
          src="/assets/homepage/homepage1-2x.png"
          alt="Homepage pic 1"
          className="img-fluid rounded-circle"
        />
      </div>

    </div>
  </div>
</Section>



      <Section>
        <Paragraph>
          Within our projects, we focus on three areas that we believe are vital
          for this radical vision, and integrate our continuous learning into
          our ways of living, working and relating.
        </Paragraph>

        <div className="container my-5">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <BorderDottedBroken>
                <h3>
                  Art <br /> Care
                </h3>
                <Image
                  src="/assets/gridParagraphPics/gridParagraphPic1.png"
                  alt="aboutUsRoundPics1"
                  width={500}
                  height={500}
                  className="img-fluid rounded"
                />
                <p className="text-center mt-3">
                  <i>How can the arts support our health and wellbeing?</i>
                </p>
              </BorderDottedBroken>
            </div>

            <div className="col-md-4 mb-4">
              <BorderDottedBroken>
                <h3>Creative Ecologies</h3>
                <Image
                  src="/assets/gridParagraphPics/gridParagraphPic2.png"
                  alt="aboutUsRoundPics1"
                  width={500}
                  height={500}
                  className="img-fluid rounded"
                />
                <p className="text-center mt-3">
                  <i>How can we live well together on our shared planet?</i>
                </p>
              </BorderDottedBroken>
            </div>

            <div className="col-md-4 mb-4">
              <BorderDottedBroken>
                <h3>Reimagining Work</h3>
                <Image
                  src="/assets/gridParagraphPics/gridParagraphPic3.png"
                  alt="aboutUsRoundPics1"
                  width={500}
                  height={500}
                  className="img-fluid rounded"
                />
                <p className="text-center mt-3">
                  <i>How can our labour practices be life-affirming?</i>
                </p>
              </BorderDottedBroken>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <HomepageSubtitles>Project highlights</HomepageSubtitles>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center">
              <Image
                src="/assets/general/heartsR.png"
                alt="Stars L"
                width={400}
                height={262}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
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
