import React from "react";

const StartQuiz = (props) => {
  return (
    <div className="start-page text-center p-4 border rounded-xl shadow-lg mt-7">
      <h1 className="text-3xl">Welcome To Front end Quiz!</h1>
      <p className="text-lg mb-4">
        Lets see how well are you aware with Front end development
      </p>
      <ul>
        <li>This quiz has {props.totalQuestions} questions</li>
        <li>
          {" "}
          You have {props.totalTime / 60} minutes to complete it. Good luck!
        </li>
      </ul>
      <button
        className="cursor-pointer bg-blue-500 p-3 text-white rounded-lg text-lg w-[150px] mt-7"
        onClick={props.onStart}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartQuiz;
