const mongoose = require("mongoose");

const StudentsSchema = new mongoose.Schema(
  {
    ExamID: { type: String, required: true, unique: true },
    Firstname: { type: String, required: true, unique: false },
    Lastname: { type: String, required: true, unique: false },
    Matricnumber: { type: String, required: true, unique: true },
    Coursecode: { type: String, required: true, unique: false },
    Coursetitle: { type: String, required: true, unique: false },
    Password: { type: String, required: true, unique: true},
  },
  {
    timestamps: true,
  }
);

const Student = new mongoose.model("Student", StudentsSchema);
module.exports = Student;
