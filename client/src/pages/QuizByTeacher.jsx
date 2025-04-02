import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const QuizByTeacher = () => {
  const [questions, setQuestions] = useState([]); // Store all added questions
  const [questionText, setQuestionText] = useState(""); // Question text
  const [questionType, setQuestionType] = useState("general"); // Default is 'general'
  const [options, setOptions] = useState(["", "", "", ""]); // Options for MCQ
  const [correctAnswer, setCorrectAnswer] = useState(""); // Correct answer

  const {quiz_name} = useParams();
  

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question_text: questionText,
        question_type: questionType,
        options: questionType === "mcq" ? options : [], // Only include options for MCQ
        correct_answer: correctAnswer,
      },
    ]);
    setQuestionText("");
    setCorrectAnswer("");
    setOptions(["", "", "", ""]);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/quiz", { 
        quiz_name: quiz_name, 
        questions 
      });
      alert("Quiz Created Successfully!");
      setQuestions([]);
    } catch (error) {
      console.error("Error creating quiz:", error);
      alert("There was an error creating the quiz.");
    }
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleTypeChange = (event) => {
    setQuestionType(event.target.value);
    if (event.target.value === "general") {
      setOptions(["", "", "", ""]); // Clear options when switching to General
    }
  };

  return (
    <div className="text-black">
      <h1>Create a Quiz - {quiz_name}</h1>
      
      <div className="p-4 flex flex-col gap-2">
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Enter Question Text"
        />
        <select value={questionType} onChange={handleTypeChange}>
          <option value="general">General</option>
          <option value="mcq">MCQ</option>
        </select>

        {questionType === "mcq" && (
          <div>
            <h4>Options</h4>
            {options.map((option, index) => (
              <input
                key={index}
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
              />
            ))}
          </div>
        )}

        <input
          type="text"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          placeholder="Enter Correct Answer"
        />

        <button onClick={addQuestion}>Add Question</button>
      </div>

      <button onClick={handleSubmit}>Submit Quiz</button>

      <div>
        <h3>Added Questions:</h3>
        {questions.map((q, idx) => (
          <div key={idx}>
            <p>{q.question_text}</p>
            <p>Type: {q.question_type}</p>
            {q.question_type === "mcq" && (
              <ul>
                {q.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            )}
            <p>Correct Answer: {q.correct_answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default QuizByTeacher