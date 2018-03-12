const express = require('express');
const router = express.Router();
const Student = require('../../config/models/Student');

//Retrives all the info about the users in the database.
router.get('/getallstudents', (request, response, next) => {
    //console.log(`Request made at IP ${request.socket.remoteAddress}:${request.socket.remotePort}`);
    Student.findAll()
    .then(data => { response.json(data); })
    .catch(error => next(error))
})

//Retrieves a specific user based on the ID.
router.get('/:_id', (request, response, next) => {
    //console.log(`Request made at IP ${request.socket.remoteAddress}:${request.socket.remotePort}`);
    Student.findById(request.params._id)
    .then(data => { response.json(data); })
    .catch(error => next(error))
})

//Adds a new user into the database.
router.post('/addstudent', (request, response, next) => {
    Student.create(request.body)
    .then(data => { response.json(data); })
    .catch(error => next(error))
    
})

router.put('/updatestudent', (request, response, next) => {
    
})

module.exports = router;