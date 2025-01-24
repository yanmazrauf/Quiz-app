import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import InstructorPanel from "./InstructorPanel";
import StudentQuiz from "./StudentQuiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/student" element={<StudentQuiz />} />
        <Route path="/instructor" element={<InstructorPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
