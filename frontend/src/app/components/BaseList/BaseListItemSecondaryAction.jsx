import React from "react";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const BaseListItemSecondaryAction = ({ children, ...rest }) => {
  return (
    <ListItemSecondaryAction {...rest} >
      {children}
    </ListItemSecondaryAction>
  );
};

export default BaseListItemSecondaryAction;
