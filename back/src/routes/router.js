const express = require('express')
const router = express.Router()

const clients = require('./../../data.json')

router.get("/data", (req, res) => {
    res.send(clients)
})

router.post("/data", (req, res) => {
    const { name, age, email} = req.body
    const newId = clients.length + 1
    const newClient = {name, age, email, id: newId}

    clients.push(newClient)

    res.send(newClient)
} )

router.route("/:id")

.get( (req, res) => {
    res.send(clients.filter(client => client.id === parseInt(req.params.id)))
})

.put( (req, res) => {
    const { name, age, email, id} = req.body

    const newClient = { name, age, email, id}
    const clientIndex = clients.findIndex(client => client.id === parseInt(req.params.id))

    clients.splice(clientIndex, 1, newClient)
    res.send(newClient)
})

.patch( (req, res) => {
    const { email} = req.body
    
    const clientById = clients.filter(client => client.id === parseInt(req.params.id))[0]
    const clientIndex = clients.findIndex(client => client.id === parseInt(req.params.id))
    const clientUpdated = { email}

    const newClient = { ...clientById, ...clientUpdated}

    clients.splice(clientIndex, 1, newClient)

    res.send(newClient)

})

.delete( (req, res) => {

    const clientIndex = clients.findIndex(client => client.id === parseInt(req.params.id))

    clients.splice(clientIndex, 1)
})

module.exports = router
