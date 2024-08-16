import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EnrollLecturers() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [lecturer, setLecturer] = useState({
    firstname: "",
    lastname: "",
    lecturerno: "",
    coursecode: "",
    coursetitle: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    const { value, name } = event.target;
    setLecturer((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("", lecturer)
      .then(() => navigate("/EnrollSuccess"))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Navbar />
      <div className="container content">
        <h1>Enroll</h1>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col">
              <input
                type="text"
                name="firstname"
                className="form-control"
                value={lecturer.firstname}
                onChange={handleChange}
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="lastname"
                className="form-control"
                value={lecturer.lastname}
                onChange={handleChange}
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="row g-3">
            <div className="col">
              <input
                type="text"
                name="lecturernumber"
                className="form-control"
                value={lecturer.lecturerno}
                onChange={handleChange}
                placeholder="Lecturer Number"
                aria-label="Lecturer Number"
              />
            </div>
            <div className="col">
              <input
                type="password"
                name="password"
                className="form-control"
                value={lecturer.password}
                onChange={handleChange}
                placeholder="Password"
                aria-label="Password"
              />
            </div>
          </div>
          <div className="row g-3">
            <div className="col">
              <label htmlFor="inputState" className="form-label">
                Course Taken:
              </label>
              <select
                className="form-select"
                name="LCoursecode"
                aria-label="Default select example"
                value={lecturer.coursecode}
              >
                <option selected>Course Code</option>
                <option value="CPE506">CPE506</option>
                <option value="CPE502">CPE502</option>
                <option value="CPE504">CPE504</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="inputState" className="form-label">
                Course Taken:
              </label>
              <select
                className="form-select"
                name="LCoursetitle"
                aria-label="Default select example"
                value={lecturer.coursetitle}
              >
                <option selected>Course Title</option>
                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>
                <option value="Introduction to Operating System">
                  Introduction to Operating System
                </option>
                <option value="Embedded Systems II">Embedded Systems II</option>
              </select>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Enroll
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default EnrollLecturers;
