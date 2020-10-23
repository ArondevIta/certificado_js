exports.up = function (knex) {
  return knex.schema.createTable("certificates", function (table) {
    table.increments("id").primary();
    table.string("code").notNullable();
    table.string("institution").notNullable();
    table.string("course").notNullable();
    table.string("charge_horary").notNullable();
    table.string("coordinate").notNullable();
    table.string("date").notNullable();
    table.string("student_id").notNullable();
    table.foreign("student_id").references("id").inTable("students");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("certificates");
};
