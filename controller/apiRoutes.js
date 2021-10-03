const router = require("express").Router();
const db = require("../models");

router.get("/workouts", (req, res) => {
  db.Workout.aggregate([{
    $addFields:{
      totalDuration:{$sum: "$exercises.duration"}
    }
  }])
    .then((workout) => {
      res.status(200).json(workout);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
});

router.get("/workouts/range", (req, res) => {
  db.Workout.aggregate([{
    $addFields:{
      totalDuration:{$sum: "$exercises.duration"}
    }
  },
  {$sort: {day: -1}}         
])    
    .then((workout) => {
      res.status(200).json(workout);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
});

router.post("/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((workout) => {
      res.status(200).json(workout);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
});

router.put("/workouts/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  db.Workout.findOneAndUpdate(
    { _id: id },
    {
      $push: {
        exercises: { ...body },
      },
    },
    { new: true }
  )
    .then((workout) => {
      res.status(200).json(workout);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
});

module.exports = router;