exports.up = function (knex) {
  return knex.schema.createTable("students", function (table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("registration").notNullable();
    table.string("uf", 2).notNullable();
    table.string("city").notNullable();
    table.string("user_id").notNullable();
    table.foreign("user_id").references("id").inTable("users");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("students");
};
