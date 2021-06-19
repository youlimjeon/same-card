import React from "react";

import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #ffaa11;
`;

const Logo = styled.h1`
  margin: 0;
  padding: 0.5rem;
  font-size: 3.2vmin;
`;

const Header = () => {
  return (
    <Container>
      <Logo>학교 이름</Logo>
    </Container>
  );
};

export default Header;
