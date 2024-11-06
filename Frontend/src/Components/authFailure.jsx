import { Link } from "react-router-dom";


function AuthFailure() {
    return(
        <div>
            <h1>Error!</h1>
            <Link className="btn btn-primary" to="/ExamCheckIn" role="button">Try Again.</Link>
        </div>
    )
}

export default AuthFailure