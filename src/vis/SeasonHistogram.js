import React, { useEffect, useState } from "react";

import styled from "styled-components";

import axios from "axios";

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryVoronoiContainer,
  VictoryTooltip,
} from "victory";

import Alert from "@material-ui/lab/Alert";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

import useStyles from "../helper/styles";
import Title from "../helper/Title";
import { DiscreteSlider } from "../helper/Slider";

const Container = styled.div``;

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

const SeasonHistogramBar = () => {
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState("");
  const [maxCount, setMaxCount] = useState(100);
  const [data, setData] = useState();
  const [year, setYear] = React.useState('2020');
  const [years, setYears] = React.useState([2020]);

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://bmd-micro.herokuapp.com/sumYearSeasonVictory`
        );
        const turtleData = res.data.data.turtles;
        setData(turtleData);
        let max = 0;
        setYears(
          Object.keys(turtleData).map((year) => {
            const parsedYear = parseInt(year, 10);;
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
  }, []);

  return (
    <div>
      <div className={classes.appBarSpacer} />
      {alert !== "" && <Alert severity="error">{alert}</Alert>}

      <Container className={classes.container}>
        <Paper>
            <Title>Season Histogram</Title>
            {loading && <CircularProgress />}
            {!loading && (
            <VictoryChart
              containerComponent={
                <VictoryVoronoiContainer
                  voronoiDimension="x"
                  labelComponent={
                    <VictoryTooltip
                      constrainToVisibleArea
                      style={{
                        fontSize: 6,
                      }}
                      flyoutStyle={{
                        fill: "#24232a",
                        strokeWidth: 0.5,
                      }}
                    />
                  }
                />
              }
              domainPadding={{ x: 100 }}
              theme={VictoryTheme.material}
              width={400}
              height={250}
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
                domain={{ y: [0, maxCount+ 10] }}
              />
              <VictoryAxis
                style={{
                  ...sharedAxisStyles,
                  axisLabel: { ...sharedAxisStyles.axisLabel, padding: 35 },
                }}
                label="Season"
              />
              <VictoryBar
                animate={{ duration: 100 }}
                data={data[year]}
                x="Period"
                y="Count"
              />
            </VictoryChart>)}
            {!loading && (
            <YearSlider year={year} setYear={setYear} years={years}/>)}
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

const YearSlider = ({ year, setYear, years }) => {
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
        value={value}
        maxValue={last_year}
        minValue={first_year}
        steps={total_years}
      />
    </SliderContainer>
  );
};

export { SeasonHistogramBar };
