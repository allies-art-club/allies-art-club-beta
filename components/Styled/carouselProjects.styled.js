import styled from "styled-components";
const Image = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

// Define a styled component for the full-screen modal
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  cursor: zoom-out;
`;

export { ModalImage, Modal, Image };


