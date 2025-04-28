import styled from "styled-components";
import Image from "next/image";

export const BackgroundContainer = styled.div`

  background-color: ${({ bgColor }) =>
    bgColor === "blue"
      ? "#2F60DE"  // Blue background
      : bgColor === "pink"
      ? "#FF25AB"  // Pink background
      : bgColor === "yellow"
      ? "#F4BC33"  // yellow background
      : "#ffffff"}; 
  
  color: ${({ bgColor }) =>
    bgColor === "blue" || bgColor === "green" || bgColor === "red" ? "white" : "black"};


.tilt-left {
  transform: rotate(-10deg); /* Rotate 10 degrees to the left */
}

/* Tilt to the right */
.tilt-right {
  transform: rotate(10deg); /* Rotate 10 degrees to the right */
}
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  text-align: center;
  padding: 10px;
  width: 100%;
  height: 100%;
  max-width: 100%;
  overflow: hidden;

  flex: 1 1 auto;
  min-width: 0;

  word-wrap: break-word;
  overflow-wrap: break-word;

  h3, h4, p {
    word-break: break-word;
    overflow-wrap: break-word;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }


`;




export const BorderDottedBroken = styled.div`
  border: 2px dotted black;
  padding: 30px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;


  p {
    text-align: center;
    font-size: 1rem;
    color: #000000;
  }

  img {
    width: 100%; 
    max-width: 200px;
    height: auto;
    border-radius;
    margin: 0 auto;

  }

`;

// Individual grid column styling
export const GridColumn = styled.div`
  flex: 1 1 calc(33.333% - 20px); /* Three columns with space between */
  padding: 1rem;
  border-radius: 10px;
  border: 4px dotted grey;
  width: 100%;
  @media (max-width: 768px) {
    flex: 1 1 100%; /* Full width on smaller screens */
  }
`;

// Responsive image styling
export const AboutImage = styled(Image)`
  width: 100%; /* Ensure image scales within its container */
  aspect-ratio: 1 / 1;
  margin: auto;
  height: auto; /* Maintain aspect ratio */
  border-radius: 50%; /* Circular images */
  display: block; /* Block element to avoid inline spacing issues */
  max-width: 100%; /* Ensure it doesn't exceed container width */

  /* Responsive size adjustments */
`;

// Wrapper for the image to ensure it is centered
export const ImageGrid = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem; /* Adjusted padding for better spacing */

  @media (max-width: 768px) {
    padding: 0.5rem; /* Reduced padding for smaller screens */
  }

  @media (max-width: 375px) {
    padding: 0.25rem; /* Minimal padding for very small screens */
  }
`;
