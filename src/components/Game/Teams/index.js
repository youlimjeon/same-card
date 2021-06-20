import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import Team from "./Team";

const Container = styled.section`
  width: 15vw;
  height: 100%;
  margin: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: white;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 2vmin;
  text-align: center;
`;

const List = styled.ul`
  margin: 0;
  padding: 1rem;
  list-style: none;

  li {
    margin: 0 0 1rem 0;
  }
`;

const makeTeams = (numbers) => {
  const result = [];

  for (let i = 1; i <= numbers; i++) {
    result.push({ name: `팀 ${i}` });
  }

  return result;
};

const Teams = ({ numbers }) => {
  return (
    <Container>
      <Title>팀 점수판</Title>
      <List>
        {makeTeams(numbers).map((team, index) => (
          <Team key={index} name={team.name} />
        ))}
      </List>
    </Container>
  );
};

Teams.propTypes = {
  numbers: PropTypes.string.isRequired
};

export default Teams;
