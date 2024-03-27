import React from "react";

function QuizResult(props) {
  const { QuizData } = props;
  const attemptedQuestions = props.selectedOptions.filter(
    (option) => option !== 0
  ).length;
  const correctAnswers = props.selectedOptions.filter(
    (option, index) => option === QuizData[index].answer
  ).length;
  const skippedQuestions = props.totalQuestions - attemptedQuestions;

  return (
    <>
      <div className="h-32 text-2xl">
        <p>Total Questions: {props.totalQuestions}</p>
        <p>Attempted Questions: {attemptedQuestions}</p>
        <p>Correct Answers: {correctAnswers}</p>
        <p>Skipped Questions: {skippedQuestions}</p>
        <p>Score: {props.score}</p>
      </div>
      {/* <button
        className="cursor-pointer ml-[230px] bg-blue-500 p-3 text-white rounded-lg text-lg w-[100px] mt-[50px] "
        onClick={props.tryAgain}
      ></button> */}
    </>
  );
}

export default QuizResult;
