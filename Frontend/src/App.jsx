import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Home/Footer";
import enrollStudents from "./Pages/EnrollStudents/enrollStudents";
import enrollLecturers from "./Pages/EnrollLecturers/enrollLecturers";
import examCheckin from "./Pages/ExamCheckin/examCheckin";
import lecturerLogin from "./Pages/ExamCheckin/lecturerLogin";


function App() {
  return (
    <Router>
      <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/EnrollStudents" element={<enrollStudents />} />
            <Route path="/EnrollLecturers" element={<enrollLecturers />} />
            <Route path="/ExamCheckIn" element={<examCheckin />} />
            <Route path="/LecturerLogin" element={<lecturerLogin />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
