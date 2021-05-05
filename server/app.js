require('dotenv').config()

const express = require('express')
const cors = require('cors');
const routes_cards = require('./routes/routes_cards')
const routes_login = require('./routes/routes_login')
const jwt_tools = require('./routes/jwt_tools');

/*
const uuid = require('uuid').v4;

*/ 

const app = express()

const PORT = process.env.PORT

app.use( express.json() );
app.use( cors() )

app.use('/login', routes_login)
app.use('/cards', jwt_tools.authenticateToken, routes_cards)


app.listen(PORT, () => console.log('ouvindo'))