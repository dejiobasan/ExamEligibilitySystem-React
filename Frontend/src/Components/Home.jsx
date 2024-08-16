import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="d-flex h-100 text-center">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="mb-auto">
            <div>
              <h3 className="EES float-md-start mb-0 fw-bold">E.E.S</h3>
              <nav className="nav nav-masthead justify-content-center float-md-end">
                <Link
                  className="nav-link fw-bold py-1 px-0 active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="nav-link fw-bold py-1 px-0"
                  to="/EnrollStudents"
                >
                  Enroll(Students)
                </Link>
                <Link
                  className="nav-link fw-bold py-1 px-0"
                  to="/EnrollLecturers"
                >
                  Enroll(Lecturers)
                </Link>
                <Link className="nav-link fw-bold py-1 px-0" to="/ExamCheckIn">
                  Exam Check-In
                </Link>
                <Link
                  className="nav-link fw-bold py-1 px-0"
                  to="/LecturerLogin"
                >
                  Lecturer Login
                </Link>
              </nav>
            </div>
          </header>

          <main className="px-3">
            <h1 className="header1">Exam Eligibility System</h1>
            <p className="content lead">
              Exam Eligibility System registers and authenticates students for
              examination.
            </p>
            <p className="lead">
              <Link className="btn1" to="/EnrollStudents" role="button">
                Get Started
              </Link>
            </p>
          </main>

          <footer className="mt-auto text-white-50">
            <p>
              Developed and Designed by 
              <Link to="#" className="text-white">
              Inioluwa
              </Link>
              , and
              <Link to="#" className="text-white">
                Tofunmi
              </Link>
              .
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Home;
