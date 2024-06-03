import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Question } from "./Question";
import { ResultButton } from "./ResultButton";

const DiagnosisQuestionIndex = () => {
  const questions = [
    "Q1：疲れが溜まっている",
    "Q2：最近よく眠れない",
    "Q3：ストレスを感じることが多い",
    "Q4：お酒をよく飲む",
    "Q5：すっきりしたい",
  ];

  // responsesの型定義
  const [responses, setResponses] = useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );

  // 選択肢が変更されたときの処理
  const handleSelect = (questionIndex: number, selectedIndex: number) => {
    const newResponses = [...responses];
    newResponses[questionIndex] = selectedIndex;
    setResponses(newResponses);
  };
  return (
    <>
      <Grid style={{ marginTop: 100, paddingLeft: "10%", paddingRight: "10%" }}>
        {questions.map((question, index) => (
          <Question
            key={index}
            questionText={question}
            onSelect={(selectedIndex) => handleSelect(index, selectedIndex)}
            selectedValue={responses[index]}
          />
        ))}
        <ResultButton responses={responses} />
      </Grid>
    </>
  );
};

export default DiagnosisQuestionIndex;
