import ViewStudents from "./viewStudents";
import axios from "axios";
import { useState } from "react"

function AvailableStudents() {
    const [students, setStudent] = useState([]);

    axios.get("http://localhost:8000/Students/")
    .then(function(response) {
        setStudent(response.data);
    })
    .catch(function(error) {
        console.error(error);
    })
    .finally(function() {

    })

    function studentlist() {
        return students.map(currentstudent => {
            return (<ViewStudents  key={currentstudent._id} student={currentstudent} />)
        })
    }

    return (
        <div>
            <h1>Available Students</h1>
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Matric Number</th>
                        <th scope="col">Course Code</th>
                        <th scope="col">Course Title</th>
                    </tr>
                </thead>
                <tbody>
                    { studentlist() }
                </tbody>
            </table>
        </div>
    )
}

export default AvailableStudents