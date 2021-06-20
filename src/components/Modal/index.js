import React, { useRef } from "react";

import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import styled from "styled-components";

import Button from "../Shared/Button";

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  width: 40vw;
  height: auto;
  background: #ffffff;
`;
const Header = styled.div`
  width: 100%;
  height: 25px;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f1f0f0;
  box-sizing: border-box;
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 2rem;
  }
`;

const Image = styled.img`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;

const Modal = ({ isVisible, setVisible, card }) => {
  const modalRef = useRef();

  const clickModalOutside = (event) => {
    if (!modalRef.current || modalRef.current.contains(event.target)) return;
    setVisible(false);
  };

  const renderModal = () => {
    if (isVisible === false) {
      return null;
    }

    return (
      <Backdrop onClick={clickModalOutside}>
        <Container ref={modalRef}>
          <Header>
            {card.title}
            <Button
              padding="0.3rem"
              fontSize="0.8rem"
              title="X"
              color="#000000"
              handleClick={() => setVisible(false)}
            />
          </Header>
          <Content>
            {card.images && (
              card.images.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.description}
                  width={image.width}
                  height={image.height}
                />
              ))
            )}
            <p>{card.content}</p>
          </Content>
        </Container>
      </Backdrop>
    );
  };

  return (
    <>
      {createPortal(
        renderModal(),
        document.getElementById("modal")
      )}
    </>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired
};

export default Modal;
