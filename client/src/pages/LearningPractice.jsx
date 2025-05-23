import React from 'react';
import StudentNavbar from '../components/StudentNavbar';
import CodeEditor from './Code-editor';

const LearningPractice = () => {
  return (
    <div>
      <StudentNavbar />
      <div className="flex flex-col items-center py-16 min-h-screen bg-gray-100 px-6">
        {/* Header Section */}
        <div className="text-center max-w-lg mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Learning & Practice</h1>
          <p className="text-gray-700 text-lg mt-2">
            Enhance your learning with AI-powered quizzes and an interactive coding environment.
          </p>
        </div>

        {/* Exams & Quizzes Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-6xl mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Exams & Quizzes</h2>
          <p className="text-gray-700 mb-4">Take AI-generated or teacher-created quizzes to test your knowledge.</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition transform hover:scale-105">
            Start Quiz
          </button>
        </div>

        {/* Code Editor Section */}
        <CodeEditor/>
        
      </div>
    </div>
  );
};

export default LearningPractice;
