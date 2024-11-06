import { Link } from "react-router-dom";


function AuthSuccess() {
  return (
    <div className="container">
      <h1>Successfull, Goodluck.</h1>
      <Link className="btn btn-primary" to="/ExamCheckIn" role="button">
        Go Back
      </Link>
    </div>
  );
}

export default AuthSuccess;
