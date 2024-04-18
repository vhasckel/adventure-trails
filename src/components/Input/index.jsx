import TextField from "@mui/material/TextField";
import { forwardRef } from "react";

const Input = forwardRef(
  ({ label, type, id, onChange, value, step, ...rest }, ref) => {
    return (
      <TextField
        inputRef={ref}
        id={id}
        label={label}
        type={type}
        variant="outlined"
        onChange={onChange}
        value={value}
        step={step}
        {...rest}
      />
    );
  }
);

export default Input;
