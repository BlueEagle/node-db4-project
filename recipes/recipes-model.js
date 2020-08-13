const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipe_ingredients")
    .join("ingredients", "ingredients.id", "recipe_ingredients.ingredient_id")
    .select("ingredients.name", "recipe_ingredients.ingredient_quantity")
    .where("recipe_ingredients.recipe_id", "=", recipe_id);
}

function getInstructions(recipe_id) {
  return db("instructions")
    .select("step_number", "step")
    .where({ recipe_id })
    .orderBy("step_number");
}
