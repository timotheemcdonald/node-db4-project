exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {
          id:1,
          recipe_id: 1,
          ingredient_id: 1,
        }
      ]);
    });
};


// exports.seed = function(knex) {

//   const list = [
//     {
//       id:1,
//       recipe_id: 1,
//       ingredient_id: 1,
//     }
//   ]

//   return knex('recipes_ingredients').insert(list)
//   }

