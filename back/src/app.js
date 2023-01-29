const express = require("express")
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded( {extended: true}))


const dataRoutes = require('./routes/router')

app.get("/", (req, res) => {
    res.status(200).send({"message": "API works!"})
})

app.use('/clients', dataRoutes)

module.exports = app
