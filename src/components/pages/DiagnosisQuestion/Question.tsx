import React from "react";
import { Grid, Typography } from "@mui/material";
import { CircleButton } from "./CircleButton";

interface QuestionProps {
  questionText: string;
  onSelect: (selectedIndex: number) => void;
  selectedValue: number | null;
}

// Questionコンポーネント
export const Question: React.FC<QuestionProps> = ({
  questionText,
  onSelect,
  selectedValue,
}) => {
  const sizes = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Grid style={{ marginBottom: 40 }}>
      <Typography
        style={{ textAlign: "start", marginBottom: 20, marginTop: 10 }}
      >
        {questionText}
      </Typography>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {sizes.map((size, index) => (
          <CircleButton
            key={index}
            size={size}
            selected={selectedValue === index}
            onClick={() => onSelect(index)}
          />
        ))}
      </Grid>
    </Grid>
  );
};
