const mongoose = require("mongoose");


const workoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: Date.now(),
        required: true
    },
    exercises: [
        {
            type: {
                type: String,
                enum: ['resistance', 'cardio'],        
                required: true,
                trim: true,
            },
            name: {
                type: String,
                trim: true,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            weight: {
                type: Number,
                required: false
            },
            reps: {
                type: Number,
                required: false
            },
            sets: {
                type: Number,
                required: false
            },
            distance: {
                type: Number,
                required: false
            }
        }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;