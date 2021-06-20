import React, { useState } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "../../Shared/Button";

const Info = styled.li`
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  padding: 0 1rem 0 0;
  font-weight: bold;
`;

const Point = styled.span``;

const ButtonList = styled.div`
  margin: 0 0 0 auto;

  button:not(:last-child) {
    margin: 0 3px 0 0;
  }
`;

const Team = ({ name }) => {
  const [point, setPoint] = useState(0);

  return (
    <Info>
      <Title>{name}</Title>
      <Point>{point}</Point>
      <ButtonList>
        <Button
          padding="0.2rem 0.5rem"
          fontSize="1rem"
          title="+"
          color="#5f84d1"
          handleClick={() => setPoint(point + 1)}
        />
        <Button
          padding="0.2rem 0.5rem"
          fontSize="1rem"
          title="-"
          color="#ff5b10"
          handleClick={() => setPoint(point - 1)}
        />
      </ButtonList>
    </Info>
  );
};

Team.propTypes = {
  name: PropTypes.string.isRequired
};

export default Team;
