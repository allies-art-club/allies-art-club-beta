import React from "react";

import "../../app/fonts/Balloon_Extra_Bold/stylesheet.css";

import {
  Creative,
  Container,
  Collective,
  Cultural,
} from "../Styled/clipboardHeadings.styled.js";


const ClipboardHeadings = () => (
  <Container id ="HeadingsWrap">
    {" "}
    <Creative>
      {" "}
      CREATIVE <br /> EXPRESSION
    </Creative>
    <Collective>
      {" "}
      COLLECTIVE <br />
      CARE
    </Collective>
    <Cultural>
      CULTURAL
      <br /> EMPOWERMENT
    </Cultural>
  </Container>
);

export default ClipboardHeadings;
