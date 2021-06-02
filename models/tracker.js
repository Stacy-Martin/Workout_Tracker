const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trackerSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for tracker"
  },
  value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Tracker = mongoose.model("Tracker", trackerSchema);

module.exports = Tracker;
