const router = require('express').Router()
const usersController = require('../controller/users.controller')

router.get('/findAllUsers', usersController.findAllUsers)
router.post('/createUser', usersController.createUser)
router.put('/updateUser/:id', usersController.updateUser)
router.delete('/deleteUser/:id', usersController.deleteUser)
router.get('/findUser/:id', usersController.findUser)

module.exports = router
