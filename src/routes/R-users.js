const express = require('express')
const router = express.Router()
const usersController = require("../controllers/C-users")

router.get('/users/:user_id', usersController.list)

router.post('users/:user_id', usersController.createUser)


module.exports = router