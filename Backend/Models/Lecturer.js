const mongoose = require("mongoose");

const LecturersSchema = new mongoose.Schema(
  {
    Firstname: { type: String, required: true, unique: false },
    Lastname: { type: String, required: true, unique: false },
    Lecturernumber: { type: String, required: true, unique: true },
    Coursecode: { type: String, required: true, unique: false },
    Coursetitle: { type: String, required: true, unique: false },
    Password: { type: String, required: true, unique: true},
  },
  {
    timestamps: true,
  }
);

const Lecturer = new mongoose.model("Lecturer", LecturersSchema);

module.exports = Lecturer;
