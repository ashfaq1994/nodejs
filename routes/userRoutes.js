const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.
     route('/')
     .get(userController.getUser)
     .post(userController.createUser);

router.
     route('/user')
     .get(userController.index)

// router
//      .route('/:id')
//      .get(getCurrentUser)
//      .patch(updateUser)
//      .delete(deleteUser);

module.exports = router;

