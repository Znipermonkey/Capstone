require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, )

app.use(express.json())
app.use(cors())

module.exports = {
    save: (req,res) => {
        sequelize.query(`Insert into Saved (number),
        values(${calculator.displayValue})
        `).then(dbRes => res.status(200).send(dbRes[0]))
    },

    post: (req,res) => {
        sequelize.query(`
        SELECT * FROM Saved,
        `).then(dbRes => res.status(200).send(dbRes[0]))
    }
}

