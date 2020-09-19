import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const DiscreteSlider = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        {`${props.steps} Years ${props.minValue}..${props.maxValue}`}
      </Typography>
      <Slider
        defaultValue={2019}
        aria-labelledby="discrete-slider-small-steps"
        valueLabelDisplay="on"
        marks
        min={props.minValue}
        max={props.maxValue}
        onChange={props.onChange}
      />
    </div>
  );
};

export { DiscreteSlider };
