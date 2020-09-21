import React, { useEffect, useState } from "react";

import axios from "axios";

import {
  VictoryBar,
  VictoryChart,
  VictoryScatter,
  VictoryAxis,
  VictoryLine,
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
  const [xdim, setXDim] = useState('Annuli');
  const [ydim, setYDim] = useState('Weight');
  useEffect(() => {
    (async () => {
      try {
        // const res = await axios.get(
        //   `https://bmd-micro.herokuapp.com/getTwoDimensionsPerGenderVictory`
        // );
        const res = await axios.get(
          `http://0.0.0.0:5000/getTwoDimensionsPerGenderVictory?dim1=${xdim}&dim2=${ydim}`
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

  const jitter = () => {
    if (Math.floor(Math.random() * 2))
      return Math.floor(Math.random() * 50) /100;
    else
      return -Math.floor(Math.random() * 50) /100;
  }
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
                data={data["f"].data}
                y={'Weight'}
                x={(d) => d.Annuli + jitter()}
              />
              {/* <VictoryLine
                data={data["f"].trend.data}
                style={{ data: { stroke: "red" } }}
              />
              <VictoryScatter
                style={{ data: { fill: "blue" } }}
                size={3}
                data={data["m"].data}
              />
              <VictoryLine
                data={data["m"].trend.data}
                style={{ data: { stroke: "blue" } }}
              />
              <VictoryScatter
                style={{ data: { fill: "green" } }}
                size={3}
                data={data["unknown"].data}
              />
              <VictoryLine
                data={data["unknown"].trend.data}
                style={{ data: { stroke: "green" } }}
              /> */}
            </VictoryChart>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export { ExploreScatter };
