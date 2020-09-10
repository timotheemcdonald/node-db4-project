
exports.seed = function(knex) {

  const instruction = [
    {
      recipe_id: 1,
      step: 1,
      step_info: 'Put lemons in water',
      ingredient_id: 1,
      measurement: 'whole',
      quantity: 6
    },
    {
      recipe_id:2,
      step: 2,
      step_info: 'Put sugar in water and stir',
      ingredient_id: 2,
      measurement: 'cup',
      quantity: 2
    }
  ]

  return knex('instructions').insert(instruction)
  
};
