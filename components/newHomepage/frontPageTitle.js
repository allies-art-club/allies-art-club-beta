import React from "react";
import "../../app/fonts/regular-brush/stylesheet.css";

import {
  Culture,
  BackgroundContainer,
  Container,
} from "../Styled/frontPageTitle.styled.js";

const FrontPageTitle = (props) => {
  return (
    <Container $mobile={props.$mobile}id="ContainerTextImg">
      {" "}
      <BackgroundContainer id="backgroundContainer">
        {" "}
        <Culture src="/assets/slogan.png" width="1780" height="478"/>
      </BackgroundContainer>{" "}
    </Container>
  );
};

export default FrontPageTitle;
