import React from "react";

import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Game from "../Game";
import Header from "../Header";
import Main from "../Main";

const Container = styled.main`
  width: 100vw;
  height: auto;
  min-height: calc(100vh - 60px);
  margin: 0;
  padding: 0;
  background-color: #f1f0f0;
`;

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/game" component={Game} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
