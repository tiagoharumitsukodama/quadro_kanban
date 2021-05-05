const express = require('express')
const router = express.Router()
const middleware_console = require('./middleware/console_modify')

const db = require('../models/db')

router.post('/', (req, res, next) => {

    const cardToInsert = req.body

    db.insertCardsDB(cardToInsert)
        .then( cardInserted =>  {
            res.status(201)
            res.json(cardInserted)
            next(cardInserted)
        })
        .catch( error => {
            res.status(401)
            res.json({message: error.message})
        })

}, middleware_console.printCreateTime)


router.put('/:cardId', (req, res, next) => {

    const cardId = req.params.cardId
    const card = req.body

    db.updatedDB(cardId, card)
        .then( cardChanged =>  {
            if( !cardChanged ) {
                res.status(401).end
            }
            else{
                res.status(200).json(cardChanged)
                next(card)
            } 
        })
        .catch( error => {
            res.status(400)
            res.end()
        })
}, middleware_console.printUpdateTime)


router.delete('/:cardId', (req, res, next) => {

    const cardId = req.params.cardId

    db.deleteDB(cardId)
        .then( ({nonDeletedCards, deletedCard}) =>  {
            if(nonDeletedCards) {
                res.json(nonDeletedCards).status(200)
                next(deletedCard)
            }
            else res.status(404).end()
        })
        .catch( error => {
            res.status(401)
            res.json({message: error.message})
            res.end()
        })
}, middleware_console.printDeleteTime)

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