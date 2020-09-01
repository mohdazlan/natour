const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.json());

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

const getAllTours = (req, res) => {
    res.status(200).json({
        status: 'berjaya',
        results: tours.length,
        data: {
            tours: tours
        }
    })
}

const getTour = (req, res) => {
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
}

const createTour = (req, res) => {

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
}

const updateTour = (req, res) => {
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
}

const deleteTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'gagal',
            message: 'Invalid ID'
        })
    }
    res.status(204).json({
        status: 'success',
        maklumat:
            null

    })
}

app.get('/api/v1/tours', getAllTours)

app.get('/api/v1/tours/:id', getTour)

app.post('/api/v1/tours', createTour)

app.patch('/api/v1/tours/:id', updateTour)

app.delete('/api/v1/tours/:id', deleteTour)

const port = 3000
app.listen(port, () => {
    console.log(`App is running on port ${port} ..`)
});