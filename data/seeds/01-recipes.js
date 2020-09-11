exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id:1,
          recipe: 'Lemonade'
        },
        {
          id:2,
          recipe: 'Rice Krispies Treats'
        },
        {
          id:3,
          recipe: 'Avocado Toast'
        }
      ]);
    });
};



// exports.seed = function (knex) {

//   const recipe = [
    // {
    //   recipe: 'Lemonade'
    // },
    // {
    //   recipe: 'Rice Krispies Treats'
    // },
    // {
    //   recipe: 'Avocado Toast'
    // }
//   ]

//   return knex('recipes').insert(recipe)

// };

// return knex('recipes').truncate()
// .then(function () {
//   const recipe = [
//     {
//       id: 01,
//       recipe_name: 'Lemonade'
//     }
//   ]
//   return knex('recipes').insert(recipe)
// })

// const recipe = [
//   {
//     recipe_name: 'Lemonade'
//   }
// ]

// return knex('recipes').insert(recipe)

// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('tests').truncate()
//     .then(function () {
//       // Inserts seed entries
//       return knex('tests').insert([
//         {id: 1, name: 'rtim', age: 6, city: "Boston"},
//         {id: 2, name: 'ali', age: 3, city: "Denver"},
//         {id: 3, name: 'richard', age: 10, city: "Sacramento"}
//       ]);
//     });
// }; (edited) 