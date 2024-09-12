import React from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

import { BadgeBackground, Container } from "../Styled/badge.styled.js";

const Badge = () => {
  return (
    <Container>
      <Image
        src="/assets/badge.png"
        alt="Badge"
        width={364}
        height={364}
        layout="responsive"
      />
      {/* <Link to="/donate/donations" style={{ textDecoration: "none" }}> */}
      <BadgeBackground id="badgeBackground"></BadgeBackground>
      {/* </Link> */}
    </Container>
  );
};

export default Badge;
