import React, { useEffect, useState } from "react";

import axios from "axios";

import {
  VictoryBar,
  VictoryChart,
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

const SeasonCountBar = (props) => {
  const [bars, setBars] = useState(<VictoryBar />);
  const [alert, setAlert] = useState("");
  const [legendData, setLegendData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://bmd-micro.herokuapp.com/sumYearSeasonVictory`
        );
        const turtleData = res.data.data.turtles;
        console.log(turtleData);
        const barElements = Object.keys(turtleData).map((key, index) => {
          setLegendData((legendData) => [...legendData, { name: key }]);
          return (
            <VictoryBar
              data={turtleData[key]}
              x="Period"
              y="Count"
              key={"bar" + key}
            />
          );
        });
        setBars(barElements);
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
            <Title>Count per Season</Title>
            {loading && <CircularProgress />}

            {/* wrapper component that plots all of its children on the same scale.  */}
            {!loading && (
              <VictoryChart
                // domainPadding will add space to each side of VictoryBar to
                // prevent it from overlapping the axis
                domainPadding={{ x: 100 }}
                theme={VictoryTheme.material}
                width={800}
                hight={"100%"}
              >
                <VictoryLegend
                  data={legendData}
                  orientation="horizontal"
                  colorScale={"qualitative"}
                />
                <VictoryAxis dependentAxis={true} />
                <VictoryAxis />
                <VictoryGroup
                  offset={10}
                  colorScale={"qualitative"}
                  categories={{ x: ["Early", "Late", "Total"] }}
                >
                  {bars}
                </VictoryGroup>
              </VictoryChart>
            )}
          </Paper>
      </Container>
    </div>
  );
};

export { SeasonCountBar };
