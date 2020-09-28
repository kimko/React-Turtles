import React, { useEffect, useState, useRef } from "react";

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
import { LocationSelect } from "../helper/LocationSelect";

const SeasonCountBar = (props) => {
  const [bars, setBars] = useState(<VictoryBar />);
  const [alert, setAlert] = useState("");
  const [legendData, setLegendData] = useState([]);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const cache = useRef({});

  useEffect(() => {
    (async () => {
      try {
        // TODO refactor 👇😬
        let url;
        let target;
        let turtleData;
        if (location) target = `sumYearSeasonVictory?locations=${location}`;
        else target = `sumYearSeasonVictory`;
        if (props.dataSource) url = `https://bmd-micro.herokuapp.com/${target}`;
        else url = `http://0.0.0.0:5000/${target}`;
        if (cache.current[url]) {
          turtleData = cache.current[url];
        } else {
          const res = await axios.get(url);
          turtleData = res.data.data.turtles;
          cache.current[url] = turtleData;
        }
        setLoading(false);
        setLegendData([]);
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
  }, [props.dataSource, location]);

  const classes = useStyles();

  return (
    <div>
      <div className={classes.appBarSpacer} />
      {alert !== "" && <Alert severity="error" message={alert} />}

      <Container className={classes.container}>
        <Paper>
          <Title>Count per Season</Title>
          <LocationSelect setValue={setLocation} />
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
