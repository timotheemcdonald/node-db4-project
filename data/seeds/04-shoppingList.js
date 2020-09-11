
exports.seed = function(knex) {

  const list = [
    {
      recipe_id: 1,
      quantity: 1,
      ingredient_id: 1,
    }
  ]

  return knex('shoppingList').insert(list)
  }

