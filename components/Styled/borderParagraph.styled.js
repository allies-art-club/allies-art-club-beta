import styled from "styled-components";

// Wrapper section
export const BorderWrap = styled.div`
  border: 0.4rem dotted black;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  padding: 1rem;
  width: 100%; /* Ensure full width of the container */
  font-family: var(--font-arial-nova-cond);
  margin-bottom: 2rem;
`;

// Section text and icon
export const SectionText = styled.div`
  display: block;
  align-items: center;
  padding: 1rem;

  @media (min-width: 1025px) {
    display: flex;
  }
  @media (min-width: 1300px) {
    display: flex;
  }
`;

export const BorderSubtitles = styled.h2`
  font-family: var(--font-arial-nova-cond-bold);
  text-align: center;
  text-shadow: 4px 2px 0px rgba(0, 0, 0, 0.3);

  @media (min-width: 320px) {
    font-size: 4rem;
  }
  @media (min-width: 768px) {
    font-size: 4rem;
  }
  @media (min-width: 1025px) {
    font-size: 3rem;
  }

  @media (min-width: 1350px) {
    font-size: 3rem;
  }
  @media (min-width: 1920px) {
    font-size: 4rem;
  }
  margin: 0;
`;

// Heading text
export const HomepageSubtitles = styled.h2`
  font-family: var(--font-arial-nova-cond-bold);
  text-align: center;
  text-shadow: 4px 2px 0px rgba(0, 0, 0, 0.3);

  @media (min-width: 320px) {
    font-size: 4rem;
  }
  @media (min-width: 768px) {
    font-size: 4rem;
  }
  @media (min-width: 1025px) {
    font-size: 3rem;
  }

  @media (min-width: 1350px) {
    font-size: 3rem;
  }
  @media (min-width: 1920px) {
    font-size: 5rem;
  }
  margin: 0;
`;

// Paragraph text
export const Paragraph = styled.p`
  color: #333;
  margin: 1rem 1rem;

  @media (min-width: 320px) {
    line-height: 2rem;
  }
  @media (min-width: 768px) {
    line-height: 2rem;
  }

  @media (min-width: 1025px) {
    font-size: 1rem;
    line-height: 1rem;
  }
  @media (min-width: 1350px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  @media (min-width: 1920px) {
    font-size: 2rem;
    line-height: 2rem;
  }
`;

// Link
export const ArtLink = styled.a`
  color: #ec008c; /* Pink color for the link */
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const TextCont = styled.div`
  padding: 3rem;
`;

// Icon
export const ArtIcon = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-right: 1rem;
  margin-left: 1rem;

  @media (min-width: 320px) {
    width: 13rem;
    display: block;
  }
  @media (min-width: 768px) {
    width: 14rem;
  }

  @media (min-width: 1025px) {
    width: 12rem;
    display: block;
  }

  @media (min-width: 1250px) {
    width: 11rem;
    display: block;
  }
  @media (min-width: 1350px) {
    width: 13rem;
    display: block;
  }
`;

export const IconWrapper = styled.div`
 display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */

  margin-right: ${(props) => (props.$left ? "0px" : "0")};
  margin-left: ${(props) => (!props.$left ? "0px" : "0")};
  order: ${(props) => (props.$left ? "-1" : "0")}; /* Moves the icon to 


  @media (min-width: 768px) {
    margin-right: ${(props) => (props.$left ? "0px" : "0")};
    margin-left: ${(props) => (!props.$left ? "0px" : "0")};
     justify-content: center; /* Center content horizontally */
  align-items: center; /* 
  }  
  @media (min-width: 1280px) {
    margin-right: ${(props) => (props.$left ? "0px" : "0")};
    margin-left: ${(props) => (!props.$left ? "0px" : "0")};
    order: 0; 

  }

`;

export const HomepageWrap = styled.div`
  display: flex; /* Enables flexbox */
  align-items: center; /* Vertically centers items */
  justify-content: space-between; /* Spreads content between left and right */
  margin-top: 5rem;
  margin-bottom: 5rem;
  max-width: 100%; /* Container max width */
`;

// Container for the text, centered within its section
export const TextWrap = styled.div`
  flex: 1; /* Takes up available space on the left */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centers text vertically */
  text-align: left; /* Aligns text to the left */
`;

// Container for the icon on the right
export const HomepageStarL = styled.div`
  width: 100%;
  max-width: 15rem;
  margin-top: -3rem;
  align-items: center; /* Center the icon vertically */
  justify-content: center; /* Center the icon horizontally */
  flex-shrink: 0; /* Prevent the icon from shrinking */

  @media (max-width: 768px) {
    width: 100%;
    max-width: 10rem;
  }
`;
