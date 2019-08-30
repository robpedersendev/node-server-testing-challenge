
exports.up = function(knex) {
 return knex.schema.createTable('students', table => {
   table.increments()
   table.string('name', 128)
     .notNullable()
     .unique()
   table.integer('course', 128)
     .notNullable()
 })
}

exports.down = function(knex) {
 return knex.schema.dropTableIfExists('students')
}
