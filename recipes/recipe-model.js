const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    add
}

function getRecipes() {
    return db('recipes')
}

function add(r){
    return db('recipes').insert(r)
}

function getInstructions(recipe_id) {
    return db('instructions')
    .join('ingredients', 'ingredients.id', 'recipes', 'recipes.id', 'instructions.recipe_id')
    .select('instructions.id', 'ingredients.ingredient', 'recipes.recipe_name')
    .where('instructions.recipe_id', '=', recipe_id)
}

function getShoppingList(id) {
    return db('recipes_ingredients')
    .join('ingredients', 'recipes_ingredients.ingredients_id', '=', 'ingredients.id')
    .join('recipes', 'recipes_ingredients.recipe_id', '=', 'recipes.id')
    .select('recipe', 'ingredient', 'quantity')
    .where('recipes.id', id)
}


// function findSteps(id) {
//     return db('steps')
//     .join('schemes', 'schemes.id', 'steps.scheme_id')
//     .select('steps.id', 'steps.instructions','schemes.scheme_name')
//     .where('steps.scheme_id', '=', id)
// }