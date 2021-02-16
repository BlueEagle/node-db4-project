exports.up = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_ingredients")
    .createTable("recipes", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 255).notNullable().unique().index();
      tbl.text("instructions");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 255).notNullable().unique().index();
    })
    .createTable("recipe_ingredients", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredients.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.float("ingredient_quantity").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients");
};
