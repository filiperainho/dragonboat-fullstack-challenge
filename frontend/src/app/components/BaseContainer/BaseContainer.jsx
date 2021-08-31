import React from "react";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";

const BaseContainer = ({ maxWidth, children, ...rest }) => {
  return (
    <Container
      {...rest}
      maxWidth={maxWidth} >
      { children }
    </Container>
  );
};

BaseContainer.propTypes = {
  maxWidth: PropTypes.string,
};

BaseContainer.defaultProps = {
  maxWidth: "sm",
};

export default BaseContainer;
