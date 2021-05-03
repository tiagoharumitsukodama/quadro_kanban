const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('cards')
    res.status(200)
    res.send('router')

    next()
})

module.exports = router