import * as React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import useStyles from "../helper/styles";

import { SeasonCountBar } from "../vis/SeasonCount";
import { SeasonHistogramBar } from "../vis/SeasonHistogram";

const DashbardComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={1}>
          <Grid item md={6}>
            <SeasonCountBar />
          </Grid>
          <Grid item md={6}>
            <SeasonHistogramBar />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DashbardComponent;
