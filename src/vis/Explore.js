import React, { useEffect, useState } from "react";

import axios from "axios";

import {
  VictoryBar,
  VictoryChart,
  VictoryScatter,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
  VictoryLegend,
} from "victory";

import Alert from "@material-ui/lab/Alert";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

import useStyles from "../helper/styles";
import Title from "../helper/Title";

const ExploreScatter = (props) => {
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://bmd-micro.herokuapp.com/getTwoDimensionsPerGenderVictory`
        );
        const turtleData = res.data.data.turtles;
        console.log(turtleData);
        console.log("done");
        console.log(turtleData["f"][0]);
        setData(turtleData);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setAlert(err.message);
      }
    })();
  }, []);

  const classes = useStyles();

  return (
    <div>
      <div className={classes.appBarSpacer} />
      {alert !== "" && <Alert severity="error">{alert}</Alert>}

      <Container className={classes.container}>
        <Paper>
          <Title>Explore</Title>
          {loading && <CircularProgress />}

          {/* wrapper component that plots all of its children on the same scale.  */}
          {!loading && (
            <VictoryChart
              theme={VictoryTheme.material}
              //   domain={{ x: [0, 5], y: [0, 7] }}
              width={800}
            >
              <VictoryScatter
                style={{ data: { fill: "red" } }}
                size={3}
                data={data["f"]}
              />
              <VictoryScatter
                style={{ data: { fill: "blue" } }}
                size={3}
                data={data["m"]}
              />
              <VictoryScatter
                style={{ data: { fill: "green" } }}
                size={3}
                data={data["unknown"]}
              />
            </VictoryChart>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export { ExploreScatter };
