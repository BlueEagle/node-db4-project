exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "Peanut Butter" },
        { id: 2, name: "Jelly" },
        { id: 3, name: "Bread" },
        { id: 4, name: "Marshmallow" },
        { id: 5, name: "Hershey's Milk Chocolate" },
        { id: 6, name: "Graham Crackers" },
        { id: 7, name: "eggs" },
        { id: 8, name: "bacon" },
        { id: 9, name: "blueberries" },
        { id: 10, name: "heavy cream" },
        { id: 11, name: "sugar" },
      ]);
    });
};
