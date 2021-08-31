import React, { useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";

const BaseInput = ({ onChange, ...rest }) => {
  const onInputValueChange = useCallback((ev) => onChange({ value: ev.target.value, name: ev.target.name }), [onChange]);

  return (
    <InputContainer>
      <TextField {...rest} onChange={onInputValueChange} />
    </InputContainer>
  );
};

BaseInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

const InputContainer = styled.div`
  margin-bottom: 32px;
  width: 100%;
`;

export default BaseInput;
