import React, { useState } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import Modal from "../../Modal";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffaa11;
  font-size: 4vmin;
  box-sizing: border-box;
  transition: 0.3s all;
  visibility: ${props => props.isCleared ? "hidden" : "visible"};

  :hover {
    cursor: pointer;
    background: #f79f00;
    box-shadow: 3px 3px 10px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Card = ({ card, setCards, clickedCard, setClickedCard }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const clickCard = (currentCard) => {
    setModalVisible(true);

    if (clickedCard === 0) {
      setClickedCard(currentCard.number);
      return;
    }

    if (clickedCard > 0 && clickedCard === currentCard.pair) {
      setCards((cards) => {
        const clearedCards = cards.map((card) => {
          if (card.number === clickedCard || card.number === currentCard.number) {
            card.isCleared = true;
          }
          return card;
        });

        return clearedCards;
      });
    }

    setClickedCard(0);
  };

  return (
    <>
      <Wrapper
        isCleared={card.isCleared}
        onClick={() => clickCard(card)}
      >
        {card.number}
      </Wrapper>
      {isModalVisible && (
        <Modal
          isVisible={isModalVisible}
          setVisible={setModalVisible}
          card={card}
        />
      )}
    </>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  clickedCard: PropTypes.number.isRequired,
  setClickedCard: PropTypes.func.isRequired,
  setCards: PropTypes.func.isRequired
};

export default Card;
