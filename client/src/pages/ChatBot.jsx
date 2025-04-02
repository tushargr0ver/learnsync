import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import StudentNavbar from "../components/StudentNavbar";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: question, sender: "user" },
    ]);
    setQuestion("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/ask", {
        question,
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.answer, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error fetching answer:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "An error occurred. Please try again.", sender: "bot", error: true },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
          <StudentNavbar />

    <div className="flex flex-col min-h-96 my-24 min-w-56 ">
      <div className="flex flex-col flex-grow justify-center w-2/4 mx-auto gap-6 bg-white shadow-lg rounded-lg p-6 mt-4">
        <h1 className="text-3xl font-semibold text-center text-black  mb-4">
          Educational Chatbot
        </h1>

        {/* Chatbox */}
        <div
          ref={chatContainerRef}
          className="flex flex-col space-y-3 overflow-y-auto p-4 bg-gray-50 rounded-lg transition-all duration-300"
          style={{
            minHeight: "100px", // Start small
            maxHeight: messages.length ? "500px" : "100px", // Expand as messages increase
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-[75%] ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                {message.text.includes("```") ? (
                  <SyntaxHighlighter
                    language="python"
                    style={dracula}
                    className="rounded-md"
                  >
                    {message.text.substring(
                      message.text.indexOf("```python") + 9,
                      message.text.lastIndexOf("```")
                    )}
                  </SyntaxHighlighter>
                ) : (
                  message.text
                )}
                {message.error && <p className="text-red-500">Error</p>}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="p-3 rounded-lg bg-gray-200 text-gray-900 animate-pulse">
                Typing...
              </div>
            </div>
          )}
        </div>

        {/* Input Field */}
        <form onSubmit={handleSubmit} className="mt-4 flex">
          <input
            type="text"
            value={question}
            onChange={handleInputChange}
            placeholder="Ask an educational question..."
            className="flex-grow px-4 py-2  text-black border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500  text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 transition"
          >
            Ask
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Chatbot;
