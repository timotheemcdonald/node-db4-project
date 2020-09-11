exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          id:1,
          ingredient: 'lemons',
          quantity: 7
        },
        {
          id:2,
          ingredient: 'sugar',
          quantity: 2
        },
        {
          id:3,
          ingredient: 'water',
          quantity: 1
        }
      ]);
    });
};

// exports.seed = function(knex) {
//   const ingredient = [
//     {
//       id:1,
//       ingredient: 'lemons',
//       quantity: 7
//     },
//     {
//       id:2,
//       ingredient: 'sugar',
//       quantity: 2
//     },
//     {
//       id:3,
//       ingredient: 'water',
//       quantity: 1
//     }
//   ]

//   return knex('ingredients').insert(ingredient)
// };
