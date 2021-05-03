const express = require('express')
const router = express.Router()

const db = require('../models/authentication') 

router.post('/', (req, res) => {

    const { login, senha } = req.body

    db.authentication_db(login, senha)
        .then( data => {
            res.status(200)
            res.json(data)
        })
        .catch( erro => {
            res.status(401)
            res.json(erro.message)
        })
})


module.exports = router