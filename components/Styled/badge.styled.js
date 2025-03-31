import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  transform: rotate(+5deg);
  justify-content: center; /* Centers the content horizontally */
  align-items: center; /* Centers the content vertically */
  margin-top: -6rem;
  margin-left: 35%;
  width: 100%;
  margin-bottom: -1rem;

  @media (min-width: 768px) {
    margin-left: 20%;
    margin-top: -4rem;
    margin-bottom: 0.5rem;
    max-width: 20rem;
  }
  @media (min-width: 1024px) {
    margin-top: -7rem;
    margin-bottom: 1rem;
    margin-left: 6rem;
    width: 100%;
    max-width: 25rem;
  }
  @media (min-width: 1280px) {
    margin-top: -8rem;
    margin-left: 11rem;
    margin-bottom: 1rem;
    width: 100%;
    max-width: 10rem;
  }

  @media (min-width: 1300px) {
    margin-top: -6rem;
    margin-left: 18rem;
    margin-bottom: -0.5rem;
    width: 100%;
    max-width: 7rem;
  }
  @media (min-width: 1800px) {
    margin-top: -11rem;
    margin-left: 12rem;
    margin-bottom: 2rem;
    max-width: 55rem;
  }
  @media (min-width: 2500px) {
    margin-top: -8rem;
    margin-bottom: 0rem;
    margin-left: 18rem;
    width: 100%;
    max-width: 60rem;
  }
`;

export const BadgeBackground = styled.div`
  background-repeat: no-repeat;
  background-size: contain; /* ensure that the entire background image is visible within the container, without any part of it being clipped */
  padding: 20px 40px; /* Adds padding to ensure the text isn't too close to the edges */
  display: flex;
  width: 100%;

  @media (min-width: 480px) {
    padding: 5px 10px; /* Further adjust padding for small screens */
  }
  @media (min-width: 768px) {
    padding: 10px 20px; /* Further adjust padding for tablets */
  }
  @media (min-width: 1024px) {
    padding: 15px 30px; /* Adjust padding for medium-sized screens */
    max-width: 15rem;
    margin-left: -5rem;
  }
  @media (min-width: 1300px) {
    margin-top: -16rem;
    margin-bottom: 8rem;
    margin-left: 12rem;
    width: 100%;
    max-width: 50rem;
  }
`;
