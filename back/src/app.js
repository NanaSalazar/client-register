const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded( {extended: true}))

const dataRoutes = require('./routes/router')

app.get("/", (req, res) => {
    res.status(200).send({"message": "API works!"})
})

app.use('/', dataRoutes)

module.exports = app
