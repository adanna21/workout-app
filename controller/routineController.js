const Routine = require('../models/Routine');

const routineController = {};

routineController.index = (req, res) => {
  Routine.findAll()
    .then(routine => {
      res.json({
        message: 'ok',
        data: {
          routine: routine,
        },
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

routineController.show = (req, res) => {
  Routine.findById(req.params.id)
    .then(routine => {
      res.json({
        message: 'ok',
        data: {
          routine: routine,
        },
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

routineController.create = (req, res) => {
  Flashcard.create({
      type: req.body.type,
      bodyPart: req.body.bodyPart,
      name: req.body.name,
      reps: req.body.reps,
      link: req.body.link,
    })
    .then(routine => {
      res.json({
        message: 'Yup added',
        data: {
          routine: routine,
        },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

routineController.update = (req, res) => {
  Routine.update({
    type: req.body.type,
    bodyPart: req.body.bodyPart,
    name: req.body.name,
    reps: req.body.reps,
    link: req.body.link,
  }, req.params.id).then(lift => {
    res.json({
      message: 'Yup added',
      data: {
        routine: routine,
      },
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

routineController.delete = (req, res) => {
  Routine.destroy(req.params.id)
    .then(() => {
      res.json({
        message: 'Yup gone',
        data: null,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = routineController;
