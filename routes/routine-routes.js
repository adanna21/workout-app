const express = require('express')

const routineRouter = express.Router()
const routineController = require('../controllers/routine-controller')

routineRouter.route('/')
  .get(routineController.index)
  .post(routineController.create)

routineRouter.route('/:id')
  .get(routineController.show)
  .put(routineController.update)
  .delete(routineController.delete)

module.exports = routineRouter
