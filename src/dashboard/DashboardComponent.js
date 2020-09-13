import * as React from "react";
import clsx from "clsx";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import useStyles from "../helper/styles";
import Title from "../helper/Title";

const DashbardComponent = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Paper 1 */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <Title>TBD</Title>
            </Paper>
          </Grid>
          {/* Paper 2 */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Title>TBD 2</Title>
            </Paper>
          </Grid>
          {/* Paper 3 */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Title>TBD 3</Title>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DashbardComponent;
