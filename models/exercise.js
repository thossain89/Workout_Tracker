const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    
    type: {
        type: String,        
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

});




module.exports ={exerciseSchema};


