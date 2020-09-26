import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const LocationSelect = (props) => {
  const classes = useStyles();
  const handleChange = (event, value) => {
    props.setValue(
      String(
        Object.keys(value).map((index) => {
          return value[index].name;
        })
      )
    );
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Autocomplete
          multiple
          id="tags-standard"
          options={locations}
          getOptionLabel={(option) => option.name}
          onChange={handleChange}
          // TODO input label not on same height as SimpleSelect
          renderInput={(params) => (
            <TextField {...params} variant="standard" label="Locations" />
          )}
        />
      </FormControl>
    </div>
  );
};

const locations = [
  { name: "Gresham" },
  { name: "Mason Flats" },
  { name: "Whitaker Ponds" },
];

export { LocationSelect };
