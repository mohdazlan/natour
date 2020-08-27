const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.json());

// app.get('/', (req, res) => {
//     res.status(200).send('hello world')
// })

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'berjaya',
        results: tours.length,
        data: {
            tours: tours
        }
    })
})

app.post('/api/v1/tours', (req, res) => {

    // this will give you the id to the next data
    const newId = tours[tours.length - 1].id + 1

    // it will merge id object and req body object into one

    const newTour = Object.assign({ id: newId }, req.body)

    tours.push(newTour)
    fs.writeFile(
        `${__dirname}/dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        err => {
            res.status(201).json({
                status: 'selesai',
                data: {
                    dataBaru: newTour
                }
            })
        }
    )
})

const port = 3000
app.listen(port, () => {
    console.log(`App is running on port ${port} ..`)
});