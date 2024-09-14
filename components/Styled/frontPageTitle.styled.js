import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center; /* Centers the content horizontally */
  align-items: center; /* Centers the content vertically */
  width: 100%;

  @media (min-width: 768px) {
    margin-left: 36%;
    margin-top: 6rem;
    max-width: 27rem;
  }
  @media (min-width: 1024px) {
    margin-left: 35%;
    margin-top: 3rem;
    width: 100%;
    max-width: 36rem;
  }
  @media (min-width: 1280px) {
    margin-left: 34%;
    margin-top: 2rem;
    margin-bottom: -3rem;
    width: 100%;
    max-width: 47rem;
  }

  @media (min-width: 1880px) {
    margin-left: 35%;
    margin-top: -18rem;
   max-width: 50rem;
  }
  @media (min-width: 2500px) {
    margin-left: 33%;
    margin-top: -20rem;
    margin-bottom: -2rem;
    width: 100%;
    max-width: 65rem;
  }
`;

export const BackgroundContainer = styled.div`
  background-image: url("/assets/text-background.png");
  background-repeat: no-repeat;
  background-position: center; /* Centers the background image */
  background-size: contain; /* ensure that the entire background image is visible within the container, without any part of it being clipped */
  padding: 20px 40px; /* Adds padding to ensure the text isn't too close to the edges */
  display: flex;
  width: 100%;
  justify-content: center; /* Centers text horizontally */
  align-items: center; /* Centers text vertically */

  @media (max-width: 768px) {
    padding: 10px 20px; /* Further adjust padding for tablets */
  }
  @media (max-width: 1200px) {
    padding: 15px 30px; /* Adjust padding for medium-sized screens */
  }
`;

export const Culture = styled.p`
  font-family: "Regular Brush", sans-serif;
  font-size: 5rem;
  transform: rotate(-5deg);
  text-align: center;
  line-height: 1.2;
  color: #2f60de;
  z-index: 1; /* Ensure text is above the background */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Adds a subtle shadow to the text for emphasis */

  @media (min-width: 768px) {
    font-size: 2rem; /* Further adjust font size for tablets */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Adjust shadow size */
  }
  @media (min-width: 1024px) {
    font-size: 3rem; /* Adjust font size for medium screens */
    text-shadow: 1.5px 1.5px 3px rgba(0, 0, 0, 0.3); /* Adjust shadow size */
  }

  @media (min-width: 1280px) {
    font-size: 4rem; /* Adjust font size for small screens */
    text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.3); /* Adjust shadow size */
  }
  @media (min-width: 1300px) {
    font-size: 5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Adjust shadow size */
  }
`;
