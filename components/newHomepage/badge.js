import React from "react";
import Link from "next/link";
import Image from "next/image";

import { BadgeBackground, Container } from "../Styled/badge.styled.js";

const Badge = () => {
  return (
    <Container>
      <a href="/donate/the-diy-fund">
      <Image
        src="/assets/badge.png"
        alt="Badge"
        width={364}
        height={364}
        layout="responsive"
      /></a>
      {/* <Link to="/donate/donations" style={{ textDecoration: "none" }}> */}
      <BadgeBackground id="badgeBackground"></BadgeBackground>
      {/* </Link> */}
    </Container>
  );
};

export default Badge;
