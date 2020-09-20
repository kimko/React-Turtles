import * as React from "react";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

export const CusomListItem = (props) => {
  const handleListItemClick = (event, index) => {
    props.setSelectedIndex(index);
  };

  return (
    <ListItem
      button
      selected={props.selectedIndex === props.itemNo}
      onClick={(event) => handleListItemClick(event, props.itemNo)}
      component={Link}
      to={props.to}
    >
      <Tooltip title={props.label} placement="left-start">
        <ListItemIcon>
          <FontAwesomeIcon icon={props.icon} />
        </ListItemIcon>
      </Tooltip>
      <ListItemText primary={props.label} />
    </ListItem>
  );
};
