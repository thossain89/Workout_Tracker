const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    
    type: {
        type: String,
        enum: ["resistance", "cardio"],
        required: "Valid exercises are 'resistance' or 'cardio'",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the type of exercise",
      },
      duration: {
        type: Number,
        required: "Enter the duration in minutes",
      },
      weight: {
        type: Number,
        required: isRequired("weight"),
      },
      reps: {
        type: Number,
        required: isRequired("reps"),
      },
      sets: {
        type: Number,
        required: isRequired("sets"),
      },
      distance: {
        type: Number,
        required: isRequired("distance"),
      }

});

function isRequired(field) {
  return function () {
    if (field == "distance") {
      return this.type === "cardio";
    } else {
      return this.type === "resistance";
    }
  };
}


module.exports ={exerciseSchema};


