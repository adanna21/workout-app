const Lift = require('../models/Lift');

const liftsController = {};

liftsController.index = (req, res) => {
  Lift.findAll()
    .then(lifts => {
      res.json({
        message: 'ok',
        data: {
          lifts: lifts,
        },
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

liftsController.show = (req, res) => {
  Lift.findById(req.params.id)
    .then(lifts => {
      res.json({
        message: 'ok',
        data: {
          lifts: lifts,
        },
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

liftsController.create = (req, res) => {
  Flashcard.create({
      type: req.body.type,
      bodyPart: req.body.bodyPart,
      name: req.body.name,
      reps: req.body.reps,
      link: req.body.link,
    })
    .then(lifts => {
      res.json({
        message: 'Yup added',
        data: {
          lifts: lifts,
        },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

liftsController.update = (req, res) => {
  Lifts.update({
    type: req.body.type,
    bodyPart: req.body.bodyPart,
    name: req.body.name,
    reps: req.body.reps,
    link: req.body.link,
  }, req.params.id).then(lift => {
    res.json({
      message: 'Yup added',
      data: {
        lifts: lifts,
      },
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

liftsController.delete = (req, res) => {
  Flashcard.destroy(req.params.id)
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

module.exports = liftsController;
