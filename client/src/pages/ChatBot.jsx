import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Chatbot() {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setMessages((prevMessages) => [...prevMessages, { text: question, sender: 'user' }]);
    setQuestion('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/ask', { question });
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.answer, sender: 'bot' },
      ]);
    } catch (error) {
      console.error('Error fetching answer:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'An error occurred. Please try again.', sender: 'bot', error: true },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>Educational Chatbot</h1>
      <div
        ref={chatContainerRef}
        style={{ height: '300px', overflowY: 'auto', marginBottom: '10px' }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              marginBottom: '10px',
              textAlign: message.sender === 'user' ? 'right' : 'left',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: message.sender === 'user' ? '#e0f7fa' : '#f0f0f0',
                maxWidth: '70%',
              }}
            >
              {message.text.includes('```') ? (
                <SyntaxHighlighter language="python" style={dracula}>
                  {message.text.substring(message.text.indexOf('```python') + 9, message.text.lastIndexOf('```'))}
                </SyntaxHighlighter>
              ) : (
                message.text
              )}
              {message.error && <p style={{ color: 'red' }}>Error</p>}
            </div>
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={handleInputChange}
          placeholder="Ask an educational question..."
          style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box' }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Ask
        </button>
      </form>
    </div>
  );
}

export default Chatbot;