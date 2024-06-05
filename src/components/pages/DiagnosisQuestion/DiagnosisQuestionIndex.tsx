import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Question } from "./Question";
import { ResultButton } from "./ResultButton";
import QuestionTop from "./QuestionTop";

const DiagnosisQuestionIndex = () => {
  const questions = [
    "疲れが溜まっている。",
    "最近よく眠れない。",
    "ストレスを感じることが多い。",
    "お酒をよく飲む。",
    "すっきりしたい。",
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
      <QuestionTop />
      <Grid style={{}}>
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
