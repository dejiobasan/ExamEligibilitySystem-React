function AuthFailure() {
    return(
        <div>
            <h1>Error!</h1>
            <Link className="btn btn-primary" href="/ExamCheckIn" role="button">Try Again.</Link>
        </div>
    )
}

export default AuthFailure