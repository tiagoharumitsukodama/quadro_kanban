const express = require('express')
const router = express.Router()

const db = require('../models/callback_auth') 
const jwt_tools = require('./jwt_tools') 

router.post('/', (req, res) => {

    const { login, senha } = req.body

    db.authenticate_user(login, senha)
        .then( username => {

            if ( !username ){
                res.status(401)
                res.end()
            }
            else {
                const token = jwt_tools.generateAccessToken( username )
                res.status(200)
                res.json(token)
                res.end()
            }
        })
        .catch( erro => {
            res.status(400)
            res.end()
        })
})

module.exports = router