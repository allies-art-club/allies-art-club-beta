import styled from "styled-components";

export const GridWrap = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Creates 3 equal columns */
  gap: 20px; /* Adjust the gap between the grid items */
  padding: 0rem; /* Optional: add padding around the grid */
  margin-bottom: -5rem;
`;

export const GridColumn = styled.div`
  padding-left: 1rem; /* Padding inside each section */
  padding-right: 1rem; /* Padding inside each section */
  border-radius: 10px; /* Optional: rounded corners */
  border: 4px dotted grey;
  justify-content: center; /* Centers content horizontally */
  align-items: center;
  text-align: center; /* Centers text within each line */
`;

export const GridText = styled.div`
  text-align: center; /* Optional: center-align text inside each section */
  align-items: center; /* Centers content horizontally */
  margin-top: -1rem;
`;

export const OurVision = styled.div`
  margin-top: 2rem;
`;

export const OurVisionStarL = styled.div`
  width: 100%;
  max-width: 15rem;
  margin-left: 75rem;
  margin-bottom: -5rem;
`;

export const OurValues = styled.div`
  margin-top: -8rem;
`;

export const OurValuesHeartsR = styled.div`
  width: 100%;
  max-width: 15rem;
  margin-left: 75rem;
  margin-bottom: -7rem;
`;

export const HeadingGrid = styled.div`
  display: flex;
  flex-direction: column;
    align-items: center;
  justify-content: center;
`;
