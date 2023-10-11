const router = require("express").Router();
let Lecturer = require("../Models/Lecturer.js");
let Student = require("../Models/Student.js");
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

router.route("/lecturerLogin").post((req, res) => {
  const { lecturerno, password } = req.body;

  Lecturer.findOne({ Lecturernumber: lecturerno }, (err, foundLecturer) => {
    if (err) {
      console.error(err);
      res.status(401).json({
        message: "Login failed",
      });
    } else {
      if (foundLecturer) {
        bcrypt.compare(password, foundLecturer.Password, (err, result) => {
          if (result === true) {
            res.status(200).json({
              success: true,
              message: "Login Successful!",
              Lecturer: {
                Name: foundLecturer.Firstname + foundLecturer.Lastname,
                Lecturenumber: foundLecturer.Lecturernumber,
              },
            });
          }
        });
      }
    }
  });
});

router.route("/getStudents/:coursecode").get((req, res) => {
  Student.find({ Coursecode: req.params.coursecode })
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
