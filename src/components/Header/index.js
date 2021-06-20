import React from "react";

import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Button from "../Shared/Button";

const Container = styled.header`
  width: 100%;
  height: 60px;
  padding: 0rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffaa11;
  box-sizing: border-box;
`;

const Logo = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 3.2vmin;
`;

const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <Logo>학교 이름</Logo>
      <Button
        padding="0.5rem 1rem"
        fontSize="1rem"
        title="메인으로 가기"
        color="#000000"
        handleClick={() => history.push("/")}
      />
    </Container>
  );
};

export default Header;
