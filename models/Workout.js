const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// TODO:  add workout data here such as duration, weight, reps, etc
const WorkoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
