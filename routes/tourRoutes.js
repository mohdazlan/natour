
const express = require('express')
const tourController = require('./../controllers/tourController')
const router = express.Router()

router.param('id', (req, res, next, nilai) => {
    console.log(`Tour id is:  ${nilai}`)
})
router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour)

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)

module.exports = router