import React, { useEffect, useState } from "react";

import styled from "styled-components";

import axios from "axios";

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryTheme,
  VictoryVoronoiContainer,
  VictoryTooltip,
} from "victory";

import { Paper, Container } from "@material-ui/core";

import useStyles from "../helper/styles";
import Title from "../helper/Title";
import { DiscreteSlider } from "../helper/Slider";
import Alert from "../helper/Alert";
import Progress from "../helper/Progress";

const sharedAxisStyles = {
  axis: {
    stroke: "transparent",
  },
  tickLabels: {
    fontSize: 14,
  },
  axisLabel: {
    padding: 36,
    fontSize: 15,
    fontStyle: "italic",
  },
};

const SeasonHistogramBar = (props) => {
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState("");
  const [maxCount, setMaxCount] = useState(100);
  const [data, setData] = useState();
  const [yearGroup, setYearGroup1] = React.useState([2013, 2019]);
  const [years, setYears] = React.useState([2020]);

  const classes = useStyles();

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
        setData(turtleData);
        let max = 0;
        setYears(
          Object.keys(turtleData).map((year) => {
            const parsedYear = parseInt(year, 10);
            if (turtleData[parsedYear][2].Count > max) {
              max = turtleData[parsedYear][2].Count;
            }
            return parsedYear;
          })
        );
        setLoading(false);
        setMaxCount(max);
      } catch (err) {
        console.log(err.message);
        setAlert(err.message);
      }
    })();
  }, [props.dataSource]);

  return (
    <div>
      <div className={classes.appBarSpacer} />
      {alert !== "" && <Alert severity="error" message={alert} />}

      <Container className={classes.container}>
        <Paper>
          <Title>Season Histogram</Title>
          {loading && <Progress />}
          {!loading && (
            <VictoryChart
              containerComponent={
                <VictoryVoronoiContainer
                  labels={({ datum }) => datum.Count}
                  voronoiDimension="x"
                  labelComponent={
                    <VictoryTooltip dy={-7} constrainToVisibleArea />
                  }
                />
              }
              domainPadding={{ x: 100 }}
              theme={VictoryTheme.material}
              width={300}
              height={200}
            >
              <VictoryAxis
                style={{
                  ...sharedAxisStyles,
                  grid: {
                    pointerEvents: "painted",
                    strokeWidth: 0.5,
                  },
                }}
                label="# Turtle Counts"
                dependentAxis
                domain={{ y: [0, maxCount + 10] }}
              />
              <VictoryAxis
                style={{
                  ...sharedAxisStyles,
                  axisLabel: { ...sharedAxisStyles.axisLabel, padding: 35 },
                }}
                label="Season"
              />
              <VictoryGroup
                offset={20}
                colorScale={"qualitative"}
                categories={{ x: ["Early", "Late", "Total"] }}
              >
                <VictoryBar
                  animate={{ duration: 100 }}
                  data={data[yearGroup[0]]}
                  x="Period"
                  y="Count"
                />
                <VictoryBar
                  animate={{ duration: 100 }}
                  data={data[yearGroup[1]]}
                  x="Period"
                  y="Count"
                />
              </VictoryGroup>
            </VictoryChart>
          )}
          {!loading && (
            <YearSlider
              year={yearGroup}
              setYear={setYearGroup1}
              years={years}
              title="Compare Years"
              defaultValue={[2013, 2019]}
            />
          )}
        </Paper>
      </Container>
    </div>
  );
};

const SliderContainer = styled.div`
  padding: 16px 25px 10px;

  // when rendered in the gallery preview
  a & {
    padding: 12px 36px 0px;
  }
`;

const YearSlider = ({ year, setYear, years, title, defaultValue }) => {
  const [value, setValue] = React.useState(0);

  const first_year = years[0];
  const last_year = years[years.length - 1];
  const total_years = last_year - first_year;
  return (
    <SliderContainer>
      <DiscreteSlider
        onChange={(obj, newValue) => {
          setValue(newValue);
          if (year !== newValue) {
            setYear(newValue);
          }
        }}
        defaultValue={defaultValue}
        value={value}
        maxValue={last_year}
        minValue={first_year}
        steps={total_years}
        title={title}
      />
    </SliderContainer>
  );
};

export { SeasonHistogramBar };
