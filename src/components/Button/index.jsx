import Button from "@mui/material/Button";
import styles from "./styles.module.css";

function CButton({ text }) {
  return (
    <Button
      style={{
        backgroundColor: "#87A922",
      }}
      variant="contained"
    >
      {text}
    </Button>
  );
}

export default CButton;
