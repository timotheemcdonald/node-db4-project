exports.up = function (knex) {
    return knex.schema

        .createTable('recipes', tbl => {
            tbl.increments('id');
            tbl.string('recipe', 128).notNullable().unique();
        })
        .createTable('instructions', tbl => {
            tbl.increments('id');
            tbl.string('step_info', 128);
            tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes')
            .onUpdate('CASCADE').onDelete('CASCADE');
        })
        .createTable('ingredients',
            tbl => {
                tbl.increments('id');
                tbl.string('ingredient', 128);
                tbl.float('quantity');
            })
        .createTable('recipes_ingredients',
            tbl => {
                tbl.integer('recipe_id').unsigned().notNullable().references('recipes.id').onUpdate('CASCADE').onDelete('CASCADE');
                tbl.integer('ingredients_id').unsigned().notNullable().references('ingredients.id').onUpdate('CASCADE').onDelete('CASCADE');
                tbl.primary(['recipe_id', 'ingredients_id']);
            })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipes');
};