import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  padding: ${(props) => props.padding};
  background: ${(props) => props.color};
  border: none;
  border-radius: 3px;
  font-size: 2.5vmin;
  color: #ffffff;
  transition: 0.3s all;

  :hover {
    cursor: pointer;
    font-size: 3vmin;
  }
`;

const SharedButton = (props) => {
  const {
    padding,
    title,
    color,
    handleClick
  } = props;

  return (
    <Button
      padding={padding}
      color={color}
      type="button"
      onClick={handleClick}
    >
      {title}
    </Button>
  );
};

SharedButton.propTypes = {
  padding: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default SharedButton;
