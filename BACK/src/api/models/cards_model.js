const Sequelize = require('sequelize');
const UUID = require('uuid-int');
const sequelize = require('../../sequelize_config')
 
const Card = sequelize.define('card', {
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