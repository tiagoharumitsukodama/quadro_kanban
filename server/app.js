require('dotenv').config()

const express = require('express')
const cors = require('cors');
const cards = require('./routes/cards')
const login = require('./routes/login')
const jwt_tools = require('./routes/jwt_tools');
const Cards = require('./models/cards');

/*
const uuid = require('uuid').v4;

*/ 

const app = express()

const PORT = process.env.PORT
const authenticateToken = jwt_tools.authenticateToken

const initalizeDB = async () => {
    const database = require('./models/db');
 
    try {
        const resultado = await database.sync();
        console.log('resultado');
    } catch (error) {
        console.log('error');
    }
}

initalizeDB()

const InsertDB = async () => {
    const database = require('./models/db');
    const Cards = require('./models/cards');
 
    try {
        const resultado = await database.sync();
        //console.log('resultado');
 
        const resultadoCreate = await Cards.create({
            nome: 'mouse',
            preco: 10,
            descricao: 'Um mouse USB bonitão'
        })
        //console.log(resultadoCreate);
    } catch (error) {
        console.log('error');
    }
}

//InsertDB()

const readDB = async () => {

    const cards = await Cards.findAll();
    //const cards = await Cards.findByPk(1);
    
    for(let i in cards){

        console.log(cards[i].dataValues.nome);
    }
}

const updatedDB = async () => {
    const cards = await Cards.findByPk(3);
    //console.log(produto);
    cards.nome = "Mouse DE MERDA";
     
    const resultadoSave = await cards.save();
    console.log(resultadoSave.nome);
}

const deleteDB = async () => {
    Cards.destroy({ where: { id: 1 }});
}

readDB()

app.use( express.json() );
app.use( cors() )

app.use('/login', login)
app.use('/cards', authenticateToken, cards)


app.listen(PORT, () => console.log('ouvindo'))