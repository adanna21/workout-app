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
  Routine.findById(req.params.id)
    .then(routine => {
      res.json({
        message: 'ok',
        data: {routine}
      })
    }).catch(next)
}

routineController.create = (req, res, next) => {
  Routine.create({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre
  }, req.user.id).then(routine => {
    res.json({
      message: 'Routine added successfully!',
      data: {routine}
    })
  }).catch(next)
}

routineController.update = (req, res, next) => {
  Routine.update({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre
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
