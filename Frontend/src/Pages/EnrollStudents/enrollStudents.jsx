import { useState } from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

function enrollStudents() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [student, setStudent] = useState({
    firstname: " ",
    lastname: " ",
    matricno: "",
    coursecode: "",
    coursetitle: "",
    password: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setStudent((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <Navbar />
      <h1>Enroll</h1>
      <form id="form_submit" className="row g-3" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              name="firstname"
              value={student.firstname}
              onChange={handleChange}
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="lastname"
              value={student.lastname}
              onChange={handleChange}
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              name="matricno"
              value={student.matricno}
              onChange={handleChange}
              className="form-control"
              placeholder="Matric number"
              aria-label="Matric number"
            />
          </div>
          <div className="col">
            <select
              className="form-select"
              name="coursecode"
              value={student.coursecode}
              aria-label="Default select example"
            >
              <option selected>Course Code</option>
              <option value="CPE506">CPE506</option>
              <option value="CPE502">CPE502</option>
              <option value="CPE504">CPE504</option>
            </select>
          </div>
        </div>
        <div className="row g-3">
          <div className="col">
            <input
              type="password"
              name="password"
              value={student.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Password"
              aria-label="Password"
            />
          </div>
          <div className="col">
            <select
              className="form-select"
              name="coursetitle"
              value={student.coursetitle}
              aria-label="Default select example"
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
            <button type="submit" className="btn btn-primary" id="EnrollButton">
              Enroll
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default enrollStudents;
