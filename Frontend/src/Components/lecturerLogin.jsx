import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LecturerLogin() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [details, setDetails] = useState({
    lecturerno: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    const { value, name } = event.target;
    setDetails((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8000/Lecturers/lecturerLogin", details)
      .then((res) => navigate("/AvailableStudents"))
      .catch((err) => {
        console.error("Error Occurred:", err);
        navigate("/AuthFailure")}
      );
  }

  return (
    <div>
      <Navbar />
      <div className="container content">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                name="lecturerno"
                type="text"
                onChange={handleChange}
                value={details.lecturerno}
                className="form-control"
                placeholder="Lecturer number"
                required
              />
            </div>
            <div className="col">
              <input
                type="password"
                onChange={handleChange}
                value={details.password}
                className="form-control"
                placeholder="password"
                name="password"
                required
              />
            </div>
            <div className="row g-3">
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Log In
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default LecturerLogin;
