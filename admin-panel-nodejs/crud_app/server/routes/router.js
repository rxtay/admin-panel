/* Timestamp: 1:22:40 */
const express = require('express');
const route = express.Router()
const services = require('../services/render')

const controller = require('../controller/controller')

/*
@description Root Route
@method GET
*/
route.get('/', services.homeRoutes)

/*
@description add user
@method /add-user
*/

route.get('/add_user', services.add_user)

/*
@description update user
@method /update-user
*/
route.get('/update-user', services.update_user)

//Api route
route.post('/api/users', controller.create)
route.get('/api/users', controller.find)

//Put Method
route.put('/api/users/:id', controller.update)

//Delete method
route.delete('/api/users/:id', controller.delete)

module.exports = route

