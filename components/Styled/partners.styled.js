import styled from "styled-components";

// Container for all images
const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal-width columns */
  flex-wrap: wrap;
  gap: 4rem; /* Adjust the gap between images */
  justify-content: center; /* Center images */
  align-items: center; /* Center items vertically within their grid area */
  justify-content: center; /* Center the entire grid container horizontally */
  align-content: center; 
  margin: 4rem; /* Optional margin around the container */
`;

// Wrapper for individual images
const ImageWrap = styled.div`
  width: 100%; /* Adjusts the container width to be full-width */
  max-width: 600px; /* Constrain the container to the image's width */
  margin: 0 auto; /* Center the image horizontally */
  overflow: hidden; /* Ensure rounded corners are visible */
`;

const ImageWrapStarL = styled.div`
  width: 100%;
  max-width: 7rem; /* Constrain to image's width */
  margin: 0 auto; /* Center horizontally */
  margin-top: 10rem;
  overflow: hidden; /* Clip overflowed content */
`;

const ImageWrapHeartsL = styled.div`
  width: 100%;
  max-width: 10rem; /* Constrain to image's width */
  margin: 0 auto; /* Center horizontally */
  overflow: hidden; /* Clip overflowed content */
`;

const ImageWrapStarsR = styled.div`
  width: 100%;
  max-width: 10rem; /* Constrain to image's width */
  margin: 0 auto; /* Center horizontally */
  overflow: hidden; /* Clip overflowed content */
`;
export {
  ImageWrapHeartsL,
  ImageWrapStarsR,
  ImageWrapStarL,
  ImageWrap,
  ImagesContainer,
};
