const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now(),
    },
    exercises: [
        {
            type: {
                type: String,
                enum: ['resistance', 'cardio'],        
                required: "Enter the type of exercise",
                trim: true,
            },
            name: {
                type: String,
                trim: true,
                required: "Enter the name of exercise",
            },
            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;