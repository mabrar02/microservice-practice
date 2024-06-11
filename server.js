require("dotenv").config();
const express = require("express");
const studentRoutes = require("./src/student/routes");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/students", studentRoutes);

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});
