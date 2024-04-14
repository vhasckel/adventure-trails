import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";

function Form() {
  return (
    <FormControl>
      <FormLabel>Enter Name</FormLabel>
      <TextField id="outlined-basic" label="Nome" variant="outlined" />
      <Button>Submit</Button>
    </FormControl>
  );
}

export default Form;
