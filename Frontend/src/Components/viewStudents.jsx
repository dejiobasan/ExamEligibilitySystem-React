

function ViewStudents(props) {
    return(
        <tr>
        <td>{props.student.Firstname}</td>
        <td>{props.student.Lastname}</td>
        <td>{props.student.Matricnumber}</td>
        <td>{props.student.Coursecode}</td>
        <td>{props.student.Coursetitle}</td>
        </tr>
    )
}

export default ViewStudents