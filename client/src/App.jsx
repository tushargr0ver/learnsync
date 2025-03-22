import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './pages/HomePage.jsx'; 
import StudentHomePage from './pages/StudentHomePage.jsx';
import TeacherHomePage from './pages/TeacherHomePage.jsx';
import StudyMaterialTeacher from './pages/studyMaterialTeacher.jsx';
import AssessmentsTeacher from './pages/AssessmentsTeacher.jsx';
import AIAssistance from './pages/AiAssistance.jsx';
import LearningPractice from './pages/LearningPractice.jsx';

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
        <Route path="/student-login/chat-ai" element={<AIAssistance/>} />
      </Routes>
    </Router>
  );
}

export default App;
