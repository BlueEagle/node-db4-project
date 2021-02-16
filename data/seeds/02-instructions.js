exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        { id: 1, recipe_id: 1, step_number: 1, step: "Place bread on plate." },
        {
          id: 2,
          recipe_id: 1,
          step_number: 2,
          step:
            "Lather one slice of bread heavily with peanut butter and jelly.",
        },
        {
          id: 3,
          recipe_id: 1,
          step_number: 3,
          step:
            "Place the slices of bread together with the peanut butter and jelly between them.",
        },
        { id: 4, recipe_id: 1, step_number: 4, step: "Enjoy!" },
        { id: 5, recipe_id: 2, step_number: 1, step: "Cook marshmallow." },
        {
          id: 6,
          recipe_id: 2,
          step_number: 2,
          step: "Sandwhich everything together.",
        },
        { id: 7, recipe_id: 2, step_number: 3, step: "Enjoy!" },
        { id: 8, recipe_id: 3, step_number: 1, step: "Cook eggs." },
        { id: 9, recipe_id: 3, step_number: 2, step: "Cook bacon." },
        { id: 10, recipe_id: 3, step_number: 3, step: "Cook blueberries." },
        {
          id: 11,
          recipe_id: 3,
          step_number: 4,
          step: "Wait... Who wrote that last one?",
        },
      ]);
    });
};
