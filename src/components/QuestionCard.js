import React from "react";

function QuestionCard({ questionNumber, isSelected, isAnswered, onClick }) {
  return (
    <div
      className={`question-card text-center p-4 m-[2px] rounded-xl shadow-lg w-[60px] cursor-pointer ${
        isSelected
          ? "bg-gray-500 text-white"
          : isAnswered
          ? "bg-green-400"
          : "bg-yellow-300"
      }`}
      onClick={onClick}
    >
      <h1 className="text-3xl">{questionNumber}</h1>
    </div>
  );
}

export default QuestionCard;
