import styled from "styled-components";

export const ContainerSquares = styled.div`
  display: flex;
  width: 100%;
  grid-template-columns: repeat(3, 1fr); /* Creates 3 equal columns */
  margin-bottom: 1rem;

  @media (min-width: 375px) {
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    gap: 2rem;
  }

  @media (min-width: 1280px) {
    gap: 5rem;
  }

  @media (min-width: 1300px) {
    gap: 1rem;
  }
  @media (min-width: 1920px) {
    gap: 17rem;
  }
`;

const squareWidth = "20rem";
const squareHeight = "17rem";

export const SquareBox = styled.div``;

export const SquareText = styled.div`
  display: flex;

  @media (min-width: 768px) {
    margin-left: 0.5rem;
  }
`;

export const Connect = styled.div`
  background-color: #2f60de;
  transform: rotate(2deg);
  width: ${squareWidth};
  height: ${squareHeight};

   @media (min-width: 375px) {
     width: 8rem;
    height: 8rem;
  }

  @media (min-width: 768px) {
    width: 10rem;
    height: 10rem;
  }

  @media (min-width: 1024px) {
    width: 13rem;
    height: 14rem;
  }

  @media (min-width: 1280px) {
    width: 16rem;
    height: 16rem;
  }
  @media (min-width: 1300px) {
    width: 14rem;
    height: 14rem;
  }

  @media (min-width: 1880px) {
    width: 18rem;
    height: 18rem;
  }
`;

export const Care = styled.div`
  background-color: #ff25ab;
  transform: rotate(-2deg);
  width: ${squareWidth};
  height: ${squareHeight};


   @media (min-width: 375px) {
    width: 8rem;
    height: 8rem;
  }
  @media (min-width: 768px) {
    width: 10rem;
    height: 10rem;
  }

  @media (min-width: 1024px) {
    width: 13rem;
    height: 14rem;
  }
  @media (min-width: 1280px) {
    width: 16rem;
    height: 16rem;
  }
  @media (min-width: 1300px) {
    width: 14rem;
    height: 14rem;
  }
  @media (min-width: 1880px) {
    width: 18rem;
    height: 18rem;
  }
`;

export const Create = styled.div`
  background-color: #f4bc33;
  transform: rotate(2deg);
  width: ${squareWidth};
  height: ${squareHeight};

  @media (min-width: 375px) {
     width: 8rem;
    height: 8rem;
  }

  @media (min-width: 768px) {
    width: 10rem;
    height: 10rem;
  }

  @media (min-width: 1024px) {
    width: 13rem;
    height: 14rem;
  }
  @media (min-width: 1280px) {
    width: 16rem;
    height: 16rem;
  }
  @media (min-width: 1300px) {
    width: 14rem;
    height: 14rem;
  }
  @media (min-width: 1880px) {
    width: 18rem;
    height: 18rem;
  }
`;

export const SquareTitle = styled.h2`
  font-family: "Balloon Extra Bold", sans-serif;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: white;
  text-align: center;
  padding: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Add shadow for text pop */

    @media (min-width: 375px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
  }

  @media (min-width: 1280px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1300px) {
    font-size: 2rem;
  }

  @media (min-width: 1880px) {
    font-size: 3rem;
  }
`;

export const Paragraph = styled.div`
  text-align: left;

  padding: 1rem;
  color: white;
  font-family: var(--font-arial-nova-cond);

    @media (min-width: 375px) {
    font-size: 0.6rem;
    margin-top: -1rem;
  }


  @media (min-width: 768px) {
    margin-top: -1rem;
    line-height: 1;
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1280px) {
    font-size: 1.7rem;
  }
  @media (min-width: 1300px) {
    font-size: 1.5rem;
     padding: 1rem;
  }
  @media (min-width: 1880px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1920px) {
    font-size: 1.8rem;
  }
`;
