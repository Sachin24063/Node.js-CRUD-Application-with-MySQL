const userModel = require('../models/userModel');

const getUsers = (req, res) => {
    userModel.getAllUsers((err, results) => {
        if (err) {
            res.status(500).send('Error fetching users');
        } else {
            res.json(results);
        }
    });
};

const addUser = (req, res) => {
    const newUser = req.body;
    userModel.createUser(newUser, (err, results) => {
        if (err) {
            res.status(500).send('Error adding user');
        } else {
            res.status(201).send('User added successfully');
        }
    });
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    userModel.updateUser(id, updatedUser, (err, results) => {
        if (err) {
            res.status(500).send('Error updating user');
        } else {
            res.send('User updated successfully');
        }
    });
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    userModel.deleteUser(id, (err, results) => {
        if (err) {
            res.status(500).send('Error deleting user');
        } else {
            res.send('User deleted successfully');
        }
    });
};

module.exports = { getUsers, addUser, updateUser, deleteUser };
