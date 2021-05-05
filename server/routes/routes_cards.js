const express = require('express')
const router = express.Router()
const middleware_console = require('./middleware/console_modify')
const middleware_crud = require('./middleware/crud')


router.post('/', middleware_crud.create, middleware_console.printCreateTime)

router.put('/:cardId', middleware_crud.update, middleware_console.printUpdateTime)

router.delete('/:cardId', middleware_crud.delete, middleware_console.printDeleteTime)

router.get('/', middleware_crud.read)

module.exports = router