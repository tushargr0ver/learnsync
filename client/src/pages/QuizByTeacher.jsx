import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

const QuizByTeacher = () => {
  const [questions, setQuestions] = useState([]); // Store all added questions
  const [questionText, setQuestionText] = useState(""); // Question text
  const [questionType, setQuestionType] = useState("general"); // Default is 'general'
  const [options, setOptions] = useState(["", "", "", ""]); // Options for MCQ
  const [correctAnswer, setCorrectAnswer] = useState(""); // Correct answer
  const [submissionDate, setSubmissionDate] = useState("");
  const [user, setUser] = useState(null);

  const { quiz_name } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error.message);
      } else {
        setUser(data?.user);
      }
    };
    fetchUser();
  }, []);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question_text: questionText,
        question_type: questionType,
        options: questionType === "mcq" ? options : [],
        correct_answer: correctAnswer,
      },
    ]);
    setQuestionText("");
    setCorrectAnswer("");
    setOptions(["", "", "", ""]);
  };

  const deleteQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!quiz_name || !user || !submissionDate) {
      alert("Please provide all required fields.");
      return;
    }

    try {
      const { data: quizData, error: quizError } = await supabase
        .from("quizzes")
        .insert([
          {
            quiz_name,
            created_by: user.id,
            submission_date: submissionDate,
            created_at: new Date().toISOString(),
          },
        ])
        .select();

      if (quizError) throw quizError;

      const quizId = quizData[0].id;

      const formattedQuestions = questions.map((q) => ({
        question_text: q.question_text,
        question_type: q.question_type,
        options: q.options,
        correct_answer: q.correct_answer,
        created_at: new Date().toISOString(),
        quiz_id: quizId,
      }));

      const { error: questionError } = await supabase.from("questions").insert(formattedQuestions);
      if (questionError) throw questionError;

      alert("Quiz and Questions Created Successfully!");
      setQuestions([]);
    } catch (error) {
      console.error("Error creating quiz:", error);
      alert("There was an error creating the quiz.");
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
        <select value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
          <option value="general">General</option>
          <option value="mcq">MCQ</option>
        </select>

        <input
          type="date"
          value={submissionDate}
          onChange={(e) => setSubmissionDate(e.target.value)}
          placeholder="Enter Submission Date"
        />

        {questionType === "mcq" && (
          <div>
            <h4>Options</h4>
            {options.map((option, index) => (
              <input
                key={index}
                type="text"
                value={option}
                onChange={(e) => {
                  const newOptions = [...options];
                  newOptions[index] = e.target.value;
                  setOptions(newOptions);
                }}
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
            <button onClick={() => deleteQuestion(idx)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizByTeacher;