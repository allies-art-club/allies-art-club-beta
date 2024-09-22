import styled from "styled-components";

// Wrapper section
export const HeadWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%; /*

   align-items: center;
  justify-content: space-between; /* This will push the elements to the opposite ends */
  padding: 1rem; /* Optional: Add padding for spacing */
`;

export const ArtIcon = styled.div`
  width: 100px; // Example width, adjust as needed
  height: auto;
`;

export const IconWrapper = styled.div`
  width: 100%;

  @media (min-width: 375px) {
    margin-left: 5rem;
    max-width: 10rem;
  }
  @media (min-width: 1024px) {
    margin-left: 12rem;
  }
  @media (min-width: 1280px) {
    margin-left: 12rem;
    max-width: 15rem;
  }
  @media (min-width: 1920px) {
    margin-left: 35rem;
    max-width: 20rem;
  }
`;

export const MembershipWrapper = styled.div`
  padding: 3rem;
`;
