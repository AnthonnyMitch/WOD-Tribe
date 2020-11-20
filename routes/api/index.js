const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const workoutRoutes = require("./workouts");

//User Routes
router.use("/users", userRoutes);
// Workout Routes
router.use("/workouts", workoutRoutes);
// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
