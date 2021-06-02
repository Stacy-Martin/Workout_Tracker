// require Workout model
const Workout = require('../../models/Workout')

// require router
const router = require('express').Router();


// get route to read/find all workouts in db
app.get("/Workout", (req, res) => {
    Workout.find({})
      .then(Workout => {
        res.json(Workout);
      })
      .catch(err => {
        res.json(err);
      });
  });

// post route to create new workouts
app.post("/Workout", ({body}, res) => {
    Workout.create(body)
      .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
      .then(dbLibrary => {
        res.json(dbLibrary);
      })
      .catch(err => {
        res.json(err);
      });
  });

// put route to update workouts 

// get route to find workouts (only past 7 workouts should display)


module.exports = router;