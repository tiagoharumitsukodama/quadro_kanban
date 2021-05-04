const Cards = require('./model_card');

module.exports.insertCardsDB = async ( card ) => {
    const database = require('./db');
    const Cards = require('./model_card');
 
    try {
        await database.sync();
 
        const res = await Cards.create({
            nome: 'mouse',
            preco: 10,
            descricao: 'Um mouse USB bonitão'
        })

        console.log("CRUD", res)

    } catch (error) {
        console.log('error');
    }
}

module.exports.readDB = async () => {

    const cards = await Cards.findAll();
    //const cards = await Cards.findByPk(1);
    
    for(let i in cards){

        console.log(cards[i].dataValues.nome);
    }
}

module.exports.updatedDB = async () => {
    const cards = await Cards.findByPk(3);
    //console.log(produto);
    cards.nome = "Mouse DE MERDA";
     
    const resultadoSave = await cards.save();
    console.log(resultadoSave.nome);
}

module.exports.deleteDB = async () => {
    Cards.destroy({ where: { id: 1 }});
}


