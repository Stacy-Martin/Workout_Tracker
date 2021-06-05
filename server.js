const express = require("express");
const mongoose = require("mongoose");
// morgan is a HTTP request logger middleware
const morgan = require('morgan')
const routes = require('./controllers');
require('dotenv').config();
const apiRoutes = require('./controllers/api')
const router = require('express').Router();
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/tracker", 
        {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
        }
);

// routes - these need to be the last files that you connect to
// can go here or in the index.js in the api folder
// res.sendFile  stats and exercise html files in public folder 

// app.use(require("./routes/api.js"));

// render the homepage ?? get...
router.get("/", (req, res) => {
    res.send("Home Page..");
});

// app.get the exercise stats
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});

// app.get the exercises
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
