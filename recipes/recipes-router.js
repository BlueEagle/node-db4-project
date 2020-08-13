const express = require("express");
const Recipes = require("./recipes-model");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((dbRes) => {
      res.status(200).json({ recipes: dbRes }).end();
    })
    .catch((error) => res.status(500).json({ error }).end());
});

router.get("/:id/shopping-list", (req, res) => {
  const recipeId = req.params.id;
  Recipes.getShoppingList(recipeId)
    .then((dbRes) => {
      res.status(200).json({ shoppingList: dbRes }).end();
    })
    .catch((error) => res.status(500).json({ error }).end());
});

module.exports = router;
