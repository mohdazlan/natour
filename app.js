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

app.get('/api/v1/tours/:id', (req, res) => {
    console.log(req.params)

    const id = req.params.id * 1

    if (id > tours.length) {
        return res.status(404).json({
            status: 'gagal',
            message: 'invalid ID'
        })
    }

    const tour = tours.find(el => el.id === id)

    res.status(200).json({
        status: 'success',
        data: tour
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

app.patch('/api/v1/tours/:id', (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'gagal',
            message: 'Invalid ID'
        })
    }
    res.status(200).json({
        status: 'success',
        maklumat: {
            data: '<Updated tour here...>'
        }
    })
})

const port = 3000
app.listen(port, () => {
    console.log(`App is running on port ${port} ..`)
});