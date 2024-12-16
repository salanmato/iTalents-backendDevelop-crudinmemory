const express = require('express')
const app = express()
const users = require('./router/users.router')
const port = 3000

app.use(express.json())

app.use('/users', users)

app.listen(port, () => console.log(`Servidor na porta: http://localhost:${port})`))