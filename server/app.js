require('dotenv').config()

const express = require('express')
const cors = require('cors');
const cards = require('./routes/cards')
const login = require('./routes/login')
const jwt_tools = require('./routes/jwt_tools')

/*
const uuid = require('uuid').v4;

*/ 

const app = express()

const PORT = process.env.PORT
const authenticateToken = jwt_tools.authenticateToken

app.use( express.json() );
app.use( cors() )

app.use('/login', login)
app.use('/cards', authenticateToken, cards)


app.listen(PORT, () => console.log('ouvindo'))