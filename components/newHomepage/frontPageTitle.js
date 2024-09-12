import React from "react";
import "../../app/fonts/regular-brush/stylesheet.css";

import {
  Culture,
  BackgroundContainer,
  Container,
} from "../Styled/frontPageTitle.styled.js";

const FrontPageTitle = () => {
  return (
    <Container id="ContainerTextImg">
      {" "}
      <BackgroundContainer id="backgroundContainer">
        {" "}
        <Culture>
          Creating a Culture <br /> of Community
        </Culture>
      </BackgroundContainer>{" "}
    </Container>
  );
};

export default FrontPageTitle;
