import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppTemplate from "./components/templates/AppTemplate";
import DiagnosisQuestionIndex from "./components/pages/DiagnosisQuestion/DiagnosisQuestionIndex";
import { ResultIndex } from "./components/pages/Result/ResultIndex";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppTemplate>
          <Routes>
            <Route path="/" Component={DiagnosisQuestionIndex} />
            <Route path="/result" Component={ResultIndex} />c
          </Routes>
        </AppTemplate>
      </BrowserRouter>
    </div>
  );
}

export default App;
