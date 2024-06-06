import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  responses: (number | null)[];
  result: "stress" | "depression" | "tired" | "playful";
};

const resultButtonStyles: React.CSSProperties = {
  width: "100%",
  maxWidth: "300px",
  minWidth: "260px",
  color: "#fff",
  backgroundColor: "#6c4d7b",

  fontFamily: "Noto Sans JP",
  fontWeight: "bold",
  borderRadius: "40px",
  height: "60px",
  padding: "14px 40px",
  fontSize: "18px",
  boxSizing: "border-box",
};

export const ResultButton: React.FC<Props> = ({ responses, result }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/result", { state: { responses, result: result } });
  };

  return (
    <Button onClick={handleClick} style={resultButtonStyles}>
      結果 →
    </Button>
  );
};
