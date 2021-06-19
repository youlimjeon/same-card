import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const Label = styled.label`
  padding: 0 1rem 0 0;
`;
const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

const SharedInput = (props) => {
  const {
    id,
    value,
    label,
    type,
    placeHolder,
    handleChange
  } = props;
  const isInputTypeNumber = type === "number";

  return (
    <>
      <Label htmlFor={id}>
        {label}
      </Label>
      <Input
        id={id}
        value={value}
        type={type}
        placeholder={placeHolder}
        onChange={handleChange}
        {...isInputTypeNumber && {
          min: 2,
          max: 10
        }}
      />
    </>
  );
};

SharedInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SharedInput;
