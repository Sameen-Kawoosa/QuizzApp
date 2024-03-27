import React, { useState, useEffect } from "react";
import { QuizData } from "./QuizData";
import QuizResult from "./QuizResult";
import StartQuiz from "./StartQuiz";
import Timer from "./Timer";
import QuestionCard from "./QuestionCard";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(QuizData.length).fill(0)
  );
  const [showResult, setShowResult] = useState(false);
  const [showStartPage, setShowStartPage] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showQuestionCard, setShowQuestionCard] = useState(false); // State to control visibility of QuestionCard

  const totalTime = 20 * 60;

  const startQuiz = () => {
    setTimeLeft(totalTime);
    setShowResult(false);
    setShowStartPage(false);
    setShowQuestionCard(true);
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowResult(true);
    }
  }, [timeLeft]);

  const changeQuestion = () => {
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = (selectedOptionIndex) => {
    const currentAnswer = QuizData[currentQuestion].answer;
    const selectedOption = selectedOptionIndex; // Since options start from 1
    const currentSelectedOption = selectedOptions[currentQuestion];

    if (
      currentSelectedOption === currentAnswer &&
      selectedOption !== currentAnswer
    ) {
      // Deduct the score if the previous answer was correct and the new one is wrong
      setScore(score - 1);
    } else if (
      selectedOption === currentAnswer &&
      currentSelectedOption !== currentAnswer
    ) {
      // Increase the score if the new answer is correct and the previous one was wrong
      setScore(score + 1);
    }
  };

  const clearResponse = () => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestion] = 0;
    setSelectedOptions(newSelectedOptions);
    setScore(
      score -
        (selectedOptions[currentQuestion] === QuizData[currentQuestion].answer
          ? 1
          : 0)
    );
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setSelectedOptions(Array(QuizData.length).fill(0));
    setScore(0);
    setTimeLeft(0);
    setShowStartPage(true);
    setShowQuestionCard(false);
  };
  console.log(score);

  return (
    <div className=" flex ">
      <div className="App text-3xl bg-white  w-[650px]  m-auto mt-[150px] p-10 rounded-xl shadow-2xl h-auto ">
        {showStartPage ? (
          <StartQuiz
            onStart={startQuiz}
            totalQuestions={QuizData.length}
            totalTime={totalTime}
          />
        ) : (
          <>
            {showResult ? (
              <QuizResult
                score={score}
                totalQuestions={QuizData.length}
                selectedOptions={selectedOptions}
                QuizData={QuizData}
                // tryAgain={resetAll}
              />
            ) : (
              <>
                <h1 className="text-center p-4 border rounded-xl shadow-lg">
                  Quiz App
                </h1>
                <Timer timeLeft={timeLeft} totalTime={totalTime} />

                <div className="questions rounded-xl  text-2xl">
                  <span> {currentQuestion + 1}.</span>
                  <span>{QuizData[currentQuestion].question}</span>
                </div>
                <div className="option-container flex flex-col w-[100%] h-auto p-3">
                  {QuizData[currentQuestion].options.map((option, i) => (
                    <div key={i} className="flex items-center">
                      <input
                        type="radio"
                        name={`option-${currentQuestion}`}
                        className="option-btn mr-2"
                        checked={selectedOptions[currentQuestion] === i + 1}
                        onChange={() => {
                          const newSelectedOptions = [...selectedOptions];
                          newSelectedOptions[currentQuestion] = i + 1;
                          setSelectedOptions(newSelectedOptions);
                          updateScore(i + 1);
                        }}
                      />
                      <label className="option-label ml-2 text-xl font-normal text-black text">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap flex-col items-center">
                  <input
                    className="cursor-pointer p-3  bg-blue-500  text-white rounded-lg text-lg w-[100px] mt-[10px]"
                    type="button"
                    value={
                      currentQuestion === QuizData.length - 1
                        ? "Submit"
                        : "Next"
                    }
                    onClick={changeQuestion}
                  />
                  <button
                    className="cursor-pointer  p-3 bg-blue-500  text-white rounded-lg text-lg w-[150px] mt-[5px]"
                    onClick={clearResponse}
                  >
                    Clear Response
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
      {showQuestionCard && (
        <div className=" bg-white w-auto h-auto mt-[150px]  m-auto p-[50px] rounded-xl shadow-2xl">
          <div className=" flex">
            {QuizData.map((question, index) => (
              <QuestionCard
                key={question.id}
                questionNumber={index + 1}
                isSelected={currentQuestion === index}
                isAnswered={selectedOptions[index] !== 0}
                onClick={() => setCurrentQuestion(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
