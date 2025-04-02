import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const AttemptQuiz = () => {
    const { quiz_id } = useParams();

    const navigate = useNavigate();

    if (!quiz_id) return <p className="text-red-500">Invalid quiz ID</p>;

    const [questions, setQuestions] = useState([]);
    const [responses, setResponses] = useState({});

    useEffect(() => {
        if (!quiz_id) return;

        const fetchQuestions = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/quizzes/questions?quiz_id=${quiz_id}`
                );
                setQuestions(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };

        fetchQuestions();
    }, [quiz_id]);

    const handleAnswerChange = (questionId, selectedAnswer) => {
        setResponses({
            ...responses,
            [questionId]: selectedAnswer,
        });
    };

    const handleQuizSubmission = async ()=>{
      const response = await axios.post("http://localhost:5000/api/quiz/attempt", {
        quiz_id: quiz_id,
        student_id: "fe1bd5e1-dc47-4241-961d-cd2a001438ba", 
        answers: responses
      })

      console.log("Quiz submitted successfully:", response.data);
      navigate("/student"); 
    }

    return (
        <div className="p-6 max-w-3xl mx-auto text-black">
            <h1 className="text-2xl font-bold mb-4">Quiz Attempt - {quiz_id}</h1>

            {questions.length > 0 && (
                <div>
                    {questions.map((question) => (
                        <div key={question.id} className="mb-6 p-4 border rounded-lg shadow">
                            <h3 className="text-lg font-semibold">{question.question_text}</h3>

                            {/* General Question Type (Textarea for open-ended answers) */}
                            {question.question_type === "general" ? (
                                <textarea
                                    className="w-full p-2 mt-2 border rounded"
                                    placeholder="Type your answer..."
                                    value={responses[question.id] || ""}
                                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                                />
                            ) : (
                                // Multiple Choice Questions (MCQ) with radio buttons
                                <div className="mt-2">
                                    {Array.isArray(question.options) && question.options.length > 0 ? (
                                        question.options.map((option, index) => (
                                            <label key={index} className="block">
                                                <input
                                                    type="radio"
                                                    name={`question-${question.id}`} // Ensures grouping
                                                    value={option}
                                                    checked={responses[question.id] === option}
                                                    onChange={() => handleAnswerChange(question.id, option)}
                                                    className="mr-2"
                                                />
                                                {option}
                                            </label>
                                        ))
                                    ) : (
                                        <p className="text-red-500">No options available</p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}

                    <button onClick={handleQuizSubmission} className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg">
                        Submit Quiz
                    </button>
                </div>
            )}
        </div>
    );
};

export default AttemptQuiz;
