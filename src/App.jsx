import { useState } from 'react'
import './App.css'
import { learners } from './components/utility/data.mjs';
import Learner from './components/Learner/Learner';


const App = () => {
  const [learnerData] = useState({learners});

  return (
    <>
 {learnerData.learners.map((learner, index) => (
        <Learner key={index} learner={learner} />
      ))}
    </>
  )
}

export default App;
