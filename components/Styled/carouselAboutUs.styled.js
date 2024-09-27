
import styled from "styled-components";

// Container for the entire carousel
export const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

// Track for sliding images
export const CarouselTrack = styled.div`
  display: flex;
  transform: translateX(${(props) => -props.activeIndex * 100}%);
  transition: transform 0.5s ease-in-out;
`;

// Each individual slide
export const CarouselSlide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Container for the image
export const CarouselImage = styled.div`
  width: 100%; /* Control the size of the circular image */
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  position: relative; /* Required for next/image fill */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

// Indicators (dots) below the carousel
export const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Indicator = styled.div`
  width: 12px;
  height: 12px;
  margin: 0 8px;
  background-color: ${(props) => (props.active ? "red" : "#ccc")};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
`;







