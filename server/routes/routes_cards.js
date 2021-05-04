const express = require('express')
const router = express.Router()

const db = require('../models/callback_cards')

router.post('/', (req, res) => {

    db.insertCardsDB(req.user.user)
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

router.put('/:cardId', (req, res) => {

    const cardId = req.params.cardId
    const { card } = req.body

    db.updatedDB(cardId, card)
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

router.delete('/:cardId', (req, res) => {

    const cardId = req.params.cardId

    db.updateCard_db(cardId)
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

router.get('/', (req, res) => {

    db.getListCard_db()
        .then( list =>  {
            if( !list ) res.status(401).end()
            else res.json(list).status(200).end()
        })
        .catch( error => {
            res.status(401)
            res.json({message: error.message})
            res.end()
        })
})


module.exports = router