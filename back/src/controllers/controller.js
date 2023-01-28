const repository = require('./../repository/clients.repository')
const clients = require('./../../client.json')


exports.get = async (req, res) => {
    try {
        let clients = await repository.get()
        res.status(200).send(clients)
    } catch(e) {
        res.status(500).send({message: "error", error: e})
    }
}

exports.post = async (req, res) => {
    const { name, email, password} = req.body
    try {
        let newRegister = await repository.post( {name, email, password})
        res.status(200).send(newRegister)
    } catch(e) {
        res.status(500).send({message: "error", error: e})
    }
}

exports.getById = async (req, res) => {
    try {
        const client = await repository.get(parseInt(req.params.id))
        res.status(200).send(client)
    } catch(e) {
        res.status(500).send({message: "error", error: e})
    }
}

exports.put = async (req, res) => {
    const { name, email, password, createdAt, updatedAt, id} = req.body
    const newClient = {name, email, password, createdAt, updatedAt, id}
    try {
        const register = await repository.put( newClient, req.params.id)
        res.status(200).send(register)
    } catch(e) {
        res.status(500).send({message: "error", error: e})
    }
}

exports.patch = async (req, res) => {
    const { password} = req.body
    try {
        const data = await repository.patch( {password}, req.params.id)
        res.status(201).send(data)
    } catch(e) {
        res.status(500).send({message: "error", error: e})
    }

}

exports.delete = async (req, res) => {
    try {
        const client = await repository.delete(req.params.id)
        res.status(200).send(client)
    } catch(e) {
        res.status(500).send({message: "error", error: e})
    }
}