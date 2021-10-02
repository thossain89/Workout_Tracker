const mongoose = require('mongoose');
const {exerciseSchema} = require('./exercise');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises:[exerciseSchema]
    },
    {
        toObject: { virtuals: true},
        toJSON: { virtuals: true}
    }
);

workoutSchema.virtual("totalDuration").get(function () {
    let totalDuration = 0;
    this.exercises.forEach((element) => {
      totalDuration += element.duration;
    });
    return totalDuration;
  });
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;