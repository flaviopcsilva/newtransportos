const express = require('express')

const rotas = express()

rotas.get('/', (req, res) => {
    res.json('Rota funcionando')
})

module.exports = rotas