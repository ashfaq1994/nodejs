const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

router.
     route('/')
     .get(tripController.index)
     .post(tripController.store)


router.
     route('/destination')
     .get(tripController.destinationOne)
     .post(tripController.newDestination)

// router
//      .route('destination/:id')
//      .get(tripController.destinationOne)

     module.exports = router;