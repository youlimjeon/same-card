import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  padding: ${(props) => props.padding};
  background: ${(props) => props.color};
  border: none;
  border-radius: 3px;
  font-size: ${(props) => props.fontSize};
  color: #ffffff;
  transition: 0.3s all;

  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const SharedButton = (props) => {
  const {
    className,
    padding,
    fontSize,
    title,
    color,
    handleClick
  } = props;

  return (
    <Button
      className={className}
      padding={padding}
      fontSize={fontSize}
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
  fontSize: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

SharedButton.defaultProps = {
  className: ""
};

export default SharedButton;
