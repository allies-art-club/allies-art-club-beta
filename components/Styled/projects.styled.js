"use client";
import styled from "styled-components";

//Co-Creative Communities: A Collaborative Design project
export const BorderWrap = styled.div`
  display: flex;
  border: 0.3rem dotted black;
  flex-direction: column;
   border-radius: 10px;
  align-items: center;
  padding: 50px;


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
    gap: 34rem;
  }
`;

export const HeadingContainer3 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 35rem;
  flex-direction: row;
  @media (min-width: 320px) {
    gap: 0rem;
  }
  @media (min-width: 520px) {
    gap: 10rem;
  }

    @media (min-width: 680px) {
    gap: 17rem;
  }
  @media (min-width: 768px) {
    gap: 14rem;
  }
  @media (min-width: 1024px) {
    gap: 20rem;
  }

  @media (min-width: 1280px) {
    gap: 24rem;
  }
  @media (min-width: 2000px) {
    gap: 25rem;
  }
  @media (min-width: 2500px) {
    gap: 50rem;
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

//projects



export const HighlightsWrap = styled.div`
  display: flex;
  align-items: center; /* Vertically center items */
  justify-content: space-between; /* Space out items */
  margin: 4rem;
  flex-wrap: wrap; /* Allows items to wrap to the next line on smaller screens */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    text-align: center; /* Center text on smaller screens */
  }
`;

// Style for image container
export const HighlightsHeartsR = styled.div`
  flex: 1; /* Allows image container to take up remaining space */
  display: flex;
  justify-content: flex-end; /* Align image to the right */
  
  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
    justify-content: center; /* Center image on smaller screens */
    margin-top: 1rem; /* Add margin-top on smaller screens for spacing */
  }
`;

// Style for the image
export const Image = styled.img`
  max-width: 100%; /* Ensure image does not overflow */
  height: auto; /* Maintain aspect ratio */
`;