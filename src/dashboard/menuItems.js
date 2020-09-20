import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssessmentIcon from "@material-ui/icons/Assessment";
import TuneIcon from "@material-ui/icons/Tune";
import Tooltip from "@material-ui/core/Tooltip";

// router dom
import { Link } from "react-router-dom";


// POC
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
      <Tooltip title={props.label} placement="right-start">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
      </Tooltip>
      <ListItemText primary={props.label} />
    </ListItem>
  );
};


export const MainListItems = () => {
  const listRoute = {
    "/React-Turtles": 0,
    "/SeasonCount": 1,
    "/SeasonHistogram": 2,
  };
  const [selectedIndex, setSelectedIndex] = React.useState(
    listRoute[window.location.pathname]
  );

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <CusomListItem
        itemNo={0}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        to="/React-Turtles/"
        label="Dashboard"
        // icon={<DashboardIcon  />}
      />
      {/* <ListItem
        button
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
        component={Link}
        to="/React-Turtles/"
      >
        <Tooltip title="Dashboard" placement="right-start">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
        </Tooltip>
        <ListItemText primary="Dashboard" />
      </ListItem> */}
      <ListItem
        button
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1)}
        component={Link}
        to="/React-Turtles/SeasonCount"
      >
        <Tooltip title="Season Count" placement="right-start">
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
        </Tooltip>
        <ListItemText primary="Season Count" />
      </ListItem>
      <ListItem
        button
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(event, 2)}
        component={Link}
        to="/React-Turtles/SeasonHistogram"
      >
        <Tooltip title="Season Histogram" placement="right-start">
          <ListItemIcon>
            <TuneIcon />
          </ListItemIcon>
        </Tooltip>
        <ListItemText primary="Season Histogram" />
      </ListItem>
    </div>
  );
};
