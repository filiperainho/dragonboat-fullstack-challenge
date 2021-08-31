import React from "react";

import Button from "@material-ui/core/Button";

const BaseButton = ({ children, ...rest }) => {
  return (
    <Button {...rest} >
      {children}
    </Button>
  );
};

export default BaseButton;
