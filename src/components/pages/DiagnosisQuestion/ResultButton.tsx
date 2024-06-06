import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

type Props = {
  result: "stress" | "depression" | "tired" | "playful" | "healthy" | "";
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

const grayscaleStyles: React.CSSProperties = {
  backgroundColor: "#DDDFE2",
  cursor: "not-allowed",
};

export const ResultButton: React.FC<Props> = ({ result }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (result !== "") {
      navigate("/result", { state: { result: result } });
    }
  };

  const isDisabled = result === "";

  return (
    <Button
      onClick={handleClick}
      style={{
        ...resultButtonStyles,
        ...(result === "" ? grayscaleStyles : {}),
      }}
      disabled={isDisabled}
    >
      結果 →
    </Button>
  );
};
