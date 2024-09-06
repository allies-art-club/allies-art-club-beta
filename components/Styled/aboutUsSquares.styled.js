import styled from "styled-components";

export const ContainerSquares = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Creates 3 equal columns */
  gap: 10rem; /* Adjust the gap between the grid items */
  padding: 2erm; /* Optional: add padding around the grid */
  margin-bottom: 1rem;
`;

const squareWidth = "20rem";
const squareHeight = "17rem";

export const SquareBox = styled.div`
  padding: 1rem;
`;

export const SquareText = styled.div`
  display: flex;
  margin-left: 1rem;
`;
export const Paragraph = styled.div`
  font-size: 1.5em;
  text-align: left;

  padding: 1rem;
  line-height: 2;
  color: white;
  font-family: var(--font-arial-nova-cond);
`;

export const Connect = styled.div`
  background-color: #2f60de;
  transform: rotate(2deg);
  width: ${squareWidth};
  height: ${squareHeight};
`;

export const Care = styled.div`
  background-color: #ff25ab;
  transform: rotate(-2deg);
  width: ${squareWidth};
  height: ${squareHeight};
`;

export const Create = styled.div`
  background-color: #f4bc33;
  transform: rotate(2deg);
  width: ${squareWidth};
  height: ${squareHeight};
`;

export const SquareTitle = styled.h2`
  font-family: "Balloon Extra Bold", sans-serif;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: white;
  text-align: center;
  padding: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Add shadow for text pop */
`;
