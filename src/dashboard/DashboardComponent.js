import * as React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import useStyles from "../helper/styles";

import { SeasonCountBar } from "../vis/SeasonCount";
import { SeasonHistogramBar } from "../vis/SeasonHistogram";
import { ExploreScatter } from "../vis/Explore";

const DashbardComponent = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={1}>
          <Grid item md={6}>
            <SeasonCountBar dataSource={props.dataSource} />
          </Grid>
          <Grid item md={6}>
            <SeasonHistogramBar dataSource={props.dataSource} />
          </Grid>
          <Grid item md={6}>
            <ExploreScatter dataSource={props.dataSource} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DashbardComponent;
