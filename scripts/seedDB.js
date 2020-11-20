const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Workouts collection and inserts the Workouts below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/wodList"
);

const WorkoutSeed = [
  {
    muscle: "bicep",
    Weigth: "45lbs",
    details:
      "Dumbell Curls : 5 sets of 10 repetitions.",
    date: new Date(Date.now())
  },
  
];

db.Workout
  .remove({})
  .then(() => db.Workout.collection.insertMany(WorkoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
