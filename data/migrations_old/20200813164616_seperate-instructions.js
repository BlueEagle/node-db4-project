exports.up = function (knex) {
  return knex.schema
    .table("recipes", (tbl) => {
      tbl.dropColumn("instructions");
    })
    .createTable("instructions", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.integer("step_number").unsigned().notNullable();
      tbl.text("step").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .table("recipes", (tbl) => {
      tbl.text("instructions").notNullable();
    })
    .dropTableIfExists("instructions");
};
