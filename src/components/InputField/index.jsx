import TextField from "@mui/material/TextField";

const InputField = ({ label, type, id, onChange, value, step, error }) => {
  return (
    <>
      <TextField
        id={id}
        label={label}
        type={type}
        variant="outlined"
        onChange={onChange}
        value={value}
        step={step}
        required
        error={!!error}
        helperText={error ? error.message : ""}
      />
    </>
  );
};

export default InputField;
