
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
    },
    {
      ingredient_name: 'milk'
    },
    {
      ingredient_name: 'butter'
    },
    {
      ingredient_name: 'Rice Krispies Cereal'
    },
    {
      ingredient_name: 'marshmallows'
    },
    {
      ingredient_name: 'bread'
    },
    {
      ingredient_name: 'avocadoes'
    }
  ]

  return knex('ingredients').insert(ingredient)
};
