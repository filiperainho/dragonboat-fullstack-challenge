import React from "react";

import IconButton from "@material-ui/core/IconButton";

const BaseIconButton = ({ children, ...rest }) => {
  return (
    <IconButton { ...rest }>
      { children }
    </IconButton>
  );
};

export default BaseIconButton;
