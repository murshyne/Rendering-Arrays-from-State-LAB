import { useState } from "react";
import "./App.css";
import Learner from "./components/Learner/Learner";

function App() {
  const [learnerData] = useState({
    learners: learnerData,
  });

  return (
    <main>
           {learnerData.learners.map((learner, index) => (
        <Learner key={index} learner={learner} />
      ))}
    </main>
  );
}

export default App;
