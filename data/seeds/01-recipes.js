
exports.seed = function(knex) {

  const recipe = [
    {
      recipe_name:'Lemonade'
    },
    {
      recipe_name:'Rice Krispies Treats'
    },
    {
      recipe_name:'Avocado Toast'
    }
  ]

 return knex('recipes').insert(recipe)
};
