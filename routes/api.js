const router = require("express").Router();
const Tracker = require("../models/tracker.js");

router.post("/api/tracker", ({ body }, res) => {
  Tracker.create(body)
    .then(dbTracker => {
      res.json(dbTracker);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/tracker/bulk", ({ body }, res) => {
  Tracker.insertMany(body)
    .then(dbTracker => {
      res.json(dbTracker);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/tracker", (req, res) => {
  Tracker.find({})
    .sort({ date: -1 })
    .then(dbTracker => {
      res.json(dbTracker);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
