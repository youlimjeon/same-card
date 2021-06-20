import React from "react";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Board from "./Board";
import Teams from "./Teams";

const Container = styled.section`
  width: 100%;
  height: calc(100vh - 60px);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f0f0;
  box-sizing: border-box;
`;

const Game = () => {
  const location = useLocation();
  const teams = location.state?.teams || "5";

  return (
    <Container>
      <Teams numbers={teams} />
      <Board />
    </Container>
  );
};

export default Game;
