const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Existing routes
router.get('/users', userController.getUsers);
router.post('/users', userController.addUser);
router.put('/users/:id', userController.updateUser);  // Route to update a user
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
