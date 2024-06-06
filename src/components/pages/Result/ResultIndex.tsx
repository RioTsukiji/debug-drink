import React from "react";
import { Grid } from "@mui/material";
// import fruitsPattern from "../../../icons/decolate/pattern_fruits_gray.jpg";
// import { resultDataType } from "./ResultData";
import { resultData } from "./ResultData";
import { useLocation, useNavigate } from "react-router-dom";

const cardStyles: React.CSSProperties = {
  width: "360px",
  height: "485px",
  padding: "20px",
  backgroundColor: "white",
  zIndex: "2",
  borderRadius: "10px",
  boxShadow: " 0 10px 40px rgba(29, 36, 50, .1)",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const DetailButtonStyles: React.CSSProperties = {
  height: "50px",
  border: "none",
  backgroundColor: "#4298b4",
  borderRadius: "40px",
  color: "white",
  fontWeight: "bold",
  boxSizing: "border-box",
  padding: "10px 25px",
  boxShadow: "none",
  fontSize: "16px",
  width: "100%",
  maxWidth: "140px",
  display: "block",
};

type DetailButtonProps = {
  result: "stress" | "depression" | "tired" | "playful";
};

const DetailButton: React.FC<DetailButtonProps> = ({ result }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/result_detail", { state: { result: result } });
  };
  return (
    <button style={DetailButtonStyles} onClick={handleClick}>
      続ける
    </button>
  );
};

export const ResultIndex = () => {
  const location = useLocation();
  const { result } = location.state as {
    result: "stress" | "depression" | "tired" | "playful";
  };
  const resultInfo = resultData[result];

  return (
    <>
      <Grid
        style={{
          display: "grid",
          placeItems: "center",
          height: "100vh",
          width: "100vw",
          padding: "20px 15px",
          backgroundColor: "#dddfe2",
        }}
      >
        <Grid
          style={{
            ...cardStyles,
            borderTop: "solid 3px",
            color: resultInfo.color,
          }}
        >
          <div className="card-inner" style={{ textAlign: "center" }}>
            <p style={{ marginBottom: "8px", padding: "0" }}>
              あなたの身体のバグ：
            </p>
            <h1 style={{ marginBottom: "5px" }}>{resultInfo.bugName}</h1>
            <h4 style={{ marginBottom: "20px", color: resultInfo.color }}>
              {resultInfo.alphabet}
            </h4>
            <img
              src={resultInfo.img}
              style={{ width: "160px", height: "160px", marginBottom: "20px" }}
              alt="result-img"
            />
            <p>{resultInfo.message}</p>
          </div>
          <div
            style={{
              display: "flex",
              placeContent: "center",
              width: "100%",
            }}
          >
            <DetailButton result={result} />
          </div>
        </Grid>
      </Grid>
    </>
  );
};
