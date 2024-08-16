import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ExamCheckin() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [details, setDetails] = useState({
    matricno: "",
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
        <h1>Check-In</h1>
        <form id="form_submit" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                onChange={handleChange}
                value={details.matricno}
                className="form-control"
                placeholder="Matric number"
                name="matric"
                aria-label="Matric number"
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
                  Check-In
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

export default ExamCheckin;
