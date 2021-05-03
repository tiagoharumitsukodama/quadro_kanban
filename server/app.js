const express = require('express')
const dotenv = require('dotenv')
const cards = require('./routes/cards')
const login = require('./routes/login')
const cors = require('cors');

/*
const jwt = require('jsonwebtoken');
const uuid = require('uuid').v4;

*/ 

const app = express()
dotenv.config()

const PORT = process.env.PORT

app.use( express.json() );
app.use( cors() )
app.use('/cards', cards)
app.use('/login', login)

app.listen(PORT, () => console.log('ouvindo'))