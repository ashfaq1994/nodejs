const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

router.
     route('/')
     .get(tripController.index)
     .post(tripController.store)


router.
     route('/:slug')
     // .get(tripController.destinationOne)
     .get(tripController.show)

router.
     route('/destination')
     // .get(tripController.destinationOne)
     .post(tripController.newDestination)

router
     .route('/destination/:slug')
     .get(tripController.destinationOne)

     module.exports = router;