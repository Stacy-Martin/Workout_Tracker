// require Workout model

const db = require("../../models");
// require router
const router = require("express").Router();

// get route to read/find all workouts in db
router.get("/workouts", (req, res) => {
  db.Workout.aggregate([])
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(err);
    });
});

// post route to create new workouts
router.post("/workouts", (req, res) => {
  db.Workout.create({})
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// TODO:  get route to find workouts (only past 7 workouts should display)
router.get("/workouts/range", (req, res) => {
  console.log("Hello range");
  db.Workout.aggregate([{$addFields:{
    totalDuration:{
      $sum:`$exercises.duration`
    }
  }}])
.sort({ _id: -1 })
    .limit(7)
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(err);
    });
});
// put route to update workouts
router.put("/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } }
  ).then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(err);
    });
});
router.get("/workouts/:id", (req, res) => {
  let id = req.params.id
  db.Workout.findById(
    id
  ).then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(err);
    });
});
module.exports = router;
