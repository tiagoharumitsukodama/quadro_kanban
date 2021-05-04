const express = require('express')
const router = express.Router()

const db = require('../models/authentication')

router.post('/', (req, res) => {

    db.addCard_db(req.user.user)
        .then( status =>  {

            if( status == 'ok' ) res.status(200).end()

            else res.status(401).end()
        })
        .catch( error => {
            res.status(401)
            res.json({message: error.message})
            res.end()
        })

})

module.exports = router