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
        },
        {
          id: 2,
          name: "S'mores",
        },
        {
          id: 3,
          name: "Your Favorite Grandma's Breakfast",
        },
      ]);
    });
};
