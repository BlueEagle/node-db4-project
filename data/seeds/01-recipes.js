exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          name: "PB&J Sandwich",
          instructions:
            "1. Place bread on plate. 2. Lather one slice of bread heavily with peanut butter and jelly. 3. Place the slices of bread together with the peanut butter and jelly between them. 4. Enjoy!",
        },
        {
          id: 2,
          name: "S'mores",
          instructions:
            "Make the second recipe somehow. You will figure it out.",
        },
        {
          id: 3,
          name: "Your Favorite Grandma's Breakfast",
          instructions:
            "Cook each ingredient separately and eat them slowly and carefully like grandma did.",
        },
      ]);
    });
};
