import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Question } from "./Question";
import { ResultButton } from "./ResultButton";
import QuestionTop from "./DiagnosisQuestionTop";
import { Footer } from "../../templates/Footer";

const DiagnosisQuestionIndex = () => {
  const questions = [
    {
      type: "stress",
      question: "最近寝つきが悪い。",
    },
    {
      type: "stress",
      question: "心配事が頭から離れない。",
    },
    {
      type: "playful",
      question: "つい時間を忘れて遊び、朝まで起きてしまうことがある。",
    },
    {
      type: "playful",
      question: "週に1度以上お酒を飲む。",
    },
    {
      type: "depression",
      question: "今週はあまりいいことがなかった。",
    },
    {
      type: "depression",
      question: "休日、やりたいことがない。",
    },
    {
      type: "tired",
      question: "アルバイト（仕事）は肉体労働だ。",
    },
    {
      type: "tired",
      question: "ベッドではない場所でよく寝落ちしてしまう。",
    },
  ];

  const [responses, setResponses] = useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );

  const calculateScoresByType = () => {
    const scores: { [key: string]: number } = {};

    questions.forEach((question, index) => {
      const response = responses[index];
      if (response !== null) {
        if (!scores[question.type]) {
          scores[question.type] = 0;
        }
        scores[question.type] += response;
      }
    });

    return scores;
  };

  const findHighestScoringType = () => {
    const scores = calculateScoresByType();
    let highestType = "";
    let highestScore = -Infinity;

    Object.entries(scores).forEach(([type, score]) => {
      if (score < 7) {
        highestType = "healthy";
      } else if (score > highestScore) {
        highestScore = score;
        highestType = type;
      }
    });

    return highestType as
      | "stress"
      | "depression"
      | "tired"
      | "playful"
      | "healthy"
      | "";
  };

  // 選択肢が変更されたときの処理
  const handleSelect = (questionIndex: number, selectedIndex: number) => {
    const newResponses = [...responses];
    newResponses[questionIndex] = selectedIndex;
    setResponses(newResponses);
  };
  return (
    <>
      <QuestionTop />
      <Grid style={{ padding: "0 15px", backgroundColor: "#f9f9f9" }}>
        {questions.map((question, index) => (
          <Question
            key={index}
            question={question}
            onSelect={(selectedIndex) => handleSelect(index, selectedIndex)}
            selectedValue={responses[index]}
          />
        ))}
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            padding: "45px 0 90px",
            margin: " auto",
            width: "100%",
            maxWidth: "700px",

            borderBottom: "1px solid #DDDFE2",
          }}
        >
          <ResultButton result={findHighestScoringType()} />
        </div>
      </Grid>
      <Footer />
    </>
  );
};

export default DiagnosisQuestionIndex;
