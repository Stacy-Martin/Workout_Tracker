// require Workout model
const Workout = require('../../models/Workout')

// require router
const router = require('express').Router();


// get route to read/find all workouts in db
router.get("/Workout", (req, res) => {
    Workout.find({})
      .then(Workout => {
        res.json(Workout);
      })
      .catch(err => {
        res.json(err);
      });
  });


// post route to create new workouts
router.post("/Workout", ({ body }, res) => {
  Workout.create(body)
    .then((Workout) => {
      res.json(Workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// put route to update workouts 
router.put("/Workout/:id", ({ body, params }, res) => {
    Workout.findOneAndUpdate({_id: params.id}, {$push: {exercises: body} })
      .then(Workout => {
        res.json(Workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// get route to find workouts (only past 7 workouts should display)
router.get('/Workout/range', (req, res) => {
    Workout.find({})
    .then(Workout => {
        res.json(Workout);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;