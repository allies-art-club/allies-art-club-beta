import styled from "styled-components";

const Container = styled.div`
  padding: 20px; /* Default padding for larger screens */
  display: flex; /* Ensure flex properties are applied */
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #ffffff;
  max-width: 100%;
  height: 100%;

  /* Media query for tablets and small screens */
  @media (max-width: 768px) {
    padding: 15px; /* Reduced padding for smaller screens */
    align-items: center; /* Center items horizontally on smaller screens */
  }

  /* Media query for mobile devices */
  @media (max-width: 480px) {
    padding: 10px; /* Further reduced padding for very small screens */
    align-items: center; /* Center items horizontally on very small screens */
  }
`;

const BodyWrapLeft = styled.div`
  margin-right: 20px;
  margin-left: 30px;
  text-align: right;
`;

const BodyWrapRight = styled.div`
  margin-right: 20px;
  justify-content: right;
`;
const TextContainer = styled.div`
  display: flex;                 /* Arrange children horizontally */
  align-items: flex-start;       /* Align items at the start (top) */
  justify-content: space-between; /* Distribute space between text and icon */
  gap: 20px;                     /* Add space between text and icon */
  padding: 20px;
  margin-bottom: 40px;
  border: 5px dotted #cccccc;
  border-radius: 8px;

  /* Ensure the text area takes up remaining space */
  .text-area {
    flex: 1;                     /* Allow the text area to grow */
    text-align: left;            /* Align text to the left */
  }

  /* Media query for tablets and smaller screens */
  @media (max-width: 768px) {
    flex-direction: column;      /* Stack items vertically on smaller screens */
    text-align: center;          /* Center text on smaller screens */
  }
`;


const ArtHeader = styled.h2`
  font-size: 5vw;
  font-family: "arial-nova-cond-bold", sans-serif;
  margin: 0;
  text-align: center;
  text-shadow: 1px 2px 0px rgba(0, 0, 0, 0.4);
  flex-direction: column;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const ArtText = styled.p`
  font-size: 3vw;
  color: #333333;
  line-height: 1;
  font-family: "arial-nova-cond", sans-serif;
  margin: 10px 10px;

  @media (min-width: 768px) {
    font-size: 32px; /* Fixed size for larger screens */
  }
`;

const ArtLink = styled.a`
  color: #ff25ab;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ArtIcon = styled.div`
  margin-left: 20px; /* Space between text and icon */
  display: flex; /* Ensure flexbox layout */
  align-items: center; /* Center icon vertically with text */

  img {
    width: 100%; /* Set the width to be responsive */
    height: auto; /* Maintain aspect ratio */
    max-width: 450px; /* Maximum width for larger screens */
    border-radius: 50%; /* Make the icon circular */

    /* Media query for smaller screens */
    @media (max-width: 768px) {
      max-width: 120px; /* Smaller size for smaller screens */
    }

    /* Media query for extra small screens */
    @media (max-width: 480px) {
      max-width: 100px; /* Even smaller size for very small screens */
    }
  }
`;

export {
  Container,
  TextContainer,
  ArtText,
  ArtLink,
  ArtIcon,
  ArtHeader,
  BodyWrapLeft,
  BodyWrapRight,
};
