import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";

export default function Progress(props) {
  return (
    <Typography component="div" variant="body1">
      <CircularProgress />
      {"give it 10 seconds...the heroku dynos are snoozing"}
    </Typography>
  );
}
