require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env

const {post, save} = require('./controller.js')

app.use(express.json())
app.use(cors())

app.get('/save',save )
app.post('/post',post )

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))