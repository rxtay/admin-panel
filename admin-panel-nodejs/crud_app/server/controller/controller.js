const { reset } = require('nodemon')
var userDB = require('../model/model')

//Create and save new user
exports.create = (req, res) => {
    //Validate request
    if (!req.body) {
        //If the user makes a POST request with EMPTY body
        res.status(400).send({message: "Content cannot be empty!"})
        return
    }

    //New user
    const user = new userDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //Save user in database
    user
        .save(user)
        .then(data => {
        //res.send(data)
        res.redirect('/add_user');
        })
        .catch (err=> {
            res.status(500).send({
                message: err.message || "An error occurred."
            })
        })
}

//Retrieve and return all users/retrieve and return a single user
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id

        userDB.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({message: `User with id=${id} not found.`})
            } else {
                res.send(data)
            }
        })
        .catch (err => {
            res.status(500).send({message: `Error retrieving user with id=${id}.`})
        })


    } else {
        //Return all users
        userDB.find()
        .then(user => {
        res.send(user)
            })
        .catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while retrieving user information."
            })
        })
    }

}

//Update a new identified user by user id
exports.update = (req, res) => {
    if (!req.body) {
        //If the user makes a POST request with EMPTY body
        res.status(400).send({message: "Fields cannot be empty!"})
        return
    }

    const id = req.params.id

    userDB.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data) {
            res.status(404).send({message: `Failed to update user with ${id}.`})
        } else {
            res.send(data)
        }
    })
    .catch (err => {
        res.status(500).send({message: `Error occurred while updating user!`})
    })
    
}

//Delete a user with specified user id
exports.delete = (req, res) => {
    const id = req.params.id

    userDB.findByIdAndDelete(id)
    .then(data => {
        if(!data) {
            res.status(404).send({message: `Failed to delete user with ${id}.`})
        } else {
            res.send({message: `User with ${id} has been successfully deleted!`})
        }
    })
    .catch (err => {
        res.status(500).send({
            message: `Failed to delete user with ${id}.`
        })
    })
}
