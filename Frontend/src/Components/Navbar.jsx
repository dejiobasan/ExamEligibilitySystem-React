import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="images/oou-logo.jpg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          E.E.S
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Enroll
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/EnrollStudents">
                    Enroll(Students)
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/EnrollLecturers">
                    Enroll(Lecturers)
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/ExamCheckIn"
              >
                Exam Check-In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/LecturerLogin"
              >
                Lecturer Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
