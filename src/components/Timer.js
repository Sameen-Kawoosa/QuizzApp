import React from "react";

function Timer({ timeLeft, totalTime }) {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  const remainingMinutes = Math.floor(timeLeft / 60);
  const remainingSeconds = timeLeft % 60;

  return (
    <div className="timer text-left p-4  mt-7">
      <h1 className="text-base">
        Total Time: {minutes}:{seconds} | Time Left:{" "}
        {remainingMinutes.toString().padStart(2, "0")}:
        {remainingSeconds.toString().padStart(2, "0")}
      </h1>
    </div>
  );
}

export default Timer;
