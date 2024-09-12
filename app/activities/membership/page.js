"use client";
import React from "react";
import Image from "next/image";

import {
  Paragraph,
  HomepageSubtitles,
  Section,
} from "../../../components/Styled/styled.js";

import {
  IconWrapper,
  ArtIcon,
  HeadWrap,
  MembershipWrapper,
} from "../../../components/Styled/membership.styled.js";

const Membership = () => {
  return (
    <MembershipWrapper>
      <HeadWrap id="HeadWrap">
        <HomepageSubtitles>Under construction!</HomepageSubtitles>
        <IconWrapper>
          <Image
            src="/assets/newIcons/Icon7.png" // Path to your image
            alt="Art"
            width={500} // Desired width
            height={500} // Desired height
            layout="responsive" // Optional: automatically adjust layout
          />
        </IconWrapper>
      </HeadWrap>
      <Paragraph>
        {" "}
        Sorry to keep you waiting... <br /> We are still in the process of
        finalizing and resourcing our Community Membership offer. <br />
        We will announce the launch of Community Membership as soon as we can!
      </Paragraph>
    </MembershipWrapper>
  );
};

export default Membership;
