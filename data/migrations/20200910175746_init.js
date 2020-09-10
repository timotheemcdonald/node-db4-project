
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 100)
                .notNullable()
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name', 100)
                .unique()
                .notNullable()
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.integer('step')
                .unsigned()
                .notNullable()
            tbl.text('step_info')
                .notNullable()
            tbl.string('measurement')
                .unsigned()
                .notNullable()
            tbl.integer('quantity')
                .unsigned()
                .notNullable()
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('shoppingList', tbl => {
            tbl.increments();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            tbl.integer('measurement_id')
                .unsigned()
                .notNullable()
                .references('measurement')
                .inTable('instructions')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            tbl.integer('quantity_id')
                .unsigned()
                .notNullable()
                .references('quantity')
                .inTable('instructions')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('shoppingList')
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
