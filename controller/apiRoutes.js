const router = require("express").Router();

const db = require("../models");


router.get('/api/workouts', ({ body }, res =>{
    db.Workout.find({}).sort({date:-1})
    .then((workout) => {
        res.status(200).json(workout);
    }).catch((e) => {
        res.status(400).json(e);
    });
}));


router.get('/api/workouts/range', ({ body }, res =>{
    db.Workout.find({}).sort({date:-1})
    .then((workout) => {
        res.status(200).json(workout);
    }).catch((e) => {
        res.status(400).json(e);
    });
}));

router.post('/api/workouts', ({ body }, res =>{
    db.Workout.create(body)
    .then((workout) => {
        res.status(201).json(workout);
    }).catch((e) => {
        res.status(400).json(e);
    });
}));


module.exports = router;