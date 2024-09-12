"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import {
  HomepageSubtitles,
  Paragraph,
  HomepageStarL,
  TextWrap,
  HomepageWrap,
} from "../components/Styled/borderParagraph.styled";

const Homepage = () => {
  return (
    <Fragment>
      <HomepageWrap>
        {" "}
        <HomepageStarL id="homepageStarL">
          <Image
            src="/assets/general/starsL.png"
            alt="Stars L"
            width={200}
            height={162}
            layout="responsive"
          />
        </HomepageStarL>
        <TextWrap>
          <HomepageSubtitles>dedeavg Supported by</HomepageSubtitles>
          <br /><br />
          <Paragraph>
            We are grateful for the funding and support from the organization
            below:
          </Paragraph>
        </TextWrap>{" "}
      </HomepageWrap>
    </Fragment>
  );
};

export default Homepage;
