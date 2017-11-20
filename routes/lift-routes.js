const express = require('express')

const liftRouter = express.Router()
const liftController = require('../controllers/lift-controller')

liftRouter.route('/')
  .get(liftController.index)

liftRouter.route('/:id')
  .get(liftController.show)

module.exports = liftRouter
