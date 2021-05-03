const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

const PORT = process.env.PORT

app.get('/', (req, res) => {
    console.log('chamou')
    res.status(200)
    res.send('get')
})

app.listen(PORT, () => console.log('ouvindo'))