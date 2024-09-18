import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;

  margin-bottom: 20px;

  @media (min-width: 375px) {
    gap: 1rem;
  }

  @media (min-width: 1300px) {
    gap: 5rem;
  }
`;

const Heading = styled.p`
  flex: auto;
  color: #ffffff;
  display: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Balloon Extra Bold", sans-serif;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Add shadow for text pop */

  @media (min-width: 375px) {
    font-size: 0.7rem;
    max-width: 8rem;
    height: 5rem;
    line-height: 1.5rem;
    padding: 3rem;
  }
  @media (min-width: 768px) {
    font-size: 1rem;
    max-width: 10rem;
    height: 5rem;
    line-height: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
    line-height: 2rem;
    height: 6rem;
    max-width: 20rem;
  }

  @media (min-width: 1280px) {
    font-size: 2rem;
    line-height: 2.5rem;
    height: 7rem;
    padding: 1rem;
    max-width: 20rem;
  }

    @media (min-width: 1300px) {
     font-size: 1rem;
       line-height: 2rem;
        height: 5rem;
  }
  @media (min-width: 1920px) {
    font-size: 2rem;
    line-height: 3rem;
    height: 8rem;
    padding: 1rem;
    max-width: 25rem;
  }
`;

const Creative = styled(Heading)`
  background-color: #2f60de;
  transform: rotate(-2deg);
`;

const Collective = styled(Heading)`
  background-color: #ff25ab;
  transform: rotate(2deg);
`;

const Cultural = styled(Heading)`
  background-color: #f4bc33;
  transform: rotate(-2deg);
`;

export { Container, Cultural, Creative, Collective };
