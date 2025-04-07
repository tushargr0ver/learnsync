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
import SignUp from './components/SignUp.jsx';
import ContactUs from './pages/ContactUs.jsx';
import LearnMore from './pages/Learn-More.jsx'
import StudyMaterials from './pages/StudyMaterials.jsx';
import LiveClasses from './pages/LiveClasses.jsx';
import AIPoweredLearning from './pages/AiPoweredLearning.jsx';
import Community from './pages/Community.jsx';
import Quiz from './pages/Quiz.jsx';

import QuizByTeacher from './pages/QuizByTeacher.jsx';
import AttemptQuiz from './pages/AttemptQuiz.jsx';
import InterestForm from './pages/InterestForm.jsx';

import PersonalisedLearningCards from './pages/PersonalisedLearningCards.jsx';
import PersonalisedLearning from './pages/PersonalisedLearning.jsx';


function App() {
  return (
    <Router>
      <Routes>

      <Route path="teacher/create/quiz/:quizId" element={<QuizByTeacher />} />
      <Route path="/student/quizzes/:quiz_id" element={<AttemptQuiz />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<SignIn/>} />
        {/* <Route path="/student/:id/community" element={<Community/>} />
        <Route path="/student/:id" element={<StudentHomePage />} />
        <Route path="/student/:id/learn" element={<LearningPractice />} />
        <Route path="/teacher/:id" element={<TeacherHomePage />} />
        <Route path="/teacher/:id/assessments" element={<AssessmentsTeacher/>} />
        <Route path="/teacher/:id/study-material" element={<StudyMaterialTeacher/>} />
        <Route path="/student/:id/chat-ai" element={<Chatbot/>} />  */}

<Route path="/student/community" element={<Community/>} />
        <Route path="/student" element={<StudentHomePage />} />
        <Route path="/student/learn" element={<LearningPractice />} />
        <Route path="/teacher/" element={<TeacherHomePage />} />
        <Route path="/teacher/assessments" element={<AssessmentsTeacher/>} />
        <Route path="/teacher/study-material" element={<StudyMaterialTeacher/>} />
        <Route path="/student/chat-ai" element={<Chatbot/>} /> 
        <Route path="/student/interests" element={<InterestForm/>} />


        <Route path="/student/personalised-learning" element={<PersonalisedLearningCards />} />
        <Route path="/student/personalised-learning/:interest" element={<PersonalisedLearning />}/>



        {/* <Route path="/student-login/code-editor" element={<JsCodeEditor/>} /> */}
        <Route path="/student/quiz" element={<Quiz/>}/>
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/learn-more" element={<LearnMore/>} />
        <Route path="/ai-powered-learning" element={<AIPoweredLearning/>} />
        <Route path="/study" element={<StudyMaterials/>} />
        <Route path="/live-classes" element={<LiveClasses/>} />

      </Routes>

    </Router>
  );
}

export default App;
