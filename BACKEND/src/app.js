const express = require('express')
const cors = require('cors');
const env = require('./config')
const routers = require('./routes')

const app = express()

app.use( express.json() );
app.use( cors() )
app.use('/', routers)


app.listen( env.PORT, () => console.log(`Ouvindo na porta ${ env.PORT }`))