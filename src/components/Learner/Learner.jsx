/* eslint-disable react/prop-types */
import Score from "../Score/Score";


function Learner({ learner }) {
  return (
    <>
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      {learner.scores.map((score, index) => (
        <Score key={index} score={score} />
      ))}
    </>
  );
}

export default Learner;
