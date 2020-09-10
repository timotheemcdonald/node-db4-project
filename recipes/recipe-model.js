const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('shoppingList')
    .join('recipes', 'recipes.id', 'shoppingList.recipe_id')
    .select('shoppingList.id', 'recipes.quantity', 'recipes.measurement')
    .where('shoppingList.recipe_id', '=', recipe_id)
}

function getInstructions(recipe_id) {
    return db('instructions')
    .join('recipes', 'recipes.id', 'instructions.recipe_id')
    .select('instructions.id', 'recipes.')
}

// function find() {
//     return db('schemes')
// }

// function findById(id) {
//     return db('schemes').where({ id})
// }

// function findSteps(id) {
//     return db('steps')
//     .join('schemes', 'schemes.id', 'steps.scheme_id')
//     .select('steps.id', 'steps.instructions','schemes.scheme_name')
//     .where('steps.scheme_id', '=', id)
// }