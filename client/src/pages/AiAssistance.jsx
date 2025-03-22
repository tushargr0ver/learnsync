import React from 'react';
import Navbar from '../components/navbar';

const AIAssistance = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center py-20 min-h-screen bg-gray-100 px-6">
        <h1 className="text-black text-3xl font-bold mb-4 text-center">AI Assistance</h1>
        <p className="text-gray-700 text-lg text-center mb-6 max-w-2xl">
          Get AI-powered study help and note-taking assistance.
        </p>

        {/* AI Chat Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">🤖 Chat with AI</h2>
          <p className="text-gray-600 mb-4">Ask study-related questions and get instant answers.</p>
          <textarea
            className="w-full p-3 border rounded-lg mb-3"
            rows="4"
            placeholder="Ask AI anything..."
          ></textarea>
          <button className="bg-[#008CFF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#006FCC] transition">
            Send
          </button>
        </div>

        {/* AI Notes Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">📝 AI Notes</h2>
          <p className="text-gray-600 mb-4">Generate summaries, flashcards, and organized notes from your study materials.</p>
          <textarea
            className="w-full p-3 border rounded-lg mb-3"
            rows="4"
            placeholder="Paste your notes here..."
          ></textarea>
          <button className="bg-[#008CFF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#006FCC] transition">
            Generate Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistance;
