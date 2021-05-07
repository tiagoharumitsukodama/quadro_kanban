const cardModel = require('../models/cards_model');
const sequelize = require('../../sequelize_config')

try {

  sequelize.sync()
  
} catch (error) {

  console.log(error.message)
}

module.exports.insertCardsDB = async ({ titulo, conteudo, lista}) => {

    await sequelize.sync();

    const cardNew = await cardModel.create({
        titulo: titulo,
        conteudo: conteudo,
        lista: lista
    })
    
    return cardNew
}

module.exports.readDB = async () => {

    return await cardModel.findAll();
}

module.exports.updatedDB = async ( cardId, updatedCard ) => {

    const oldCard = await cardModel.findByPk( cardId )

    if( !oldCard ) return null
    
    oldCard.titulo = updatedCard.titulo
    oldCard.conteudo = updatedCard.conteudo
    oldCard.lista = updatedCard.lista 

    const savedCard = await oldCard.save();

    return savedCard
}

module.exports.deleteDB = async (cardId) => {

    const findedCard = await cardModel.findByPk(cardId);
    
    if(!findedCard)
        return null

    const deletedCard = await findedCard.destroy();

    if( !Object.keys(deletedCard).length ) 
        throw Error('Erro ao deletar card')

    const nonDeletedCards = await cardModel.findAll()
    
    return {nonDeletedCards, deletedCard}
}


