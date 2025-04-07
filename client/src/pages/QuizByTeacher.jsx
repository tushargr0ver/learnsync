import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

const QuizByTeacher = () => {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [marks, setMarks] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate()
  const location = useLocation();
  const { quiz_name } = location.state || {};
  const { quizId } = useParams(); // Used directly in insertion

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
    if (!questionText || !correctAnswer || !marks || options.some((opt) => opt.trim() === "")) {
      alert("Please fill in all fields before adding the question.");
      return;
    }

    setQuestions([
      ...questions,
      {
        question_text: questionText,
        options,
        correct_answer: correctAnswer,
        marks,
      },
    ]);

    setQuestionText("");
    setCorrectAnswer("");
    setOptions(["", "", "", ""]);
    setMarks("");
  };

  const deleteQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!quizId || !user || questions.length === 0) {
      alert("Please ensure all fields are filled and questions are added.");
      return;
    }

    try {
      const formattedQuestions = questions.map((q) => ({
        quiz_id: quizId,
        question_text: q.question_text,
        options: q.options,
        correct_answer: q.correct_answer,
        marks: parseInt(q.marks),
        created_at: new Date().toISOString(),
      }));

      const { error: questionError } = await supabase
        .from("questions")
        .insert(formattedQuestions);

      if (questionError) throw questionError;

      alert("Questions Added Successfully!");
      setQuestions([]);
      navigate("/teacher")
    } catch (error) {
      console.error("Error inserting questions:", error);
      alert("There was an error submitting the questions.");
    }
  };

  return (
    <div className="text-black">
      <h1>Create Questions for Quiz - {quiz_name}</h1>

      <div className="p-4 flex flex-col gap-2">
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Enter Question Text"
        />

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
              className="block mb-1"
            />
          ))}
        </div>

        <input
          type="text"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          placeholder="Enter Correct Answer"
        />

        <input
          type="number"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          placeholder="Enter Marks for this Question"
        />

        <button onClick={addQuestion} className="bg-blue-500 text-white px-4 py-1 rounded">
          Add Question
        </button>
      </div>

      <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded m-4">
        Submit All Questions
      </button>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Added Questions:</h3>
        {questions.map((q, idx) => (
          <div key={idx} className="border p-2 mb-2 rounded bg-gray-100">
            <p><strong>Q:</strong> {q.question_text}</p>
            <ul className="list-disc list-inside">
              {q.options.map((opt, i) => (
                <li key={i}>{opt}</li>
              ))}
            </ul>
            <p><strong>Correct Answer:</strong> {q.correct_answer}</p>
            <p><strong>Marks:</strong> {q.marks}</p>
            <button onClick={() => deleteQuestion(idx)} className="text-red-500 mt-1">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizByTeacher;
