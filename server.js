const express = require("express");
const mongoose = require("mongoose");
// morgan is a HTTP request logger middleware
const morgan = require('morgan')
const routes = require('./controllers');
// which username and pw does the env file store?
require('dotenv').config();
const apiRoutes = require('./controllers/api')

const PORT = process.env.PORT || 3000;
const app = express();

// app.use(morgan(???));
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

// routes
app.use(require("./routes/api.js"));
// render the homepage ?? get...
// app.get the exercises
// app.get the exercise stats

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
