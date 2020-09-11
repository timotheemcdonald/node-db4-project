const express = require('express')

const Recipes = require('./recipe-model')

const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(value => {
        res.status(200).json({data: value})
    })
    .catch(error => {
        res.status(500).json({data : error})
    })
})

router.get('/:id/instructions', (req, res) => {
    
    const {id} = req.params

    Recipes.getInstructions(id)
    .then(value => {
        res.status(200).json({ data: value})
    })
    .catch(error => {
        res.status(500).json({ data: error})
    })
})

module.exports = router