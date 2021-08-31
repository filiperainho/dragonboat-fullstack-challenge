import React from "react";

import List from "@material-ui/core/List";

const BaseList = ({ children, ...rest }) => {
  return (
    <List {...rest} >
      {children}
    </List>
  );
};

export default BaseList;
