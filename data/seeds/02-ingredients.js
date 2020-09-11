
exports.seed = function(knex) {
  const ingredient = [
    {
      ingredient_name: 'lemons'
    },
    {
      ingredient_name: 'sugar'
    },
    {
      ingredient_name: 'water'
    }
  ]

  return knex('ingredients').insert(ingredient)
};
