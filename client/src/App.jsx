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
import SignIn from './components/Login.jsx';
import Quiz from './components/Quiz.jsx';
import SignUp from './components/SignUp.jsx';
import ContactUs from './pages/ContactUs.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/student-login" element={<StudentHomePage />} />
        <Route path="/student-login/learn" element={<LearningPractice />} />
        <Route path="/teacher-login" element={<TeacherHomePage />} />
        <Route path="/teacher-login/assessments" element={<AssessmentsTeacher/>} />
        <Route path="/teacher-login/study-material" element={<StudyMaterialTeacher/>} />
        <Route path="/student-login/chat-ai" element={<Chatbot/>} /> 
        <Route path="/student-login/code-editor" element={<JsCodeEditor/>} />
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
