const router = require("express").Router();
const Workout = require("../models/workout.js");

//Route to find all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

//Route that adds new workout
router.post("/api/workouts", async (req, res) => {
    Workout.create({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

//Route to update workout 
router.put("/api/workouts/:id", ({
    body,
    params
}, res) => {
    Workout.findByIdAndUpdate(params.id, {
        $push: 
        {
            exercises: body
        }
    }, 
    {
        new: true,
        runValidators: true
    }).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

//Route to view 7 workouts 
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7).then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

//Route to delete a workout
router.delete("/api/workouts", ({
    body
}, res) => {
    Workout.findByIdAndDelete(body.id).then(() => {
        res.json(true);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;