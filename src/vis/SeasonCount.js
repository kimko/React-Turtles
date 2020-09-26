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

import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import useStyles from "../helper/styles";
import Title from "../helper/Title";
import Alert from "../helper/Alert";
import Progress from "../helper/Progress";

const SeasonCountBar = (props) => {
  const [bars, setBars] = useState(<VictoryBar />);
  const [alert, setAlert] = useState("");
  const [legendData, setLegendData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        // TODO refactor 👇😬
        let res;
        if (props.dataSource)
          res = await axios.get(
            `https://bmd-micro.herokuapp.com/sumYearSeasonVictory`
          );
        else res = await axios.get(`http://0.0.0.0:5000/sumYearSeasonVictory`);
        // 👆
        const turtleData = res.data.data.turtles;
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
  }, [props.dataSource]);

  const classes = useStyles();

  return (
    <div>
      <div className={classes.appBarSpacer} />
      {alert !== "" && <Alert severity="error" message={alert} />}

      <Container className={classes.container}>
        <Paper>
          <Title>Count per Season</Title>
          {loading && <Progress />}

          {/* wrapper component that plots all of its children on the same scale.  */}
          {!loading && (
            <VictoryChart
              // domainPadding will add space to each side of VictoryBar to
              // prevent it from overlapping the axis
              domainPadding={{ x: 100 }}
              theme={VictoryTheme.material}
              width={800}
              height={400}
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
