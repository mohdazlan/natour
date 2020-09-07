const express = require('express')
const morgan = require('morgan')

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')
const app = express()

// MIDDLEWARES
app.use(morgan('dev'))

app.use(express.json());

app.use((req, res, next) => {
    console.log('Hello 🧽')
    next();
})


// ROUTE HANDLERS


// app.get('/api/v1/tours', getAllTours)
// app.post('/api/v1/tours', createTour)
// app.get('/api/v1/tours/:id', getTour)
// app.patch('/api/v1/tours/:id', updateTour)
// app.delete('/api/v1/tours/:id', deleteTour)

// ROUTES


app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

// START THE SERVER
module.exports = app