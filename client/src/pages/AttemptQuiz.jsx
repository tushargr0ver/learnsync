import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {supabase} from "../utils/supabaseClient"

const AttemptQuiz = () => {
    const { quiz_id } = useParams();
    const[user, setUser] = useState("");
    const [questions, setQuestions] = useState([]);
    const [responses, setResponses] = useState({});

    const navigate = useNavigate();

    if (!quiz_id) return <p className="text-red-500">Invalid quiz ID</p>;

   

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

    useEffect(() => {
        if (!quiz_id) return;

        const fetchQuestions = async () => { 
            try {
                const { data, error } = await supabase
                    .from("questions")  // Table name
                    .select("*")        // Select all columns (or specify needed ones)
                    .eq("quiz_id", quiz_id); // Filter by quiz_id
                
                if (error) {
                    throw error;
                }
        
                setQuestions(data);  // Store fetched questions in state
                console.log(data);   // Log to verify response
            } catch (error) {
                console.error("Error fetching questions:", error.message);
            }
        };
        

        fetchQuestions();
    }, [quiz_id]);

    const handleAnswerChange = (questionId, selectedAnswer) => {
        setResponses((prev) => ({
            ...prev,
            [questionId]: selectedAnswer,
        }));
    };

    const handleQuizSubmission = async () => {
        if (!user) {
            console.error("Student ID is missing.");
            return;
        }
    
        const responseEntries = Object.entries(responses).map(([questionId, selectedOption]) => {
            // Find the corresponding question
            const question = questions.find(q => String(q.id) === String(questionId)); // Ensure both are strings for comparison
    
            return {
                quiz_id,
                student_id: user.id,
                question_id: questionId,
                selected_option: selectedOption,
                is_correct: question?.correct_answer === selectedOption, // Ensure correct comparison
            };
        });
    
        try {
            const { data, error } = await supabase.from("responses").insert(responseEntries);
    
            if (error) {
                throw error;
            }
    
            console.log("Quiz submitted successfully:", data);
            navigate("/student");
        } catch (error) {
            console.error("Error submitting quiz:", error.message);
        }
    };
    

    return (
        <div className="p-6 max-w-3xl mx-auto text-black">
            <h1 className="text-2xl font-bold mb-4">Quiz Attempt - {quiz_id}</h1>

            {questions.length > 0 && (
                <div>
                    {questions.map((question) => (
                        <div key={question.id} className="mb-6 p-4 border rounded-lg shadow">
                            <h3 className="text-lg font-semibold">{question.question_text}</h3>

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
