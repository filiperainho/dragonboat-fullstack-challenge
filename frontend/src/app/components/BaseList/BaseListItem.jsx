import React from "react";

import ListItem from "@material-ui/core/ListItem";

const BaseListItem = ({ children, ...rest }) => {
  return (
    <ListItem {...rest} >
      {children}
    </ListItem>
  );
};

export default BaseListItem;
