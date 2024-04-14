import Button from "@mui/material/Button";

function CButton({ text }) {
  return (
    <Button
      style={{
        backgroundColor: "var(--btn-color)",
      }}
      variant="contained"
    >
      {text}
    </Button>
  );
}

export default CButton;
