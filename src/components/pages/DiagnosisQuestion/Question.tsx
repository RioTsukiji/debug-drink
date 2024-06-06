import React from "react";
import { Grid, Typography } from "@mui/material";
import { CircleButton } from "./CircleButton";

interface QuestionProps {
  question: Question;
  onSelect: (selectedIndex: number) => void;
  selectedValue: number | null;
}

type Question = {
  type: string;
  question: string;
};

// Questionコンポーネント
export const Question: React.FC<QuestionProps> = ({
  question,
  onSelect,
  selectedValue,
}) => {
  const sizes = [7, 6, 5, 4, 3, 2, 1];

  return (
    <Grid
      style={{
        borderBottom: "1px solid #DDDFE2",
        paddingBottom: "20px",
        paddingTop: "35px",
      }}
    >
      <Typography
        style={{
          textAlign: "center",
          marginBottom: 20,
          marginTop: 10,
          fontWeight: "bold",
          fontSize: "1.125rem",
        }}
      >
        {question.question}
      </Typography>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {sizes.map((size, index) => (
          <CircleButton
            key={index}
            size={size}
            selected={selectedValue === size}
            onClick={() => onSelect(size)}
          />
        ))}
      </Grid>
      <Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexGrow: "1",
            textTransform: "uppercase",
            margin: "15px 0",
          }}
        >
          <Typography
            style={{
              color: "#33A474",
              fontSize: ".8em",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            同意する
          </Typography>
          <Typography
            style={{
              color: "#88619A",
              fontSize: ".8em",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            同意しない
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};
