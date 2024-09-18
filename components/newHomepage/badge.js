import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BadgeBackground, Container,BadgeLink,BadgeImage} from "../Styled/badge.styled.js";

const Badge = (props) => {
  return (
    <Container $mobile={props.$mobile}>
      <BadgeLink href="/donate/the-diy-fund">
      <BadgeImage
        src="/assets/badge.png"
        alt="Badge"
        width={364}
        height={364}
      />

{/* <BadgeBackground id="badgeBackground"></BadgeBackground> */}
      </BadgeLink>
      {/* <Link to="/donate/donations" style={{ textDecoration: "none" }}> */}
      {/* </Link> */}
    </Container>
  );
};

export default Badge;
