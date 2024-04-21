import { TextField } from "@mui/material";

const InputField = ({
  name,
  label,
  validationRules,
  register,
  errors,
  type = "text",
  ...rest
}) => (
  <TextField
    {...register(name, validationRules)}
    id={`outlined-${name}`}
    label={label}
    variant="outlined"
    type={type}
    error={!!errors[name]}
    helperText={errors[name]?.message || ""}
    {...rest}
  />
);

export default InputField;
