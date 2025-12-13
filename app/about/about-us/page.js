"use client";

import React from "react";
import { connect } from "react-redux";
import Image from "next/image";
import {
  Paragraph,
  Article,
  TextImageTop,
  HomepageSubtitles,
  LinkGrid,
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
  GridText,
  OurVision,
  OurVisionStarL,
  OurValues,
  HeadingGrid,
  OurValuesHeartsR,
} from "../../../components/Styled/aboutUs.styled.js";

import {
  GridWrap,
  TextWrap,
  BorderDottedBroken,
  BackgroundContainer,
} from "../../../components/Styled/gridParagraph.styled";

import SideNav from "../../../components/sideNav/sideNav.js";
import TitleBanner from "../../../components/titleBanner/titleBanner.js";
import AboutUsSquares from "../../../components/aboutUsSquares.js";
import Carousel from "../../../components/carousel.js";
import { carouselClick } from "../../../utils/Actions/homeActions";
import carouselConfig from "../../../utils/carouselConfig/carouselAboutAac.js";
import CarouselAboutUs from "../../../components/carouselAboutUs.js";

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
        <div className="container-fluid">
          <div className="row align-items-center flex-column flex-lg-row">
            <div className="col-12 col-lg-8 text-center text-lg-start mb-4 mb-lg-0">
              <HomepageSubtitles>
                Creative explorations and practices for a life-affirming world
              </HomepageSubtitles>
              <Paragraph>
                As an organisation and a community, we practice and explore ways
                of creating and sustaining a life-affirming world in which all
                living beings can thrive.
              </Paragraph>
            </div>

            <div className="col-12 col-lg-4 text-center text-lg-end">
              <div
                style={{ position: "relative", width: "100%", height: "500px" }}
              >
                <Image
                  src="/assets/homepage/homepage1-2x.png"
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Homepage Image"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <HomepageSubtitles>Our Mission</HomepageSubtitles>
        <Paragraph>
          Our mission is to create a culture of community, and we aim to achieve
          this in three ways:
        </Paragraph>
      </Section>

      <div className="container my-5">
        <div className="row text-center">
          <div className="col-lg-4 col-md-12 col-12 mb-4">
            <TextWrap>
              <BorderDottedBroken>
                <BackgroundContainer bgColor="blue">
                  <h5>
                    CREATIVE <br /> EXPRESSION
                  </h5>
                </BackgroundContainer>
                <p className="text-center mt-3">
                  Create inclusive opportunities for people to express their
                  ideas, knowledge, and experiences through a range of artistic
                  mediums.
                </p>
              </BorderDottedBroken>
            </TextWrap>
          </div>

          <div className="col-lg-4 col-md-12 col-12 mb-4">
            <TextWrap>
              <BorderDottedBroken>
                <BackgroundContainer bgColor="pink">
                  <h5>
                    COLLECTIVE <br /> CARE
                  </h5>
                </BackgroundContainer>
                <p className="text-center mt-3">
                  Provide fun, safe, and accessible spaces for people to
                  connect, build supportive relationships and improve their
                  health and wellbeing.
                </p>
              </BorderDottedBroken>
            </TextWrap>
          </div>

          <div className="col-lg-4 col-md-12 col-12 mb-4">
            <TextWrap>
              <BorderDottedBroken>
                <BackgroundContainer bgColor="yellow">
                  <h5>
                    CULTURAL <br /> EMPOWERMENT
                  </h5>
                </BackgroundContainer>
                <p className="text-center mt-3">
                  Develop people&apos;s creative skills, knowledge, and
                  involvement in generating positive social change through art
                  and culture.
                </p>
              </BorderDottedBroken>
            </TextWrap>
          </div>
        </div>
      </div>

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
          <br />
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

        <div className="container my-5">
          <div className="row text-center">
            <div className="col-lg-4 col-md-12 col-12 mb-4">
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

            <div className="col-lg-4 col-md-12 col-12 mb-4">
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

            <div className="col-lg-4 col-md-12 col-12 mb-4">
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
        <Paragraph>
          See our upcoming events <Link href="/activities/events">here.</Link>
        </Paragraph>
      </Section>

      <Section>
        <OurValues id="ourVision">
          <OurValuesHeartsR id="ourValuesHeartsR">
            <Image
              src="/assets/general/heartsR.png"
              alt="Stars L"
              width={200}
              height={162}
              layout="responsive"
            />
          </OurValuesHeartsR>{" "}
          <HomepageSubtitles> Our values</HomepageSubtitles>
          <br />
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
          You can read more about what a CBS is{" "}
          <Link href="/discussions/club-articles/were-a-community-benefit-society">
            here.
          </Link>
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

      <CarouselAboutUs />
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
