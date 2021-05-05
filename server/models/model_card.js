const Sequelize = require('sequelize');
const database = require('./config');
const UUID = require('uuid-int');

 
const Card = database.define('card', {
    id: {
        type: Sequelize.INTEGER ,
        defaultValue: function() {

            const generator = UUID( 511*Math.random() );
            const uuid = generator.uuid();
            return uuid
        },
        primaryKey: true,
        allowNull: false,          
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    conteudo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lista: {
        type: Sequelize.STRING,
        allowNull: false
    },
})
 
module.exports = Card;