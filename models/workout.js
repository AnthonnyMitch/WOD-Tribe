const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  muscle: { type: String, required: true },
  weight: { type: String, required: true },
  details: String,
  duration: String,
  Rx: String,
  date: { type: Date, default: Date.now, }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;