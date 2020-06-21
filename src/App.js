import React from "react";
import "./App.css";
import ResponseTime from "./components/graphs/response_time";
import Questionanalysis from "./components/graphs/question_analysis";
import Analytics from "./components/graphs/analytics";
import Userinfo from "./components/user/user";
import Skills from "./components/skills/skills";
import Quizscore from "./components/progress/quiz_score";
function App() {
  return (
    <div className="container">
      <div className="row container">
        <Userinfo />
        <Quizscore />
      </div>

      <div className="row ">
        <Questionanalysis legendPosition="bottom" />
        <ResponseTime legendPosition="bottom" />
        <Analytics legendPosition="bottom" />
      </div>
      <div className="container h4">Skills Analysis</div>
      <Skills />
    </div>
  );
}

export default App;
