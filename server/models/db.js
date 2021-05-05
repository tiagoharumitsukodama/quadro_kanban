const database = require('./config');
const Card = require('./model_card');
const CardModel = require('./model_card');

try {

  database.sync()
  
} catch (error) {

  console.log(error.message)
}

module.exports.insertCardsDB = async ({ titulo, conteudo, lista}) => {

    await database.sync();

    const cardNew = await CardModel.create({
        titulo: titulo,
        conteudo: conteudo,
        lista: lista
    })
    
    return cardNew.dataValues
}

module.exports.readDB = async () => {

    return await CardModel.findAll();
}

module.exports.updatedDB = async ( cardId, updatedCard ) => {

    const oldCard = await CardModel.findByPk( cardId )

    if( !oldCard ) return null
    
    oldCard.titulo = updatedCard.titulo
    oldCard.conteudo = updatedCard.conteudo
    oldCard.lista = updatedCard.lista 

    const savedCard = await oldCard.save();

    return savedCard.dataValues
}

module.exports.deleteDB = async (cardId) => {

    const findedCard = await CardModel.findByPk(cardId);
    
    if(!findedCard)
        return null

    const deletedCard = await findedCard.destroy();

    if( !Object.keys(deletedCard).length ) 
        throw Error('Erro ao deletar card')
    
    return await CardModel.findAll()
}


