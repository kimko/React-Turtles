import React, { useEffect, useState } from "react";

import axios from "axios";

import {
  VictoryChart,
  VictoryScatter,
  VictoryLine,
  VictoryTheme,
  VictoryLegend,
} from "victory";

import Alert from "@material-ui/lab/Alert";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from '@material-ui/core/Grid';

import useStyles from "../helper/styles";
import Title from "../helper/Title";
import { SimpleSelect } from "../helper/SimpleSelect";

const ExploreScatter = (props) => {
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [xDim, setXDim] = useState('Annuli');
  const [yDim, setYDim] = useState('Weight');
  const [legendF, setLegendF] = useState("female");
  const [legendM, setLegendM] = useState("male");
  const [legendU, setLegendU] = useState("unknown");

  useEffect(() => {
    (async () => {
      try {
        // TODO refactor 👇😬
        let res;
        if (props.dataSource)
          res = await axios.get(
            `https://bmd-micro.herokuapp.com/getTwoDimensionsPerGenderVictory?dim1=${xDim}&dim2=${yDim}`,
          );
        else
          res = await axios.get(
            `http://0.0.0.0:5000/getTwoDimensionsPerGenderVictory?dim1=${xDim}&dim2=${yDim}`,
          );
        // 👆
        const turtleData = res.data.data.turtles;
        console.log(turtleData);
        console.log("done");
        console.log(turtleData["f"].data[0]);
        setData(turtleData);
        setLoading(false);
        setLegendF(`${turtleData["f"].data.length} f`);
        setLegendM(`${turtleData["m"].data.length} m`);
        setLegendU(`${turtleData["unknown"].data.length} ?`);
      } catch (err) {
        console.log(err.message);
        setAlert(err.message);
      }
    })();
  }, [xDim, yDim, props.dataSource]);

  const classes = useStyles();

  const jitter = (dim) => {
    if (dim !== 'Annuli')
      return 0;
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
          <Grid container justify="left" spacing={0}>
            <SimpleSelect title="X Axis" setValue={setXDim} value={xDim} />
            <SimpleSelect title="Y Axis" setValue={setYDim} value={yDim} />
          </Grid>
          {loading && <CircularProgress />}
          {!loading && (
            <VictoryChart
              theme={VictoryTheme.material}
              width={1000}
              height={500}
            >
              <VictoryLegend
                x={125}
                y={10}
                orientation="horizontal"
                gutter={20}
                style={{ border: { stroke: "black" } }}
                colorScale={["#ff5252", "#1565c0", "#43a047"]}
                data={[{ name: legendF }, { name: legendM }, { name: legendU }]}
              />
              <VictoryScatter
                style={{ data: { fill: "#ff5252" } }}
                size={3}
                data={data["f"].data}
                x={(d) => d[xDim] + jitter(xDim)}
                y={(d) => d[yDim] + jitter(yDim)}
              />
              <VictoryLine
                data={data["f"].trend.data}
                style={{ data: { stroke: "#ff5252" } }}
              />
              <VictoryScatter
                style={{ data: { fill: "#1565c0" } }}
                size={3}
                data={data["m"].data}
                x={(d) => d[xDim] + jitter(xDim)}
                y={(d) => d[yDim] + jitter(yDim)}
              />
              <VictoryLine
                data={data["m"].trend.data}
                style={{ data: { stroke: "#1565c0" } }}
              />
              <VictoryScatter
                style={{ data: { fill: "#43a047" } }}
                size={3}
                data={data["unknown"].data}
                x={(d) => d[xDim] + jitter(xDim)}
                y={(d) => d[yDim] + jitter(yDim)}
              />
              <VictoryLine
                data={data["unknown"].trend.data}
                style={{ data: { stroke: "#43a047" } }}
              />
            </VictoryChart>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export { ExploreScatter };
