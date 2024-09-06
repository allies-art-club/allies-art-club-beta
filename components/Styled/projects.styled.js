"use client";
import styled from "styled-components";

//Co-Creative Communities: A Collaborative Design project
export const BorderWrap = styled.div`
  display: flex;
  border: 0.5rem dashed #ccc;
  flex-direction: column;
  align-items: center;
  padding: 20px;


   max-width: 100%;
  margin: 0 auto; /
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 35rem;
  flex-direction: row;

  @media (min-width: 320px) {
    gap: 0rem;
  }
  @media (min-width: 420px) {
    gap: 7rem;
  }
  @media (min-width: 768px) {
    gap: 6rem;
  }
  @media (min-width: 1025px) {
    gap: 5rem;
  }

  @media (min-width: 1350px) {
    gap: 0rem;
  }
  @media (min-width: 2000px) {
    gap: 25rem;
  }
  @media (min-width: 2500px) {
    gap: 35rem;
  }
`;

export const ProjectsIcon = styled.div`
  width: 100%;
  max-width: 10rem;
  @media (min-width: 320px) {
    max-width: 5rem;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1025px) {
    max-width: 5rem;
  }

  @media (min-width: 1350px) {
    max-width: 6rem;
  }
  @media (min-width: 2000px) {
    max-width: 8rem;
  }
`;
export const IconWrap = styled.div`
  width: 100%;
  max-width: 5rem;
  @media (min-width: 320px) {
    max-width: 15rem;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1025px) {
  }

  @media (min-width: 1350px) {
  }
  @media (min-width: 1920px) {
  }
`;

//rest of page

export const HighlightsWrap = styled.div`
  margin: 2rem;
`;

export const HighlightsHeartsR = styled.div`
  width: 100%;
  max-width: 30rem;
  margin-left: 70rem;
  margin-bottom: -7rem;
`;

export const IconWrapper = styled.div`
 display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */

  margin-right: ${(props) => (props.$left ? "0px" : "0")};
  margin-left: ${(props) => (!props.$left ? "0px" : "0")};
  order: ${(props) => (props.$left ? "-1" : "0")}; /* Moves the icon to 


  @media (min-width: 768px) {
    margin-right: ${(props) => (props.$left ? "0px" : "0")};
    margin-left: ${(props) => (!props.$left ? "0px" : "0")};
     justify-content: center; /* Center content horizontally */
  align-items: center; /* 
  }  
  @media (min-width: 1280px) {
    margin-right: ${(props) => (props.$left ? "0px" : "0")};
    margin-left: ${(props) => (!props.$left ? "0px" : "0")};
}
`;
