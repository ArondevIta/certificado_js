exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.boolean("is_admin").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
