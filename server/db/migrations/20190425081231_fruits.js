exports.up = (knex) => {
  return knex.schema.createTable('fruits', table => {
    table.increments('id').primary()
    table.string('name')
    table.integer('calories')
    table.string('added_by_user').references('users.auth0_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('fruits')
}
