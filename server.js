const express = require('express')

const recipeRouter = require('./recipes/recipe-router.js')
const ingredientsRouter = require('./recipes/ingredients-router.js')

const server = express()

server.use(express.json())
server.use('/api/recipes', recipeRouter)
server.use('/api/ingredients', ingredientsRouter)

module.exports = server