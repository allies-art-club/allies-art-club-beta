import styled from "styled-components";

export const GridWrap = styled.div`
  display: flex;
  grid-template-columns: repeat(3, 1fr); /* Creates 3 equal columns */
  gap: 20px;
  padding: 0rem;
  margin-bottom: -5rem;
`;

export const GridColumn = styled.div`
  padding-left: 1rem; /* Padding inside each section */
  padding-right: 1rem; /* Padding inside each section */
  border-radius: 10px; /* Optional: rounded corners */
  border: 4px dotted grey;

align-items: center;
justify-content: center;
`;

export const GridText = styled.div`
  display: flex;
  align-items: flex-start; /* align items on the left */
  margin-top: -1rem;

  p {
    text-align: left;
  }
`;
  
export const OurVision = styled.div`
  margin-top: 2rem;
`;

export const OurVisionStarL = styled.div`
  width: 100%;

  @media (min-width: 375px) {
    margin-left: 17rem;
    max-width: 8rem;
    margin-top: 3rem;
  }

  @media (min-width: 768px) {
    margin-left: 22rem;
    max-width: 10rem;
  }

  @media (min-width: 1024px) {
    margin-left: 34rem;
    margin-bottom: -4rem;
  }

  @media (min-width: 1280px) {
    max-width: 15rem;
    margin-left: 42rem;
    margin-top: 3rem;
    margin-bottom: -5rem;
  }

  @media (min-width: 1300px) {
    max-width: 10rem;
    margin-left: 35rem;
  }

  @media (min-width: 2520px) {
    max-width: 15rem;
    margin-left: 73rem;
    margin-bottom: -5rem;
  }
`;

export const OurValues = styled.div`
  margin-top: -8rem;
`;

export const OurValuesHeartsR = styled.div`
  width: 100%;

  @media (min-width: 375px) {
    margin-left: 17rem;
    max-width: 8rem;
    margin-top: 3rem;
    margin-bottom: -4rem;
  }

  @media (min-width: 768px) {
    margin-left: 25rem;
    max-width: 8rem;
    margin-top: 4rem;
    margin-bottom: -5rem;
  }

  @media (min-width: 1024px) {
    margin-left: 34rem;
    max-width: 10rem;
    margin-bottom: -4rem;
  }

  @media (min-width: 1280px) {
    max-width: 15rem;
    margin-left: 43rem;
    margin-top: 3rem;
    margin-bottom: -7rem;
  }
  @media (min-width: 1300px) {
    max-width: 10rem;
    margin-left: 35rem;
  }
  @media (min-width: 1880px) {
    margin-left: 50rem;
  }
  @media (min-width: 2520px) {
    max-width: 15rem;
    margin-left: 73rem;
    margin-bottom: -5rem;
  }
`;

export const HeadingGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -1rem;

  @media (min-width: 1300px) {
    margin-top: 0rem;
  }
`;


export const GridIcon = styled.div`
width: 100%;

max-width: 15rem;
`;