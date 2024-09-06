import React from "react";
import "../app/fonts/Balloon_Extra_Bold/stylesheet.css";
import "../app/fonts/arial-nova-cond/stylesheet.css";
import {
  ContainerSquares,
  Connect,
  Care,
  Create,
  SquareTitle,
  SquareText,
  SquareBox,
  Paragraph,
} from "./Styled/aboutUsSquares.styled.js";

const AboutUsSquares = () => {
  return (
    <ContainerSquares id="containerSquares">
      <SquareBox id="squareBox">
        <Connect>
          <SquareTitle>CONNECT</SquareTitle>
          <SquareText id="squareText">
            <Paragraph>
              We value collaborative <br />
              relationships, community, <br /> and solidarity.
            </Paragraph>
          </SquareText>
        </Connect>{" "}
      </SquareBox>
      <SquareBox>
        <Care>
          <SquareTitle>care</SquareTitle>
          <SquareText>
            <Paragraph>
              We value empathy, <br />
              compassion and social <br />
              responsibility.
            </Paragraph>
          </SquareText>
        </Care>{" "}
      </SquareBox>
      <SquareBox>
        <Create>
          <SquareTitle>create</SquareTitle>
          <SquareText>
            <Paragraph>
              We value imagination, <br /> self-expression and <br />
              innovation.
            </Paragraph>
          </SquareText>
        </Create>{" "}
      </SquareBox>
    </ContainerSquares>
  );
};
export default AboutUsSquares;
