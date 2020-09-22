// const fs = require('fs');
const Tour = require('./../models/tourModel.js');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'gagal',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price)
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'berjaya',
    // results: tours.length,
    // data: {
    //   tours: tours,
    // },
  });
};

exports.getTour = (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1;

  // if (id > tours.length) {
  //     return res.status(404).json({
  //         status: 'gagal',
  //         message: 'invalid ID'
  //     })
  // }

  // const tour = tours.find((el) => el.id === id);

  // res.status(200).json({
  //   status: 'success',
  //   data: tour,
  // });
};

exports.createTour = (req, res) => {
  // this will give you the id to the next data
  // const newId = tours[tours.length - 1].id + 1;

  // // it will merge id object and req body object into one

  // const newTour = { id: newId, ...req.body };

  // tours.push(newTour);
  // fs.writeFile(
  //   `${__dirname}/dev-data/data/tours-simple.json`,
  //   JSON.stringify(tours),
  //   (err) => {
  //     res.status(201).json({
  //       status: 'selesai',
  //       data: {
  //         dataBaru: newTour,
  //       },
  //     });
  //   }
  // );
  res.status(201).json({
    status: 'selesai',
    // data: {
    //   dataBaru: newTour,
    // },
  });
};

exports.updateTour = (req, res) => {
  // if (req.params.id * 1 > tours.length) {
  //     return res.status(404).json({
  //         status: 'gagal',
  //         message: 'Invalid ID'
  //     })
  // }
  res.status(200).json({
    status: 'success',
    maklumat: {
      data: '<Updated tour here...>',
    },
  });
};

exports.deleteTour = (req, res) => {
  // removed id checking
  // if (req.params.id * 1 > tours.length) {
  //     return res.status(404).json({
  //         status: 'gagal',
  //         message: 'Invalid ID'
  //     })
  // }
  res.status(204).json({
    status: 'success',
    maklumat: null,
  });
};
