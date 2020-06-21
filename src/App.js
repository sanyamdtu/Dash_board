import React from "react";
import "./App.css";
import ResponseTime from "./components/graphs/response_time";
import Question_analysis from "./components/graphs/question_analysis";
import Analytics from "./components/graphs/analytics";
import User_info from "./components/user/user";
import Skills from "./components/skills/skills";
import Quiz_score from "./components/progress/quiz_score";
function App() {
  return (
    <div className="container">
      <div className="row container">
        <User_info />
        <Quiz_score />
      </div>

      <div className="row ">
        <Question_analysis legendPosition="bottom" />
        <ResponseTime legendPosition="bottom" />
        <Analytics legendPosition="bottom" />
      </div>
      <div className="container h4">Skills Analysis</div>
      <Skills />
    </div>
  );
}

export default App;
