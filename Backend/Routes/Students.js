const router = require("express").Router();
let Student = require("../Models/Student.js");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
require("dotenv").config();

router.route("/EnrolStudent").post((req, res) => {
  const uuid = uuidv4();
  const firstTwoChars = uuid.slice(0, 2);
  const randomThreeDigitNumber = Math.floor(Math.random() * 1000);
  const paddedRandomNumber = randomThreeDigitNumber.toString().padStart(3, "0");
  const uniqueID = `${"CEE"}${firstTwoChars}${paddedRandomNumber}`;

  const { firstname, lastname, matricno, coursecode, coursetitle, password } = req.body;
  const saltRounds = Number(process.env.saltRounds);
  bcrypt.hash(password, saltRounds, (err, hash) => {
    const newStudent = new Student({
      ExamID: uniqueID,
      Firstname: firstname,
      Lastname: lastname,
      Matricnumber: matricno,
      Coursecode: coursecode,
      Coursetitle: coursetitle,
      Password: hash,
    });

    if (err) {
      console.error(err);
    } else {
      newStudent
        .save()
        .then(() => {
          res.json("Student Enrolled Successfully!");
        })
        .catch((err) => res.status(400).json("Error: " + err));
    }
  });
});

router.route("/examLogin").post((req, res) => {
  const { matricno, password } = req.body;

  Student.findOne({ Matricnumber: matricno}).then((foundStudent) => {
    if (!foundStudent) {
      console.error(err);
      res.status(401).json({
        message: "Login failed",
      });
    } else {
      if (foundStudent) {
        bcrypt.compare(password, foundStudent.Password, (err, result) => {
          if (result === true) {
            res.status(200).json({
              success: true,
              message: "Login Successful!",
              Student: {
                Name: foundStudent.Firstname + " " + foundStudent.Lastname,
                Matricnumber: foundStudent.Matricnumber,
              }
            });
          }
        });
      }
    }
  })
});

module.exports = router;