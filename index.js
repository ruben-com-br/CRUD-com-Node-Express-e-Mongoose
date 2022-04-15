// config inicial
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.s9hsd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
console.log(url)
mongoose
    .connect(
        url = url
    )
    .then(() => {
        console.log('Conectou ao banco!')
        app.listen(3001)
    })
    .catch((err) => console.log(err))