//jshint esversion:6

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.SchoolDB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

const StudentsRouter = require("./Routes/Students");
const LecturersRouter = require("./Routes/Lecturers");

app.use("/Students", StudentsRouter);
app.use("/Lecturers", LecturersRouter);

app.listen(port, function () {
  console.log("server started at port 8000.");
});
