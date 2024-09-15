import styled from "styled-components";

//homepage section breaks

//Shooting star
const StarSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: left; /* Center elements horizontally */
  align-items: center; /* Center elements vertically */
  gap: 5rem; /* Space between elements */
  margin-bottom: -2rem;
`;
const StarWrap = styled.div`
  width: 100%;
  max-width: 15rem;
  margin-top: -3rem;
`;

const TextWrap = styled.div`
  margin-top: -3rem;
`;

//

const HeartsSection = styled.div`
  display: flex;
  justify-content: flex-end; /* Aligns child to the right */
  width: 100%; /* Ensure the section takes full width */
  padding: 1rem;

  @media (min-width: 375px) {
    margin-top: 3rem;
  }

  @media (min-width: 768px) {
    margin-top: 3rem;
  }

  @media (min-width: 1024px) {
    margin-top: 3rem;
    margin-bottom: -4rem;
  }

  @media (min-width: 1300px) {
  }

  @media (min-width: 1880px) {
    margin-bottom: -4rem;
    margin-top: 4rem;
  }
`;
const HeartsTextWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 4rem;
  margin-top: -6rem;
`;

const HeartsWrap = styled.div`
  width: 100%;

  @media (min-width: 1300px) {
    max-width: 15rem;
    margin-top: -6rem;
  }
`;

export {
  StarWrap,
  TextWrap,
  HeartsTextWrap,
  StarSection,
  HeartsWrap,
  HeartsSection,
};
