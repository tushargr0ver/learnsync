import React from 'react';
import Navbar from '../components/navbar';

const LearningPractice = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center py-20 min-h-screen bg-gray-100 px-6">
        <h1 className="text-black text-3xl font-bold mb-4 text-center">Learning & Practice</h1>
        <p className="text-gray-700 text-lg text-center mb-6 max-w-2xl">
          Enhance your learning with AI-powered quizzes and an interactive coding environment.
        </p>

        {/* Exams & Quizzes Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">📝 Exams & Quizzes</h2>
          <p className="text-gray-600 mb-4">Take AI-generated or teacher-created quizzes to test your knowledge.</p>
          <button className="bg-[#008CFF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#006FCC] transition">
            Start Quiz
          </button>
        </div>

        {/* Code Editor Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">🔢 Code Editor</h2>
          <p className="text-gray-600 mb-4">Write, run, and test your code in an interactive coding environment.</p>
          <textarea
            className="w-full p-3 border rounded-lg mb-3 font-mono"
            rows="6"
            placeholder="// Write your code here..."
          ></textarea>
          <button className="bg-[#008CFF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#006FCC] transition">
            Run Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningPractice;
