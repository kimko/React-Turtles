import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// TODO native Select does not work
// import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SimpleSelect = (props) => {
  const classes = useStyles();

  const handleChange = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          onChange={handleChange}
        >
          <MenuItem value={"Annuli"}>Annuli</MenuItem>
          <MenuItem value={"Weight"}>Weight</MenuItem>
          <MenuItem value={"Carapace"}>Carapace</MenuItem>
          <MenuItem value={"Plastron"}>Plastron</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export { SimpleSelect };
