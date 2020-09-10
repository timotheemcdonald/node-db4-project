
exports.seed = function(knex) {
  const instruction = [
    {
      step: 1,
      step_info: 'Put lemons in water',
      measurement: 'whole',
      quantity: 3
    }
  ]
  return knex('instructions').insert(instruction)
};
