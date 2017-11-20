app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

const routineRouter = require('./routes/routine-routes')
app.use('/api/routine', routineRouter)

const liftRouter = require('./routes/lift-routes')
app.use('/api/lift', liftRouter)

app.use('*', (req, res) => {
  res.status(404).send('Not Found')
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    error: err,
    message: err.message
  })
})
