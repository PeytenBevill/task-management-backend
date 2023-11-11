const express = require('express')
const router = express.Router()
const taskController = require("../controllers/C-tasks")

router.get('/tasks/:user_id', taskController.list)

router.post('tasks/:user_id', taskController.create)

router.delete('/tasks/:user_id/:id', taskController.deleteTask)

module.exports = router