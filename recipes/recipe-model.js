const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getInstructions(recipe_id) {
    return db('instructions')
    .join('ingredients', 'ingredients.id', 'instructions.ingredient_id', 'recipes', 'recipes.id', 'instructions.recipe_id')
    .select('instructions.id', 'ingredients.ingredient_name', 'recipes.recipe_name')
    .where('instructions.recipe_id', '=', recipe_id)
}

function getShoppingList(recipe_id) {
    return db('shoppingList')
    .join('recipes', 'recipes.id', 'shoppingList.recipe_id', 'ingredients', 'ingredients.id', 'shoppingList.ingredient_id', 'instructions', 'instructions.quantity', 'shoppingList.quantity')
    .select('shoppingList.id', 'recipes.recipe_name', 'ingredients.ingredient_name', 'instructions.quantity' )
    .where('shoppingList.recipe_id', '=', recipe_id)
}


// function findSteps(id) {
//     return db('steps')
//     .join('schemes', 'schemes.id', 'steps.scheme_id')
//     .select('steps.id', 'steps.instructions','schemes.scheme_name')
//     .where('steps.scheme_id', '=', id)
// }