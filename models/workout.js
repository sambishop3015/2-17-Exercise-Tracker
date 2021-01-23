const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema Template
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: 
        {
            type: String,
            trim: true,
            required: "Enter an exercise"
        },
        name: 
        {
            type: String,
            trim: true,
            required: "Enter an exercise name"
        },
        duration: 
        {
            type: Number,
            required: "Enter duration in minutes"
        },
        weight: 
        {
            type: Number,
        },
        reps: 
        {
            type: Number
        },
        sets: 
        {
            type: Number
        },
        distance: 
        {
            type: Number
        }
    }]
}, 
{
    toJSON: 
    {
        virtuals: true
    }
}
);

//Adding Duration  
workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((time, exercise) => {
        return time + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;