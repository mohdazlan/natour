const express = require('express')
const fs = require('fs')

const app = express()

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

const port = 3000
app.listen(port, () => {
    console.log(`App is running on port ${port} ..`)
});