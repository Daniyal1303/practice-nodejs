const express = require("express");
const db = require("./db");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const Person = require("./models/Person");
const MenuItem = require("./models/MenuItem");
app.get("/", function (req, res) {
  res.send("Hello Express js...");
});

app.get("/chicken", (req, res) => {
  res.send("Sure Sir,i would love to serve chicken...");
});

app.get("/idli", (req, res) => {
  res.send("Welcome to south india,we love to serve Idli..");
});
//Post method to add a person
app.post("/person", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
//Get method to get the person
app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched successfully...");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.listen(3000, () => {
  console.log("App is running on port 3000...");
});
