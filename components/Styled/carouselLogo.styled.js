import styled from "styled-components";

export const CarouselContainer = styled.div`
  overflow: hidden; /* Ensures only visible images are displayed */
  width: 100%; /* Full width of the viewport for the carousel to scroll across */
  display: flex;
  justify-content: center; /* Center the carousel */
`;

export const CarouselWrapper = styled.div`
  display: flex;
  gap: 1rem;
  transition: transform 0.5s ease-in-out; /* Smooth slide between image sets */
  align-items: center;
  width: 100%;
`;

export const CarouselItem = styled.div`
  flex: 0 0 20%; /* Each image still takes 20% of the wrapper width */
  padding: 10px;
  margin: 2rem;
  box-sizing: border-box;
  max-width: 20rem; /* Ensure the images themselves are sized appropriately */
`;
