import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppTemplate from "./components/templates/AppTemplate";
import DiagnosisQuestionIndex from "./components/pages/DiagnosisQuestion/DiagnosisQuestionIndex";
import { ResultIndex } from "./components/pages/Result/ResultIndex";
import ResultDetail from "./components/pages/Result/ResultDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppTemplate>
          <Routes>
            <Route path="/" Component={DiagnosisQuestionIndex} />
            <Route path="/result" Component={ResultIndex} />
            <Route path="/detail" Component={ResultDetail} />
            {/* これ正しくないのでどっかでなおす */}
          </Routes>
        </AppTemplate>
      </BrowserRouter>
    </div>
  );
}

export default App;
