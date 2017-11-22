const Routine = require('../models/Routine')

const routineController = {}

routineController.index = (req, res, next) => {
  Routine.findAll()
    .then(routines => {
      res.json({
        message: 'ok',
        data: {routines}
      })
    }).catch(next)
}

routineController.show = (req, res, next) => {
  Routine.findByUser(req.params.user)
    .then(routine => {
      res.json({
        message: 'ok',
        data: {routine}
      })
    }).catch(next)
}

routineController.create = (req, res, next) => {
  Routine.create({
    name: req.body.name,
    type: req.body.type,
    bodyPart: req.body.bodyPart,
    user_id: req.body.user_id,
    exercises1: req.body.exercises1,
    exercises2: req.body.exercises2,
    exercises3: req.body.exercises3,
    exercises4: req.body.exercises4
  }).then(routine => {
    res.json({
      message: 'Routine added successfully!',
      data: {routine}
    })
  }).catch(next)
}

routineController.update = (req, res, next) => {
  Routine.update({
    name: req.body.name,
    type: req.body.type,
    bodyPart: req.body.bodyPart,
    exercises1: req.body.exercises1,
    exercises2: req.body.exercises2,
    exercises3: req.body.exercises3,
    exercises4: req.body.exercises4
  }, req.params.id).then(routine => {
    res.json({
      message: 'Routine added successfully!',
      data: {routine}
    })
  }).catch(next)
}

routineController.delete = (req, res, next) => {
  Routine.destroy(req.params.id)
    .then(() => {
      res.json({
        message: 'Routine deleted successfully!'
      })
    }).catch(next)
}

module.exports = routineController
