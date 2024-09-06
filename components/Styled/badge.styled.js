import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  transform: rotate(+5deg);
  justify-content: center; /* Centers the content horizontally */
  align-items: center; /* Centers the content vertically */
  margin-top: -6rem;
  margin-left: 35%;
  width: 100%;
  max-width: 50rem;

  @media (min-width: 480px) {
    margin-left: 35%;
    margin-top: -6rem;
  }
  @media (min-width: 768px) {
    margin-left: 25%;
    margin-top: -6rem;
    max-width: 30rem;
  }
  @media (min-width: 1024px) {
    margin-top: -10rem;
    margin-bottom: 2rem;
    margin-left: -1rem;
    width: 100%;
    max-width: 30rem;
  }
  @media (min-width: 1450px) {
    margin-top: 1rem;
    margin-bottom: -7rem;
    margin-left: -7rem;
    width: 100%;
    max-width: 40rem;
  }

  @media (min-width: 2500px) {
    margin-top: -15rem;
    margin-bottom: 0rem;
    margin-left: 22rem;
    width: 100%;
    max-width: 40rem;
  }
`;

export const BadgeBackground = styled.div`
  background-image: url("/assets/donate-hexagon.png");
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
