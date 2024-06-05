import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Question } from "./Question";
import { ResultButton } from "./ResultButton";
import QuestionTop from "./DiagnosisQuestionTop";
import { Footer } from "../../templates/Footer";

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
      <Grid style={{ padding: '0 15px', backgroundColor: '#f9f9f9' }}>
        {questions.map((question, index) => (
          <Question
            key={index}
            questionText={question}
            onSelect={(selectedIndex) => handleSelect(index, selectedIndex)}
            selectedValue={responses[index]}
          />
        ))}
        <div style={{
          display: 'grid',
          justifyContent: 'center',
          padding: '45px 0 90px',
          margin: ' auto',
          width: '100%',
          maxWidth: '700px',

          borderBottom: '1px solid #DDDFE2',
        }}>
          <ResultButton responses={responses} />
        </div>
      </Grid>
      <Footer />
    </>
  );
};

export default DiagnosisQuestionIndex;
