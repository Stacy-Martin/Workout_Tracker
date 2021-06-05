// require Workout model
const Workout = require('../../models/Workout')
const db = require("../../models");
// require router
const router = require('express').Router();


// get route to read/find all workouts in db
router.get('/workouts', (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(err);
    });
});


// post route to create new workouts
router.post("/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// put route to update workouts 
router.put("/workouts/:id", ({ body, params }, res) => {
  db.Workout.findOneAndUpdate(
    { _id: params.id },
    { $push: { exercises: body } }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(err);
    });
});

// TODO:  get route to find workouts (only past 7 workouts should display)
router.get('/workouts/range', (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(err);
    });
});

module.exports = router;