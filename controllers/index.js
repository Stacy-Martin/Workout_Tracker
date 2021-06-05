const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path')

router.use('/api', apiRoutes);

// render the homepage get...
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

module.exports = router;
