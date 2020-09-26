import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Material UI
import {
  AppBar,
  CssBaseline,
  Drawer,
  Divider,
  IconButton,
  List,
  Toolbar,
  Typography,
  Switch,
  Grid,
} from "@material-ui/core";

// Custom styling
import useStyles from "./helper/styles";
import clsx from "clsx";

import { MainListItems } from "./dashboard/menuItems";
import DashboardComponent from "./dashboard/DashboardComponent";
import { SeasonCountBar } from "./vis/SeasonCount";
import { SeasonHistogramBar } from "./vis/SeasonHistogram";
import { ExploreScatter } from "./vis/Explore";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faColumns,
  faChartBar,
  faSlidersH,
  faBars,
  faChevronLeft,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

library.add(faColumns, faChartBar, faSlidersH, faBars, faChevronLeft, faCogs);

const App = () => {
  const [dataSource, setDataSource] = useState(false);
  const classes = useStyles();

  // Drawer
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <FontAwesomeIcon icon="bars" />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>data source: localhost</Grid>
                <Grid item>
                  <Switch
                    checked={dataSource}
                    onChange={(event) => {
                      setDataSource(event.target.checked);
                    }}
                    color="default"
                    inputProps={{ "aria-label": "checkbox with default color" }}
                  />
                </Grid>
                <Grid item>dataservice</Grid>
              </Grid>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <FontAwesomeIcon icon="chevron-left" />
            </IconButton>
          </div>
          <Divider />
          <List>{MainListItems()}</List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <Route exact path="/React-Turtles/">
            <DashboardComponent dataSource={dataSource} />
          </Route>
          <Route path="/React-Turtles/SeasonCount">
            <SeasonCountBar dataSource={dataSource} />
          </Route>
          <Route path="/React-Turtles/SeasonHistogram">
            <SeasonHistogramBar dataSource={dataSource} />
          </Route>
          <Route path="/React-Turtles/Explore">
            <ExploreScatter dataSource={dataSource} />
          </Route>
        </main>
      </Router>
    </div>
  );
};

export default App;
