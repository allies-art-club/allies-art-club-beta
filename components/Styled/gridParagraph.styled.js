import styled from "styled-components";
import Image from 'next/image'
// Container for the grid
export const GridWrap = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap onto new lines */
  justify-content: space-between; /* Distribute columns evenly */
  gap: 20px;
  padding: 0;
  margin-bottom: -5rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack the columns on smaller screens */
    gap: 1rem;
    margin-bottom: 0;
  }
`;

// Individual grid column styling
export const GridColumn = styled.div`
  flex: 1 1 calc(33.333% - 20px); /* Three columns with space between */
  padding: 1rem;
  border-radius: 10px;
  border: 4px dotted grey;
  width:100%;
  @media (max-width: 768px) {
    flex: 1 1 100%; /* Full width on smaller screens */
  }
`;

// Responsive image styling
export const AboutImage = styled(Image)`
  width: 100%; /* Ensure image scales within its container */
  aspect-ratio: 1 / 1;
  margin:auto;
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
