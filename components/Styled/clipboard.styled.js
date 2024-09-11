"use client";
import styled from "styled-components";

const ClipboardContainer = styled.div`
  position: relative;
  width: 95%;

  min-height: calc(100vh - 4rem - 287px);
  @media (min-width: 768px) {
    min-height: calc(100vh - 4rem - 488px);
    width: 90%;
  }
  @media (min-width: 1300px) {
    min-height: calc(100vh - 494.83px);
  }
  @media (max-width: 767px) {
    left: 2.5%;
  }
  margin: 0px auto;
  #clipboardWrap {
    min-height: calc(100vh - 4rem - 287px);
    @media (min-width: 768px) {
      min-height: calc(100vh - 4rem - 488px);
    }
    @media (min-width: 1300px) {
      min-height: calc(100vh - 494.83px);
    }
  }
`;
const ClipboardWrapper = styled.div`
  width: 100%;
  margin-bottom: 10rem;
  background-color: white;
  padding: 20px 10px;
  @media (min-width: 768px) {
    padding: 30px 40px;
  }
  z-index: 3;
`;

const Content = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export { ClipboardContainer, ClipboardWrapper, Content };
