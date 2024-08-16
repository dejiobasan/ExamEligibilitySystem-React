import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function LecturerLogin() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [details, setDetails] = useState({
    lecturerno: "",
    password: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setDetails((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <Navbar />
      <div className="container content">
        <h1>Log In</h1>
        <form id="form_submit" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                onChange={handleChange}
                value={details.lecturerno}
                className="form-control"
                placeholder="Lecturer number"
                name="LectureNumber"
                aria-label="Lecturer number"
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
                aria-label="Password"
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
