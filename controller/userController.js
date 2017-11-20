const User = require('../models/User');

const userController = {};

userController.index = (req, res) => {
  User.findAll()
    .then(user => {
      res.json({
        message: 'ok',
        data: {
          user: user,
        },
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

userController.show = (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      res.json({
        message: 'ok',
        data: {
          user: user,
        },
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

userController.create = (req, res) => {
  Flashcard.create({
      type: req.body.type,
      bodyPart: req.body.bodyPart,
      name: req.body.name,
      reps: req.body.reps,
      link: req.body.link,
    })
    .then(user => {
      res.json({
        message: 'Yup added',
        data: {
          user: user,
        },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

userController.update = (req, res) => {
  User.update({
    type: req.body.type,
    bodyPart: req.body.bodyPart,
    name: req.body.name,
    reps: req.body.reps,
    link: req.body.link,
  }, req.params.id).then(lift => {
    res.json({
      message: 'Yup added',
      data: {
        user: user,
      },
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

userController.delete = (req, res) => {
  User.destroy(req.params.id)
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

module.exports = userController;
