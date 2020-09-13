import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Material UI
import { AppBar, CssBaseline, Drawer, Divider, IconButton, List, Toolbar, Typography } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';

// Custom styling
import useStyles from "./helper/styles";
import clsx from "clsx";

import {MainListItems} from "./dashboard/menuItems"
import DashboardComponent from "./dashboard/DashboardComponent";
import { SeasonCountBar } from "./vis/SeasonCount";

const App = () => {
  const classes = useStyles();

  // Drawer
  const [open, setOpen] = React.useState(true);
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
              <MenuIcon />
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
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{MainListItems()}</List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <Route exact path="/">
            <DashboardComponent />
          </Route>
          <Route path="/SeasonCount">
            <SeasonCountBar />
          </Route>
        </main>
      </Router>
    </div>
  );
};

export default App;
