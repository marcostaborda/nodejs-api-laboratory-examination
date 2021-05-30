import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Laboratories extends BaseSchema {
  protected tableName = 'laboratories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('address')
      table.boolean('is_active').defaultTo(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
