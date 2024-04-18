import Button from "@mui/material/Button";

function CButton({ text, type }) {
  return (
    <Button
      type={type}
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
