import React, { forwardRef } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SelectInput = ({ id, label, value, onChange, options, defaultValue }) => {
  return (
    <FormControl variant="outlined">
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
