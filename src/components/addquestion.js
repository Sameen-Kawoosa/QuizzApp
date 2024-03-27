import React, { useState } from "react";

const AddformData = () => {
  const [data, setData] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Do something with the data, such as sending it to a server or adding it to a list of questions
    console.log(data);
  };

  return (
    <div>
      <form id="quiz-form" onSubmit={handleFormSubmit}>
        <label htmlFor="question">Question:</label>
        <br />
        <input
          type="text"
          id="question"
          name="question"
          value={data.question}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="option1">Option 1:</label>
        <br />
        <input
          type="text"
          id="option1"
          name="option1"
          value={data.option1}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="option2">Option 2:</label>
        <br />
        <input
          type="text"
          id="option2"
          name="option2"
          value={data.option2}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="option3">Option 3:</label>
        <br />
        <input
          type="text"
          id="option3"
          name="option3"
          value={data.option3}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="option4">Option 4:</label>
        <br />
        <input
          type="text"
          id="option4"
          name="option4"
          value={data.option4}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="answer">Correct Answer (1-4):</label>
        <br />
        <input
          type="number"
          id="answer"
          name="answer"
          min="1"
          max="4"
          value={data.answer}
          onChange={handleInputChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddformData;
