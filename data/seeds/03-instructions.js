exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          id:1,
          recipe_id: 1,
          step_info: 'Put lemons in water',
        },
        {
          id:2,
          recipe_id: 1,
          step_info: 'Put sugar in water and stir',
        }
      ]);
    });
};


// exports.seed = function(knex) {

//   const instruction = [
//     {
//       id:1,
//       recipe_id: 1,
//       step_info: 'Put lemons in water',
//     },
//     {
//       id:2,
//       recipe_id: 1,
//       step_info: 'Put sugar in water and stir',
//     }
//   ]

//   return knex('instructions').insert(instruction)

// };
