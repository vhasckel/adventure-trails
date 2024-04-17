import React, { forwardRef } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SelectInput = forwardRef(
  ({ id, label, value, onChange, options, ...rest }, ref) => {
    return (
      <FormControl variant="outlined" {...rest}>
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <Select
          labelId={`${id}-label`}
          id={id}
          value={value}
          onChange={onChange}
          label={label}
          ref={ref}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
);

export default SelectInput;
