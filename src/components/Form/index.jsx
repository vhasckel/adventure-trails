import TextField from "@mui/material/TextField";

function Input({ label }) {
  const inputProps = {
    borderRadius: "50px",
  };
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      inputProps={{
        style: { borderRadius: "50%" },
      }}
    />
  );
}

export default Input;
