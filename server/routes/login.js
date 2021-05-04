const express = require('express')
const router = express.Router()

const db = require('../models/authentication') 
const jwt_tools = require('./jwt_tools') 

router.post('/', (req, res) => {

    const { login, senha } = req.body

    db.authentication_db(login, senha)
        .then( dataJson => {

            const userName = dataJson.user

            if ( !Object.keys(userName).length )
                throw Error('User name is empty')

            const token = jwt_tools.generateAccessToken( userName )

            res.status(200)
            res.json(token)
        })
        .catch( erro => {
            res.status(401)
            res.json(erro.message)
        })
})



module.exports = router