import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

const AttemptQuiz = () => {
    const { quiz_id } = useParams();
    const [user, setUser] = useState("");
    const [quizName, setQuizName] = useState("");
    const [questions, setQuestions] = useState([]);
    const [responses, setResponses] = useState({});
    const [score, setScore] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        const fetchQuizDetails = async () => {
            const { data, error } = await supabase
                .from("quizzes")
                .select("quiz_name")
                .eq("id", quiz_id)
                .single();

            if (error) {
                console.error("Error fetching quiz name:", error.message);
            } else {
                setQuizName(data.quiz_name);
            }
        };

        const fetchQuestions = async () => {
            const { data, error } = await supabase
                .from("questions")
                .select("*")
                .eq("quiz_id", quiz_id);

            if (error) {
                console.error("Error fetching questions:", error.message);
            } else {
                setQuestions(data);
            }
        };

        if (quiz_id) {
            fetchQuizDetails();
            fetchQuestions();
        }
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

        if (isSubmitting) return;
        setIsSubmitting(true);

        let calculatedScore = 0;

        const responseEntries = Object.entries(responses).map(
            ([questionId, selectedOption], index) => {
                const question = questions.find(
                    (q) => String(q.id) === String(questionId)
                );

                const isCorrect = question?.correct_answer === selectedOption;
                const marks = isCorrect ? question?.marks || 0 : 0;
                calculatedScore += marks;

                return {
                    quiz_id,
                    student_id: user.id,
                    question_id: questionId,
                    selected_option: selectedOption,
                    is_correct: isCorrect,
                    score: marks,
                    totalScore: calculatedScore,
                    totalScore: index === 0 ? calculatedScore : null, // Only first row gets totalScore
                    submitted_at: new Date().toISOString(),

                }
            }
        );

        try {
            const { error: responseError } = await supabase
                .from("student_responses")
                .insert(responseEntries);

            if (responseError) throw responseError;
            setScore(calculatedScore);

            console.log(responseEntries, calculatedScore)

            // After inserting the responseEntries
            await supabase
                .from("student_responses")
                .update({ totalScore: calculatedScore })
                .eq("quiz_id", quiz_id)
                .eq("student_id", user.id);


              navigate("/student")

        } catch (error) {
            console.error("Error submitting quiz:", error.message);
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="p-6 max-w-3xl mx-auto text-black">
            <h1 className="text-2xl font-bold mb-4"> Attempting Quiz -
                {quizName}
            </h1>

            {questions.length > 0 && score === null && (
                <div>
                    {questions.map((question) => (
                        <div key={question.id} className="mb-6 p-4 border rounded-lg shadow">
                            <h3 className="text-lg font-semibold">{question.question_text}</h3>

                            {question.question_type === "general" ? (
                                <textarea
                                    className="w-full p-2 mt-2 border rounded"
                                    placeholder="Type your answer..."
                                    value={responses[question.id] || ""}
                                    onChange={(e) =>
                                        handleAnswerChange(question.id, e.target.value)
                                    }
                                />
                            ) : (
                                <div className="mt-2">
                                    {Array.isArray(question.options) &&
                                        question.options.length > 0 ? (
                                        question.options.map((option, index) => (
                                            <label key={index} className="block">
                                                <input
                                                    type="radio"
                                                    name={`question-${question.id}`}
                                                    value={option}
                                                    checked={responses[question.id] === option}
                                                    onChange={() =>
                                                        handleAnswerChange(question.id, option)
                                                    }
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

                    <button
                        onClick={handleQuizSubmission}
                        disabled={isSubmitting}
                        className={`mt-4 px-6 py-2 font-semibold rounded-lg ${isSubmitting
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-600 text-white"
                            }`}
                    >
                        {isSubmitting ? "Submitting..." : "Submit Quiz"}
                    </button>
                </div>
            )}

            {score !== null && (
                <div className="mt-8 text-center">
                    <h2 className="text-xl font-bold text-green-600 mb-2">
                        🎉 Quiz Submitted Successfully!
                    </h2>
                    <p className="text-lg">You scored: <strong>{score}</strong> points!</p>
                    <button
                        onClick={() => navigate("/student")}
                        className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                        Go to Dashboard
                    </button>
                </div>
            )}
        </div>
    );
};

export default AttemptQuiz;
