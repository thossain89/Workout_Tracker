const router = require("express").Router();
const db = require("../models");

router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((workout) => {
      res.status(200).json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((workout) => {
      res.status(200).json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((workout) => {
      res.status(201).json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/workouts/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  db.Workout.updateOne(
    { _id: id },
    {
      $push: {
        exercises: { ...body },
      },
    }
  )
    .then((workout) => {
      res.status(200).json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;