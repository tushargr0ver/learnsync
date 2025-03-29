import { useState, useEffect } from "react";
import axios from "axios";

const Quiz = () => {
    const [topic, setTopic] = useState("");
    const [difficulty, setDifficulty] = useState("easy");
    const [quiz, setQuiz] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes total
    const [quizOver, setQuizOver] = useState(false);

    const generateQuiz = async () => {
        try {
            const response = await axios.post("http://localhost:5000/generate-quiz", { topic, difficulty });

            if (response.data && response.data.quiz) {
                setQuiz(response.data.quiz);
                setCurrentQuestion(0);
                setScore(0);
                setQuizOver(false);
                setTimeLeft(300); // Reset timer to 5 minutes
            } else {
                setQuiz("Failed to generate quiz. Try again.");
            }
        } catch (error) {
            console.error("Error generating quiz:", error);
            setQuiz("Error fetching quiz.");
        }
    };

    // Handle option selection
    const handleOptionSelect = (isCorrect) => {
        setSelectedOption(isCorrect);
    };

    // Handle moving to the next question
    const handleNextQuestion = () => {
        if (selectedOption) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < quiz.questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        } else {
            setQuizOver(true);
        }
    };

    // Timer effect (5 minutes for the entire quiz)
    useEffect(() => {
        if (!quiz || quizOver) return;

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime === 1) {
                    clearInterval(timer);
                    setQuizOver(true); // End quiz when time is up
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [quiz, quizOver]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">AI Quiz Generator</h1>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
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
            </div>

            {quiz && !quizOver && (
                <div className="mt-6 p-6 bg-white rounded-lg shadow-md w-full max-w-lg">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">{quiz.quizTitle}</h2>
                    <p className="text-gray-600">Time left: <span className="font-bold">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span></p>
                    <div className="mb-4">
                        <p className="text-black font-semibold">{quiz.questions[currentQuestion].questionText}</p>
                        <ul className="mt-2">
                            {quiz.questions[currentQuestion].options.map((option, i) => (
                                <li
                                    key={i}
                                    className={`p-2 text-black bg-gray-100 rounded mt-1 cursor-pointer 
                                        ${selectedOption !== null && option.isCorrect ? "bg-green-400" : ""} 
                                        ${selectedOption !== null && !option.isCorrect ? "bg-red-400" : ""}`
                                    }
                                    onClick={() => handleOptionSelect(option.isCorrect)}
                                >
                                    {option.text}
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
                <div className="mt-6 p-6 bg-white rounded-lg shadow-lg w-full max-w-lg text-center">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">🎉 Quiz Completed!</h2>
                    <p className="text-gray-600 text-lg">Your Score:</p>
                    <p className="text-3xl font-extrabold text-green-500">{score} / {quiz.questions.length}</p>
                    <p className="text-gray-500 mt-2">{score >= quiz.questions.length / 2 ? "Great Job! 🎯" : "Keep Practicing! 💪"}</p>
                    <button
                        onClick={generateQuiz}
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition mt-4"
                    >
                        Play Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz;