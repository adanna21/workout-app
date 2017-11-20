const express = require('express')

const liftRouter = express.Router()
const liftController = require('../controllers/liftController')

liftRouter.route('/')
  .get(liftController.index)

liftRouter.route('/:id')
  .get(liftController.show)

module.exports = liftRouter
