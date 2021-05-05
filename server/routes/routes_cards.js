const express = require('express')
const router = express.Router()

const db = require('../models/db')

router.post('/', (req, res) => {

    const cardToInsert = req.body

    db.insertCardsDB(cardToInsert)
        .then( cartInserted =>  {
            res.status(201)
            res.json(cartInserted)

        })
        .catch( error => {
            res.status(401)
            res.json({message: error.message})
        })
})

router.put('/:cardId', (req, res) => {

    const cardId = req.params.cardId
    const card = req.body

    db.updatedDB(cardId, card)
        .then( cardChanged =>  {
            if( !cardChanged ) res.status(401).end()
            else res.status(200).json(cardChanged).end()
        })
        .catch( error => {
            res.status(400)
            res.end()
        })
})

router.delete('/:cardId', (req, res) => {

    const cardId = req.params.cardId

    db.deleteDB(cardId)
        .then( lista =>  {

            if(lista) res.json(lista).status(200).end()
            else res.status(404).end()
        })
        .catch( error => {
            res.status(401)
            res.json({message: error.message})
            res.end()
        })
})

router.get('/', (req, res) => {

    db.readDB()
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