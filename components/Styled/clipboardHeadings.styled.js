import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
  gap: 5em;
  margin-bottom: 20px;
`;

const Heading = styled.p`
  flex: auto;
  color: #ffffff;
  display: flex;
  width: 100%;
  max-width: 25rem;
  height: 7rem;
  line-height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Balloon Extra Bold", sans-serif;
  font-weight: bold;
  font-size: 1erm;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Add shadow for text pop */

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }

  @media (min-width: 1300px) {
    font-size: 2rem;
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
