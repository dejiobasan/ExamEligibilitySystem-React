import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import EnrollStudents from "./Components/enrollStudents";
import EnrollLecturers from "./Components/enrollLecturers";
import ExamCheckin from "./Components/examCheckin";
import LecturerLogin from "./Components/lecturerLogin";


function App() {
  return (
    <Router>
      <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/EnrollStudents" element={<EnrollStudents />} />
            <Route path="/EnrollLecturers" element={<EnrollLecturers />} />
            <Route path="/ExamCheckIn" element={<ExamCheckin />} />
            <Route path="/LecturerLogin" element={<LecturerLogin />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
