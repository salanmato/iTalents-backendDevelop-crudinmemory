const users = [

]

const findAllUsers = (req, res) => {
    res.send(users)
}

const findUser = (req, res) => {
    if (req.params.id > users.length - 1) {
        res.status(404).send({ message: 'Usuário não encontrado' })
    } else {
        const userId = req.params.id
        res.send(users)
    }
}

const createUser = (req, res) => {
    if (!req.body.nome || !req.body.email) {
        return res.status(400).send({ message: "Dados insuficientes!" })

    } else {
        const newUser = req.body

        newUser.id = users.length
        users.push(newUser)
        res.status(201).send(users)
    }
}

const updateUser = (req, res) => {
    if (req.params.id > users.length - 1 && (!req.body.nome || !req.body.email)) {
        res.status(400).send({ message: 'Dados insuficientes' })
    } else {

        const updatedUser = req.body
        const userId = req.params.id

        updatedUser.id = Number(req.params.id)

        users[userId] = updatedUser

        res.status(200).send(users[userId])
    }
}

const deleteUser = (req, res) => {
    if (req.params.id > users.length - 1) {
        res.status(400).send({ message: 'Usuário não encontrado' })
    } else {
        const userId = req.params.id
        const userDeletado = users[userId]

        users.splice(userId, 1)

        res.status(200).send(`Usuário deletado: nome: ${userDeletado.nome}, email: ${userDeletado.email}`)
    }
}

module.exports = {
    findAllUsers,
    findUser,
    createUser,
    updateUser,
    deleteUser
}