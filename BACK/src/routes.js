const express = require('express')
const router = express.Router()

const auth_constroller = require('./api/controllers/auth')
const cards_constroller = require('./api/controllers/cards')
const printCommandDate = require('./api/services/print_date')
const verifyUser = require('./api/services/auth_token')

router.post('/login', auth_constroller.verifyUser)

router.get('/cards', 
    verifyUser.authenticateToken, 
    cards_constroller.read
)
router.post('/cards', 
    verifyUser.authenticateToken,
    cards_constroller.create, 
    printCommandDate.printCreateTime
)
router.put('/cards/:cardId', 
    verifyUser.authenticateToken, 
    cards_constroller.update, 
    printCommandDate.printUpdateTime
)
router.delete('/cards/:cardId', 
    verifyUser.authenticateToken, 
    cards_constroller.delete, 
    printCommandDate.printDeleteTime
)


module.exports = router