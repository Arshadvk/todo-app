const {Router} = require ('express')
const { getToDo } = require('../controller/ToDoController')
const router = Router()

router.get('/' , getToDo)
module.exports = router