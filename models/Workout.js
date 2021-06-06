const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
    exercises: [
    {
      type: {type: String},
      name: {type: String},
      duration: {type: Number},
      weight: {type: Number},
      reps: {type: Number},
      sets: {type: Number},
      distance: {type: Number},
    }
  ],
},{
  versionKey:false
});

WorkoutSchema.virtual('totalDuration').get(function() {
  let totalDuration = 0;
  this.exercises.forEach(exercise => {
    totalDuration += exercise.duration;
  });
  return totalDuration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);


module.exports = Workout;
