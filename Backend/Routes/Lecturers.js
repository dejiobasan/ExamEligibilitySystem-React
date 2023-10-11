const router = require("express").Router();
let Lecturer = require("../Models/Lecturer.js");
const bcrypt = require("bcrypt");

router.route("/EnrolLecturer").post((req, res) => {
  const { firstname, lastname, lecturerno, coursecode, coursetitle, password } = req.body;
  const saltRounds = 10;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    const newLecturer = new Lecturer({
      Firstname: firstname,
      Lastname: lastname,
      Lecturernumber: lecturerno,
      Coursecode: coursecode,
      Coursetitle: coursetitle,
      Password: hash,
    });
    if (err) {
      console.error(err);
    } else {
      newLecturer
        .save()
        .then(() => {
          res.json("Lecturer added!");
        })
        .catch((err) => res.status(400).json("Error: " + err));
    }
  });
});

module.exports = router;
