const cardsRepository = require('../repositories/cards_repository')

module.exports.create = (req, res, next) => {

    const cardToInsert = req.body
    const {lista, titulo, conteudo} = cardToInsert

    if( !lista || !titulo || !conteudo ) {
        res.status(400).end()
        return
    }

    cardsRepository.insertCardsDB(cardToInsert)
        .then( cardInserted =>  {
            res.status(201)
            res.json(cardInserted)
            next(cardInserted)
        })
        .catch( error => {
            res.status(401)
            res.json({message: error.message})
        })
}

module.exports.update = (req, res, next) => {

    const cardId = req.params.cardId
    const card = req.body
    const {titulo, conteudo, lista} = card
    
    if( !cardId || !titulo || !conteudo || !lista ) {
        res.status(400).end()
        return
    }

    cardsRepository.updatedDB(cardId, card)
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
}

module.exports.delete = (req, res, next) => {

    const cardId = req.params.cardId

    if( !cardId ) {
        res.status(400).end()
        return
    } 

    cardsRepository.deleteDB(cardId)
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
}

module.exports.read = (req, res) => {

    cardsRepository.readDB()
        .then( list =>  {
            if( !list ) res.status(401).end()
            else res.json(list).status(200).end()
        })
        .catch( error => {
            res.status(401)
            res.json({message: error.message})
            res.end()
        })
}