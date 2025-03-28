import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './pages/HomePage.jsx'; 
import StudentHomePage from './pages/StudentHomePage.jsx';
import TeacherHomePage from './pages/TeacherHomePage.jsx';
import StudyMaterialTeacher from './pages/StudyMaterialTeacher.jsx';
import AssessmentsTeacher from './pages/AssessmentsTeacher.jsx';
import LearningPractice from './pages/LearningPractice.jsx';
import Chatbot from './pages/ChatBot.jsx';
import JsCodeEditor from './pages/Code-editor.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-login" element={<StudentHomePage />} />
        <Route path="/student-login/learn" element={<LearningPractice />} />
        <Route path="/teacher-login" element={<TeacherHomePage />} />
        <Route path="/teacher-login/assessments" element={<AssessmentsTeacher/>} />
        <Route path="/teacher-login/study-material" element={<StudyMaterialTeacher/>} />
        <Route path="/student-login/chat-ai" element={<Chatbot/>} /> 
        <Route path="/student-login/code-editor" element={<JsCodeEditor/>} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
