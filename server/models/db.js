const database = require('./config');
const CardModel = require('./model_card');

try {

  database.sync()
  
} catch (error) {

  console.log(error.message)
}

module.exports.insertCardsDB = async ( card ) => {

  try {
      await database.sync();

      return await CardModel.create({
          titulo: card.titulo,
          conteudo: card.conteudo,
          lista: card.lista
      })

    } catch (error) {
        console.log(error);
    }
}

module.exports.readDB = async () => {

    try {
        return await CardModel.findAll();
        
    } catch (error) {
        console.log(error)
    }
}

module.exports.updatedDB = async ( updatedCard ) => {

    try {
        const oldCard = await CardModel.findByPk( updatedCard.id );
    
        // ToDo
        //verificar se caso nao encontre oldCard é null ou undefined
        if( !oldCard ) throw Error("id does not exist")
    
        oldCard.titulo = updatedCard.titulo
        oldCard.conteudo = updatedCard.conteudo
        oldCard.lista = updatedCard.lista 
         
        return await cards.save();
        
    } catch (error) {
        console.log(error)
    }

}

module.exports.deleteDB = async (cardId) => {
    try {
        CardModel.destroy({ where: { id: cardId }});
        //ToDo capiturar erro caso não haja id correspondente
        
    } catch (error) {
        console.log(error)
    }
}


