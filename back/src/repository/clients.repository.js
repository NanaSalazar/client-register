const clients = require('./../../client.json')

exports.get = async (id) => {
    if(id) {
        return clients.find(client => client.id === parseInt(id))
    }

    return clients
}

exports.post = async (newRegister) => {
    const { name, email, password} = newRegister
    const newId = clients.length + 1
    const newClient = {
        name,
        email,
        password,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        id: newId
    }

    clients.push(newClient)
    
    return newClient

}

exports.put = async (register, id) => {
    const clientIndex = clients.findIndex(client => client.id === parseInt(id))
    clients.splice(clientIndex, 1, register)

    return register
}