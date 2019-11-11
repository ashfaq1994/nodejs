const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.
     route('/')
     .get(userController.index)
     .post(userController.createUser);

// router
//      .route('/:id')
//      .get(getCurrentUser)
//      .patch(updateUser)
//      .delete(deleteUser);

module.exports = router;

