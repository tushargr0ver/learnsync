import { useState, useEffect } from "react";
import axios from "axios";

const Quiz = () => {
    const [topic, setTopic] = useState("");
    const [difficulty, setDifficulty] = useState("easy");
    const [quiz, setQuiz] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
    const [quizOver, setQuizOver] = useState(false);
    const [error, setError] = useState("");

    const generateQuiz = async () => {
        try {
            const response = await axios.post("http://localhost:5000/generate-quiz", {
                topic,
                difficulty,
            });

            if (response.data && response.data.quiz) {
                setQuiz(response.data.quiz);
                setCurrentQuestion(0);
                setScore(0);
                setQuizOver(false);
                setTimeLeft(300);
                setError("");
                console.log("Quiz Data:", response.data.quiz);
            } else {
                setError("Failed to generate quiz. Please try again.");
                setQuiz(null);
            }
        } catch (err) {
            console.error("Error generating quiz:", err);
            setError("Server error. Please check your backend is running.");
            setQuiz(null);
        }
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (selectedOption === quiz.questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < quiz.questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        } else {
            setQuizOver(true);
        }
    };

    useEffect(() => {
        if (!quiz || quizOver) return;

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime === 1) {
                    clearInterval(timer);
                    setQuizOver(true);
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [quiz, quizOver]);

    const handleCloseQuiz = () => {
        setQuiz(null);
        setQuizOver(false);
        setCurrentQuestion(0);
        setSelectedOption(null);
        setScore(0);
        setTimeLeft(300);
        setError("");
    };

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full max-w-lg">
                <input
                    type="text"
                    placeholder="Enter topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />
                <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <button
                    onClick={generateQuiz}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Generate Quiz
                </button>
                {error && (
                    <p className="text-red-500 mt-2 text-sm">{error}</p>
                )}
            </div>

            {quiz && !quizOver && quiz.questions.length > 0 && (
                <div className="mt-6 p-6 bg-white rounded-lg shadow-md w-full max-w-lg">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">{quiz.quizTitle}</h2>
                    <p className="text-gray-600">
                        Time left: <span className="font-bold">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
                    </p>
                    <div className="mb-4">
                        <p className="text-black font-semibold">{quiz.questions[currentQuestion].questionText}</p>
                        <ul className="mt-2">
                            {quiz.questions[currentQuestion].options.map((option, i) => (
                                <li
                                    key={i}
                                    className={`p-2 text-black bg-gray-100 rounded mt-1 cursor-pointer 
                                        ${selectedOption === option
                                            ? option === quiz.questions[currentQuestion].correctAnswer
                                                ? "bg-green-400"
                                                : "bg-red-400"
                                            : ""}`}
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        onClick={handleNextQuestion}
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition mt-4"
                        disabled={selectedOption === null}
                    >
                        Next
                    </button>
                </div>
            )}

            {quizOver && (
                <div className="mt-6 p-6 bg-white rounded-xl shadow-lg w-full max-w-lg text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">🎉 Well Done!</h2>
                    <p className="text-lg text-gray-600">
                        You’ve completed the <span className="font-semibold text-blue-500">{quiz.quizTitle}</span> quiz.
                    </p>
                    <div className="mt-4">
                        <p className="text-xl text-gray-700">Your Score:</p>
                        <p className="text-4xl font-extrabold text-green-500">{score} / {quiz.questions.length}</p>
                        <p className="mt-2 text-gray-500 text-base">
                            {score >= quiz.questions.length / 2 ? "👏 Great job, keep it up!" : "💡 Don’t worry, try again and you'll improve!"}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <button
                            onClick={generateQuiz}
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                        >
                            🔄 Try Another Quiz
                        </button>
                        <button
                            onClick={handleCloseQuiz}
                            className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition"
                        >
                            ✖️ Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
