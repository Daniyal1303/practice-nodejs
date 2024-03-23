const mongoose = require("mongoose");

//Define Mongo DB Connection URL
const mongoURL = "mongodb://localhost:27017/hotels";

// Set up MongoDB connection
mongoose.connect(mongoURL);

//Get the default connection
//Mongoose maintain a default connection object representing the MongoDB connection.
const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB server...");
});

db.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

module.exports = db;
