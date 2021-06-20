import React, { useState } from "react";

import styled from "styled-components";

import problems from "../../../data/problems";
import Card from "./Card";

const Container = styled.section`
  width: 85vw;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: #ffffff;
`;

const Title = styled.h2`
  height: 25px;
  font-size: 2.5vmin;
  text-align: center;
`;

const Cards = styled.article`
  height: calc(100% - 25px);
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1rem;
  box-sizing: border-box;
`;

const Board = () => {
  const [cards, setCards] = useState(problems);
  const [clickedCard, setClickedCard] = useState(0);

  return (
    <Container>
      <Title>카드를 선택해주세요.</Title>
      <Cards>
        {cards.map((card) => (
          <Card
            key={card.number}
            card={card}
            setCards={setCards}
            clickedCard={clickedCard}
            setClickedCard={setClickedCard}
          />
        ))}
      </Cards>
    </Container>
  );
};

export default Board;
