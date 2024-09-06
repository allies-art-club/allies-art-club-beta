import styled from 'styled-components';

export const CarouselContainer = styled.div`
  overflow: hidden; /* Hide overflow to create sliding effect */
  width: 100%; /* Full width container */
  position: relative;
`;

export const CarouselWrapper = styled.div`
  display: flex; /* Arrange items in a row */
  transition: transform 0.5s ease-in-out; /* Smooth transition */
  width: ${props => props.totalItems * 20}%; /* Set the width to accommodate all items */
   justify-content: center; /* Center images */
  align-items: center; /* Center items vertically within their grid area */
  justify-content: center; /* Center the entire grid container horizontally */
  align-content: center;
`;

export const CarouselItem = styled.div`
  flex: 0 0 20%; /* Each item takes up 20% of the container to fit 5 items */
  box-sizing: border-box;
  padding: 0.5rem; /* Optional spacing between items */
   max-width: 10rem; /* Adjust as needed */
`;
