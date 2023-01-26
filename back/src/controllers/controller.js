const clients = require('./../../data.json')

exports.get = async (req, res) => {
    res.send(clients)
}

exports.post = async (req, res) => {
    const { name, age, email} = req.body
    const newId = clients.length + 1
    const newClient = {name, age, email, id: newId}

    clients.push(newClient)

    res.send(newClient)
}

exports.getById = async (req, res) => {
    res.send(clients.find(client => client.id === parseInt(req.params.id)))
}

exports.put = async (req, res) => {
    const { name, age, email, id} = req.body

    const newClient = { name, age, email, id}
    const clientIndex = clients.findIndex(client => client.id === parseInt(req.params.id))

    clients.splice(clientIndex, 1, newClient)
    res.send(newClient)
}

exports.patch = async (req, res) => {
    const { email} = req.body
    
    const clientById = clients.filter(client => client.id === parseInt(req.params.id))[0]
    const clientIndex = clients.findIndex(client => client.id === parseInt(req.params.id))
    const clientUpdated = { email}

    const newClient = { ...clientById, ...clientUpdated}

    clients.splice(clientIndex, 1, newClient)

    res.send(newClient)

}

exports.delete = async (req, res) => {
    const clientIndex = clients.findIndex(client => client.id === parseInt(req.params.id))

    clients.splice(clientIndex, 1)
}