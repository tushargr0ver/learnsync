
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Chatbot from './Chatbot';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/chatbot">Chatbot</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
